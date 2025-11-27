/**
 * Header behaviour: progressive enhancement for navigation overflow & dropdown toggle.
 * Works on markup produced by Header (client) or HeaderServer (server) variants.
 */
interface HeaderBehaviourInstance {
	root: HTMLElement;
	destroy(): void;
}

const HEADER_SELECTOR = ".nhsuk-header";
const NAV_CONTAINER_SELECTOR = ".nhsuk-header__navigation-container";
const NAV_LIST_SELECTOR = ".nhsuk-header__navigation-list";
const DROPDOWN_MENU_CLASS = "nhsuk-header__dropdown-menu";
const DROPDOWN_LIST_CLASS = "nhsuk-header__dropdown-list";
const MORE_ITEM_CLASS = "nhsuk-header__navigation-item--more";
const NAV_ITEM_SELECTOR =
	".nhsuk-header__navigation-item:not(." + MORE_ITEM_CLASS + ")";

const DEBOUNCE_MS = 150;

function debounce<T extends (...args: any[]) => void>(
	fn: T,
	wait = DEBOUNCE_MS
) {
	let t: number | undefined;
	return (...args: Parameters<T>) => {
		if (t) window.clearTimeout(t);
		t = window.setTimeout(() => fn(...args), wait);
	};
}

export function initHeaders(
	scope: ParentNode = document
): HeaderBehaviourInstance[] {
	if (typeof window === "undefined") return [];
	const headers = Array.from(
		scope.querySelectorAll<HTMLElement>(HEADER_SELECTOR)
	);
	return headers
		.map(enhanceHeader)
		.filter(Boolean) as HeaderBehaviourInstance[];
}

export function detachHeaders(scope: ParentNode = document) {
	const headers = scope.querySelectorAll<HTMLElement>(HEADER_SELECTOR) || [];
	headers.forEach((h) => {
		const inst = (h as any)._nhsHeaderInstance as
			| HeaderBehaviourInstance
			| undefined;
		inst?.destroy();
	});
}

function enhanceHeader(root: HTMLElement): HeaderBehaviourInstance | null {
	if ((root as any)._nhsHeaderInstance) return (root as any)._nhsHeaderInstance;
	root.setAttribute("data-enhancing", "header");
	
	// Remove SSR hydrating marker to enable transitions
	const nav = root.querySelector('nav[data-ssr-hydrating]');
	if (nav) {
		nav.removeAttribute('data-ssr-hydrating');
	}
	
	const navContainer = root.querySelector<HTMLElement>(NAV_CONTAINER_SELECTOR);
	const navList = root.querySelector<HTMLUListElement>(NAV_LIST_SELECTOR);
	if (!navContainer || !navList) return null;

	// Capture original items (exclude potential more item)
	let originalItemsHTML = Array.from(
		navList.querySelectorAll<HTMLLIElement>(NAV_ITEM_SELECTOR)
	).map((li) => li.outerHTML);
	if (!originalItemsHTML.length) return null;

	let moreLi: HTMLLIElement | null = null;
	let dropdownMenu: HTMLDivElement | null = null;
	let dropdownList: HTMLUListElement | null = null;
	let open = false;

	function buildMore() {
		if (moreLi) return;
		moreLi = document.createElement("li");
		moreLi.className = `nhsuk-header__navigation-item ${MORE_ITEM_CLASS}`;
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "nhsuk-header__navigation-button";
		btn.id = "toggle-more-menu";
		btn.setAttribute("aria-expanded", "false");
		btn.setAttribute("aria-controls", "nhsuk-header-overflow-menu");
		btn.innerHTML =
			'<span>More</span><svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/></svg>';
		btn.addEventListener("click", toggle);
		moreLi.appendChild(btn);
	}

	function ensureDropdown() {
		if (dropdownMenu) return;
		dropdownMenu = document.createElement("div");
		dropdownMenu.className = DROPDOWN_MENU_CLASS;
		dropdownMenu.hidden = true;
		dropdownMenu.id = "nhsuk-header-overflow-menu";
		dropdownList = document.createElement("ul");
		dropdownList.className = DROPDOWN_LIST_CLASS;
		dropdownMenu.appendChild(dropdownList);
		root.appendChild(dropdownMenu);
	}

	function close() {
		if (!open) return;
		open = false;
		if (dropdownMenu) dropdownMenu.hidden = true;
		const btn = moreLi?.querySelector("button");
		btn?.setAttribute("aria-expanded", "false");
	}
	function openMenu() {
		if (open) return;
		open = true;
		if (dropdownMenu) dropdownMenu.hidden = false;
		const btn = moreLi?.querySelector("button");
		btn?.setAttribute("aria-expanded", "true");
	}
	function toggle() {
		open ? close() : openMenu();
	}

	function cloneToDropdown(li: HTMLLIElement) {
		const clone = li.cloneNode(true) as HTMLLIElement;
		clone.className = clone.className
			.replace(
				"nhsuk-header__navigation-item--current",
				"nhsuk-header__dropdown-item--current"
			)
			.replace("nhsuk-header__navigation-item", "nhsuk-header__dropdown-item");
		const link = clone.querySelector("a");
		if (link) link.className = "nhsuk-header__dropdown-link";
		return clone;
	}

	function measureWidths(): number[] {
		const measureUl = document.createElement("ul");
		measureUl.className = "nhsuk-header__navigation-list";
		measureUl.style.cssText =
			"position:absolute;visibility:hidden;left:-9999px;top:0;display:flex;flex-wrap:nowrap;";
		measureUl.innerHTML = originalItemsHTML.join("");
		document.body.appendChild(measureUl);
		const w = Array.from(measureUl.children).map(
			(li) => (li as HTMLElement).offsetWidth
		);
		document.body.removeChild(measureUl);
		return w;
	}

	function distribute() {
		close();
		if (!navList) return;
		root.dataset.headerDistStart = String(Date.now());
		const widths = measureWidths();
		root.dataset.headerLastCalc = root.dataset.headerDistStart;
		if (!widths.length) return;
		if (!navContainer) return; // safety
		const containerWidth = navContainer.offsetWidth;
		if (containerWidth <= 0) return;

		const mobile = window.innerWidth < 768;
		const gutterSize = mobile ? 16 : 32;
		const availableContainerWidth = containerWidth - gutterSize * 2;
		const moreButtonReserve = mobile ? 72 : 100;

		navList.innerHTML = "";
		navList.style.display = "flex";
		navList.style.flexWrap = "nowrap";
		if (dropdownMenu) {
			dropdownMenu.hidden = true;
			dropdownList!.innerHTML = "";
		}

		// Restore original items for baseline (so width comparisons are accurate)
		navList.innerHTML = originalItemsHTML.join("");
		const realScrollWidth = navList.scrollWidth;
		root.dataset.headerRealScroll = String(realScrollWidth);
		root.dataset.headerAvail = String(availableContainerWidth);
		const fits = realScrollWidth <= availableContainerWidth - 4;
		// console.log("[headerBehaviour] distribute:measure", {
		// 	mobile,
		// 	itemCount: widths.length,
		// 	containerWidth,
		// 	availableContainerWidth,
		// 	realScrollWidth,
		// 	fits,
		// 	totalWidth,
		// });
		if (fits) {
			if (dropdownMenu) {
				dropdownMenu.remove();
				dropdownMenu = null;
				dropdownList = null;
			}
			root.dataset.headerOverflow = "none";
			return;
		}

		buildMore();
		ensureDropdown();
		const availableForItems = availableContainerWidth - moreButtonReserve;
		let running = 0;
		let fitCount = 0;
		for (let i = 0; i < widths.length; i++) {
			if (running + widths[i] <= availableForItems) {
				running += widths[i];
				fitCount = i + 1;
			} else break;
		}
		// If all items fit even after reserving space for the potential More button, don't show it.
		if (fitCount === widths.length) {
			// Clean up any previous dropdown/more button artifacts
			if (dropdownMenu) {
				dropdownMenu.remove();
				dropdownMenu = null;
				dropdownList = null;
			}
			moreLi = null; // allow rebuild later if needed
			navList.innerHTML = originalItemsHTML.join("");
			root.dataset.headerOverflow = "none";
			root.classList.remove("nhsuk-header--nav-overflow-active");
			return;
		}

		// Ensure at least one item stays visible when overflow occurs
		fitCount = Math.max(1, fitCount);
		navList.innerHTML = "";
		for (let i = 0; i < fitCount; i++) {
			navList.insertAdjacentHTML("beforeend", originalItemsHTML[i]);
		}
		navList.appendChild(moreLi!);
		for (let i = fitCount; i < originalItemsHTML.length; i++) {
			const temp = document.createElement("div");
			temp.innerHTML = originalItemsHTML[i];
			const li = temp.firstElementChild as HTMLLIElement | null;
			if (!li) continue;
			dropdownList!.appendChild(cloneToDropdown(li));
		}
		const postScroll = navList.scrollWidth;
		root.dataset.headerPostScroll = String(postScroll);
		root.dataset.headerOverflow = "active";
		root.classList.add("nhsuk-header--nav-overflow-active");
	}

	// Observe external (React) re-renders that replace the navigation list contents and re-apply overflow.
	let internalMutation = false;
	const observer = new MutationObserver((mutations) => {
		if (internalMutation) return;
		if (mutations.some((m) => m.type === "childList")) {
			const currentItems = Array.from(
				navList.querySelectorAll<HTMLLIElement>(NAV_ITEM_SELECTOR)
			);
			if (
				currentItems.length &&
				currentItems.length !== originalItemsHTML.length
			) {
				originalItemsHTML = currentItems.map((li) => li.outerHTML);
			}
			requestAnimationFrame(guardedDistribute);
		}
	});
	observer.observe(navList, { childList: true });

	function guardedDistribute() {
		internalMutation = true;
		try {
			distribute();
		} finally {
			setTimeout(() => {
				internalMutation = false;
			}, 0);
		}
	}
	const handleKey = (e: KeyboardEvent) => {
		if (e.key === "Escape") close();
	};
	const handleDocClick = (e: MouseEvent) => {
		if (open && !root.contains(e.target as Node)) close();
	};
	const handleResize = debounce(guardedDistribute, 150);
	window.addEventListener("resize", handleResize);
	window.addEventListener("orientationchange", handleResize);
	document.addEventListener("keydown", handleKey);
	document.addEventListener("mousedown", handleDocClick);
	requestAnimationFrame(guardedDistribute);

	const instance: HeaderBehaviourInstance = {
		root,
		destroy() {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", handleResize);
			document.removeEventListener("keydown", handleKey);
			document.removeEventListener("mousedown", handleDocClick);
			observer.disconnect();
			close();
		},
	};
	root.classList.add("nhsuk-header--enhanced");
	(root as any)._nhsHeaderInstance = instance;
	return instance;
}
