import * as React from "react";

export function useCollapsibleNav(args: {
	enabled: boolean;
	isAtLeastMedium: boolean;
	initiallyCollapsed: boolean;
	persist?: "localStorage" | "url" | "both";
	storageKey: string;
	urlParam: string;
	onChange?: (collapsed: boolean) => void;
}) {
	const {
		enabled,
		isAtLeastMedium,
		initiallyCollapsed,
		persist,
		storageKey,
		urlParam,
		onChange,
	} = args;

	const initialCollapsed = React.useMemo(() => {
		if (
			persist &&
			(persist === "url" || persist === "both") &&
			typeof window !== "undefined"
		) {
			const sp = new URLSearchParams(window.location.search);
			const val = sp.get(urlParam);
			if (val === "1") return true;
			if (val === "0") return false;
		}
		if (
			persist &&
			(persist === "localStorage" || persist === "both") &&
			typeof window !== "undefined"
		) {
			try {
				const raw = window.localStorage.getItem(storageKey);
				if (raw === "1") return true;
				if (raw === "0") return false;
			} catch {}
		}
		return initiallyCollapsed;
	}, [persist, initiallyCollapsed, storageKey, urlParam]);

	const [collapsed, setCollapsed] = React.useState(initialCollapsed);

	React.useEffect(() => {
		onChange?.(collapsed);
	}, [collapsed, onChange]);

	const toggle = React.useCallback(() => {
		if (enabled && isAtLeastMedium) setCollapsed((c) => !c);
	}, [enabled, isAtLeastMedium]);

	React.useEffect(() => {
		if (!persist || typeof window === "undefined") return;
		if (persist === "localStorage" || persist === "both") {
			try {
				window.localStorage.setItem(storageKey, collapsed ? "1" : "0");
			} catch {}
		}
		if (persist === "url" || persist === "both") {
			const sp = new URLSearchParams(window.location.search);
			sp.set(urlParam, collapsed ? "1" : "0");
			const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
			window.history.replaceState(null, "", newUrl);
		}
	}, [collapsed, persist, storageKey, urlParam]);

	return { collapsed, toggle };
}
