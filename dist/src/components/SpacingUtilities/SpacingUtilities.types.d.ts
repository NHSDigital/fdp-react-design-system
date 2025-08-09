export interface SpacingUtilitiesProps {
    /**
     * Enable debug mode to visualize spacing utilities
     */
    debug?: boolean;
    /**
     * Custom class name for the wrapper
     */
    className?: string;
    /**
     * Children to render inside the spacing utilities container
     */
    children?: React.ReactNode;
}
export interface SpacingUtilityClassNames {
    margin: string[];
    marginTop: string[];
    marginRight: string[];
    marginBottom: string[];
    marginLeft: string[];
    padding: string[];
    paddingTop: string[];
    paddingRight: string[];
    paddingBottom: string[];
    paddingLeft: string[];
    responsive: {
        margin: string[];
        marginTop: string[];
        marginRight: string[];
        marginBottom: string[];
        marginLeft: string[];
        padding: string[];
        paddingTop: string[];
        paddingRight: string[];
        paddingBottom: string[];
        paddingLeft: string[];
    };
}
