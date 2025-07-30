import { TextareaProps } from '../Textarea/Textarea.types';

export interface CharacterCountProps extends Omit<TextareaProps, 'id' | 'onChange'> {
  /** Unique identifier for the character count */
  id: string;
  /** Maximum number of characters allowed */
  maxLength?: number;
  /** Maximum number of words allowed (alternative to maxLength) */
  maxWords?: number;
  /** Threshold percentage to start showing character count warning (default: 75) */
  threshold?: number;
  /** Name attribute for the textarea */
  name: string;
  /** Current value of the textarea */
  value?: string;
  /** Number of rows for the textarea */
  rows?: number;
  /** Additional CSS classes */
  className?: string;
  /** Message configuration for the character count */
  countMessage?: {
    /** Additional CSS classes for the count message */
    classes?: string;
  };
  /** Callback when the character count changes */
  onCountChange?: (count: number, remaining: number) => void;
  /** onChange handler for the textarea */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}