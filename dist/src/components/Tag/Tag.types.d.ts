export type TagColor = 'default' | 'white' | 'grey' | 'green' | 'aqua-green' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow';
export interface TagProps {
    /** Text content for the tag */
    text?: string;
    /** HTML content for the tag (takes precedence over text) */
    html?: string;
    /** Color variant for the tag */
    color?: TagColor;
    /** Whether to remove the border */
    noBorder?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Additional HTML attributes */
    [key: string]: any;
}
