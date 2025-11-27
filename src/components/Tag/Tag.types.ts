export type TagColor = 
  | 'default'
  | 'white' 
  | 'grey'
  | 'green'
  | 'aqua-green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

export interface TagProps {
  /** Text content for the tag */
  text?: string;
  /** HTML content for the tag (takes precedence over text) */
  html?: string;
  /** React children (takes precedence over text and html) */
  children?: React.ReactNode;
  /** Color variant for the tag */
  color?: TagColor;
  /** Whether to remove the border */
  noBorder?: boolean;
  /** Whether the tag can be closed/removed */
  closable?: boolean;
  /** Callback when the close button is clicked */
  onClose?: () => void;
  /** Whether the tag is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}
