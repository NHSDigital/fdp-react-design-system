import { NavigationSplitViewProps, NavigationSplitItem } from "./NavigationSplitView.types";
import "./NavigationSplitView.scss";
/**
 * NavigationSplitView Component
 * Mobile-first master-detail navigation similar to SwiftUI NavigationSplitView.
 */
export declare function NavigationSplitView<ID = string, T extends NavigationSplitItem<ID> = NavigationSplitItem<ID>>(props: NavigationSplitViewProps<ID, T>): import("react/jsx-runtime").JSX.Element;
export declare namespace NavigationSplitView {
    var displayName: string;
}
