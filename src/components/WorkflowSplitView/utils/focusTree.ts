export type NodeId = string;

export type NodeKind =
	| "root"
	| "pane" // nav/content/secondary containers
	| "list" // the UL in nav
	| "listitem" // each nav item
	| "region"; // optional sub-sections inside content/secondary

export interface FocusHandle {
	getEl(): HTMLElement | null;
	firstFocusable?: () => HTMLElement | null;
}

export interface TreeNode {
	id: NodeId;
	kind: NodeKind;
	parent?: NodeId;
	children: NodeId[];
	handle: FocusHandle;
	label?: string;
	disabled?: boolean;
}

export class FocusTree {
	root: NodeId;
	nodes: Map<NodeId, TreeNode> = new Map();
	current: NodeId;

	constructor(root: TreeNode) {
		this.root = root.id;
		this.add(root);
		this.current = root.id;
	}

	add(n: TreeNode) {
		this.nodes.set(n.id, n);
	}

	get(id: NodeId) {
		const n = this.nodes.get(id);
		if (!n) throw new Error(`FocusTree: missing node ${id}`);
		return n;
	}

	parentOf(id: NodeId) {
		const n = this.get(id);
		return n.parent ? this.get(n.parent) : undefined;
	}

	indexOf(id: NodeId) {
		const p = this.parentOf(id);
		if (!p) return -1;
		return p.children.indexOf(id);
	}

	sibling(id: NodeId, delta: number) {
		const p = this.parentOf(id);
		if (!p) return undefined;
		const i = this.indexOf(id);
		const next = Math.max(0, Math.min(p.children.length - 1, i + delta));
		const sibId = p.children[next];
		return sibId !== undefined ? this.get(sibId) : undefined;
	}

	firstChild(id: NodeId) {
		const n = this.get(id);
		return n.children.length ? this.get(n.children[0]) : undefined;
	}

	lastChild(id: NodeId) {
		const n = this.get(id);
		return n.children.length ? this.get(n.children[n.children.length - 1]) : undefined;
	}

	focusNode(id: NodeId, focusInner = false) {
		this.current = id;
		const node = this.get(id);
		const el = focusInner && node.handle.firstFocusable ? node.handle.firstFocusable() : node.handle.getEl();
		try {
			el?.focus?.({ preventScroll: true } as any);
		} catch {
			el?.focus?.();
		}
	}
}
