import { AccountProps } from '../Account/Account.types';
import { HeaderSearchProps } from '../HeaderSearch/HeaderSearch.types';
export interface HeaderProps {
    /** Additional CSS classes */
    className?: string;
    /** Logo configuration */
    logo?: {
        href?: string;
        src?: string;
        ariaLabel?: string;
    };
    /** Service configuration */
    service?: {
        text?: string;
        href?: string;
    };
    /** Organisation configuration (for organisation header variant) */
    organisation?: {
        name?: string;
        split?: string;
        descriptor?: string;
    };
    /** Search configuration */
    search?: HeaderSearchProps;
    /** Account configuration */
    account?: Pick<AccountProps, 'ariaLabel' | 'items' | 'className'>;
    /** Navigation configuration */
    navigation?: {
        ariaLabel?: string;
        items?: Array<NavigationItem>;
        className?: string;
        justified?: boolean;
        white?: boolean;
    };
    /** Container classes */
    containerClasses?: string;
    /** Header variant */
    variant?: 'default' | 'white' | 'organisation';
    /** Maximum visible navigation items before showing "More" (for HeaderStatic) */
    maxVisibleItems?: number;
    /** Additional HTML attributes */
    attributes?: Record<string, any>;
}
export interface NavigationItem {
    /** Link URL */
    href: string;
    /** Display text */
    text?: string;
    /** HTML content (overrides text) */
    html?: string;
    /** Whether this item is active/current */
    active?: boolean;
    /** Whether this item represents the current page */
    current?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Additional HTML attributes */
    attributes?: Record<string, any>;
}
