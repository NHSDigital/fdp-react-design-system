export interface ErrorMessageProps {
    /** The HTML id attribute for the error message */
    id?: string;
    /** Additional CSS classes */
    className?: string;
    /** Whether to show the "Error:" prefix */
    visuallyHiddenText?: string;
    /** Children elements */
    children: React.ReactNode;
}
