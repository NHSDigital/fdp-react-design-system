export type NodeId = string;
export type NodeKind = "root" | "pane" | "list" | "listitem" | "region";
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
export declare class FocusTree {
    root: NodeId;
    nodes: Map<NodeId, TreeNode>;
    current: NodeId;
    constructor(root: TreeNode);
    add(n: TreeNode): void;
    get(id: NodeId): TreeNode;
    parentOf(id: NodeId): TreeNode | undefined;
    indexOf(id: NodeId): number;
    sibling(id: NodeId, delta: number): TreeNode | undefined;
    firstChild(id: NodeId): TreeNode | undefined;
    lastChild(id: NodeId): TreeNode | undefined;
    focusNode(id: NodeId, focusInner?: boolean): void;
}
