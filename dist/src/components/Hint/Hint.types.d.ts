export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The HTML id attribute for the hint */
    id?: string;
    /** Additional CSS classes */
    className?: string;
    /** Children elements */
    children: React.ReactNode;
}
