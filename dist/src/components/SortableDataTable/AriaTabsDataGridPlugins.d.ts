/**
 * Plugin system for AriaTabsDataGrid - Domain-specific extensions
 */
import { DataOperationConfig } from './AriaTabsDataGridTypes';
import { TabPanelConfig } from './AriaTabsDataGridTypes';
/**
 * E-commerce specific data operations
 */
export interface EcommerceProduct {
    id: string;
    name: string;
    price: number;
    discountedPrice?: number;
    inStock: boolean;
    category: string;
    rating: number;
    reviews: number;
    imageUrl?: string;
    tags: string[];
}
export declare const ecommerceDataConfig: DataOperationConfig<EcommerceProduct>;
export declare const createEcommerceTabs: (products: EcommerceProduct[]) => TabPanelConfig<EcommerceProduct>[];
/**
 * Financial data operations
 */
export interface FinancialTransaction {
    id: string;
    date: Date;
    amount: number;
    type: 'credit' | 'debit';
    category: string;
    description: string;
    accountId: string;
    pending: boolean;
    recurring: boolean;
}
export declare const financialDataConfig: DataOperationConfig<FinancialTransaction>;
export declare const createFinancialTabs: (transactions: FinancialTransaction[]) => TabPanelConfig<FinancialTransaction>[];
/**
 * Plugin registry for easy domain-specific configurations
 */
export declare const dataGridPlugins: {
    ecommerce: {
        name: string;
        description: string;
        dataConfig: DataOperationConfig<EcommerceProduct>;
        createTabs: (products: EcommerceProduct[]) => TabPanelConfig<EcommerceProduct>[];
    };
    financial: {
        name: string;
        description: string;
        dataConfig: DataOperationConfig<FinancialTransaction>;
        createTabs: (transactions: FinancialTransaction[]) => TabPanelConfig<FinancialTransaction>[];
    };
};
/**
 * Helper function to create a data grid with a specific plugin
 */
export declare const createPluginDataGrid: <T>(pluginName: keyof typeof dataGridPlugins, data: T[]) => {
    dataConfig: any;
    tabPanels: any;
};
