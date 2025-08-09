export interface HeaderSearchProps {
    /**
     * Search action URL. Defaults to NHS.UK search if not provided.
     */
    action?: string;
    /**
     * Search input name attribute. Defaults to 'q'.
     */
    name?: string;
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
     * Additional attributes for the search form.
     */
    formAttributes?: React.FormHTMLAttributes<HTMLFormElement>;
    /**
     * Additional attributes for the search input.
     */
    inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
    /**
     * Additional attributes for the search button.
     */
    buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
