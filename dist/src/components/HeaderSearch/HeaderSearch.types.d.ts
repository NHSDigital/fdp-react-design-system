import { FormHTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
/**
 * Search handling modes:
 * - 'form': Traditional form submission (SSR-friendly)
 * - 'controlled': React controlled component with callbacks
 * - 'hybrid': Form submission with optional client-side enhancement
 */
export type SearchMode = 'form' | 'controlled' | 'hybrid';
/**
 * Search query data passed to callbacks
 */
export interface SearchQuery {
    query: string;
    timestamp: number;
    formData?: FormData;
}
/**
 * Search callbacks for client-side handling
 */
export interface SearchCallbacks {
    /** Called when search is submitted */
    onSearch?: (data: SearchQuery) => void | Promise<void>;
    /** Called when search input changes (for controlled mode) */
    onChange?: (query: string) => void;
    /** Called when search input receives focus */
    onFocus?: () => void;
    /** Called when search input loses focus */
    onBlur?: () => void;
    /** Called when search is cleared */
    onClear?: () => void;
}
/**
 * Search result item for dropdown results
 */
export interface SearchResult {
    id: string;
    title: string;
    href?: string;
    description?: string;
}
export interface HeaderSearchProps {
    /**
     * Search behavior mode. Defaults to 'form' for SSR compatibility.
     */
    mode?: SearchMode;
    /**
     * Search action URL. Defaults to NHS.UK search if not provided.
     */
    action?: string;
    /**
     * HTTP method for form submission. Defaults to 'get'.
     */
    method?: 'get' | 'post';
    /**
     * Search input name attribute. Defaults to 'q'.
     */
    name?: string;
    /**
     * Current search value (for controlled mode).
     */
    value?: string;
    /**
     * Search input placeholder text. Defaults to 'Search'.
     */
    placeholder?: string;
    /**
     * Visually hidden label text for screen readers. Defaults to 'Search the NHS website'.
     */
    visuallyHiddenLabel?: string;
    /**
     * Visually hidden button text for screen readers. Defaults to 'Search'.
     */
    visuallyHiddenButton?: string;
    /**
     * Additional CSS classes for the search container.
     */
    className?: string;
    /**
     * Whether the search is disabled.
     */
    disabled?: boolean;
    /**
     * Search callbacks for client-side handling.
     */
    callbacks?: SearchCallbacks;
    /**
     * Whether the search is in a loading state.
     */
    isLoading?: boolean;
    /**
     * Whether to show search results dropdown.
     */
    showResults?: boolean;
    /**
     * Array of search results to display in dropdown.
     */
    results?: SearchResult[];
    /**
     * Additional attributes for the search form.
     */
    formAttributes?: Omit<FormHTMLAttributes<HTMLFormElement>, 'action' | 'method' | 'onSubmit'>;
    /**
     * Additional attributes for the search input.
     */
    inputAttributes?: Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'onBlur'>;
    /**
     * Additional attributes for the search button.
     */
    buttonAttributes?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;
    /**
     * For hybrid mode - prevent form submission when callback is provided.
     */
    preventDefaultSubmit?: boolean;
    /**
     * Debounce delay in milliseconds for onChange callback. Defaults to 300.
     */
    debounceMs?: number;
    /**
     * Minimum characters before triggering search. Defaults to 1.
     */
    minQueryLength?: number;
}
