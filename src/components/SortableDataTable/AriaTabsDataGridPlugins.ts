/**
 * Plugin system for AriaTabsDataGrid - Domain-specific extensions
 */

import { DataOperationConfig } from './AriaTabsDataGridTypes';
import { TabPanelConfig } from './AriaTabsDataGridTypes';
import { createGenericTabsConfig, GenericTabDefinition } from './AriaTabsDataGridFactory';
import { booleanIcon } from './icons';
import React from 'react';

/**
 * Generic boolean renderer using NHS SVG icons
 */
const renderBooleanWithIcon = (value: boolean): React.ReactNode => {
  const iconEntry = booleanIcon.find(icon => icon.value === value);
  return iconEntry ? iconEntry.icon : null;
};

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

export const ecommerceDataConfig: DataOperationConfig<EcommerceProduct> = {
  dataComparator: (a, b) => a.id === b.id,
  filterFunction: (data, filters) => {
    if (!filters) return data;
    
    return data.filter(product => {
      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        const price = product.discountedPrice || product.price;
        if (price < min || price > max) return false;
      }
      
      // Category filter
      if (filters.categories && filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) return false;
      }
      
      // In stock filter
      if (filters.inStock !== undefined) {
        if (product.inStock !== filters.inStock) return false;
      }
      
      // Rating filter
      if (filters.minRating !== undefined) {
        if (product.rating < filters.minRating) return false;
      }
      
      // Tag filter
      if (filters.tags && filters.tags.length > 0) {
        if (!filters.tags.some((tag: string) => product.tags.includes(tag))) return false;
      }
      
      return true;
    });
  },
  booleanRenderer: (value) => renderBooleanWithIcon(value),
  getDataId: (product) => `ecommerce-${product.id}`
};

export const createEcommerceTabs = (products: EcommerceProduct[]): TabPanelConfig<EcommerceProduct>[] => {
  const tabDefinitions: GenericTabDefinition<EcommerceProduct>[] = [
    {
      id: 'all-products',
      label: 'All Products',
      columns: [
        { key: 'name', label: 'Product Name' },
        { 
          key: 'price', 
          label: 'Price', 
          render: (product) => {
            if (product.discountedPrice) {
              return `$${product.price.toFixed(2)} → $${product.discountedPrice.toFixed(2)}`;
            }
            return `$${product.price.toFixed(2)}`;
          }
        },
        { key: 'inStock', label: 'Availability' },
        { key: 'category', label: 'Category' },
        { 
          key: 'rating', 
          label: 'Rating',
          render: (product) => `${product.rating}/5 (${product.reviews} reviews)`
        }
      ],
      ariaLabel: 'All Products Grid',
      ariaDescription: 'Complete product catalog with pricing and availability'
    },
    {
      id: 'on-sale',
      label: 'On Sale',
      columns: [
        { key: 'name', label: 'Product Name' },
        { 
          key: 'price', 
          label: 'Original Price',
          render: (product) => `$${product.price.toFixed(2)}`
        },
        { 
          key: 'discountedPrice', 
          label: 'Sale Price',
          render: (product) => `$${product.discountedPrice?.toFixed(2) || 'N/A'}`
        },
        { 
          key: 'discount', 
          label: 'Discount',
          render: (product) => {
            if (product.discountedPrice) {
              const discount = ((product.price - product.discountedPrice) / product.price * 100);
              return `${discount.toFixed(0)}% OFF`;
            }
            return 'N/A';
          }
        }
      ],
      filter: (products) => products.filter(p => p.discountedPrice !== undefined),
      ariaLabel: 'Sale Products Grid',
      ariaDescription: 'Products currently on sale with discounted pricing'
    },
    {
      id: 'high-rated',
      label: 'Top Rated',
      columns: [
        { key: 'name', label: 'Product Name' },
        { key: 'rating', label: 'Rating' },
        { key: 'reviews', label: 'Reviews' },
        { key: 'category', label: 'Category' }
      ],
      filter: (products) => products.filter(p => p.rating >= 4.0),
      sortConfig: [{ key: 'rating', direction: 'desc' }],
      ariaLabel: 'Top Rated Products Grid',
      ariaDescription: 'Highest rated products with 4+ star ratings'
    }
  ];

  return createGenericTabsConfig(products, tabDefinitions);
};

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

export const financialDataConfig: DataOperationConfig<FinancialTransaction> = {
  dataComparator: (a, b) => a.id === b.id,
  filterFunction: (data, filters) => {
    if (!filters) return data;
    
    return data.filter(transaction => {
      // Date range filter
      if (filters.dateRange) {
        const [startDate, endDate] = filters.dateRange;
        if (transaction.date < startDate || transaction.date > endDate) return false;
      }
      
      // Amount range filter
      if (filters.amountRange) {
        const [min, max] = filters.amountRange;
        if (Math.abs(transaction.amount) < min || Math.abs(transaction.amount) > max) return false;
      }
      
      // Transaction type filter
      if (filters.types && filters.types.length > 0) {
        if (!filters.types.includes(transaction.type)) return false;
      }
      
      // Category filter
      if (filters.categories && filters.categories.length > 0) {
        if (!filters.categories.includes(transaction.category)) return false;
      }
      
      // Pending status filter
      if (filters.pending !== undefined) {
        if (transaction.pending !== filters.pending) return false;
      }
      
      return true;
    });
  },
  booleanRenderer: (value) => renderBooleanWithIcon(value),
  getDataId: (transaction) => `financial-${transaction.id}`
};

export const createFinancialTabs = (transactions: FinancialTransaction[]): TabPanelConfig<FinancialTransaction>[] => {
  const tabDefinitions: GenericTabDefinition<FinancialTransaction>[] = [
    {
      id: 'all-transactions',
      label: 'All Transactions',
      columns: [
        { 
          key: 'date', 
          label: 'Date',
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: 'description', label: 'Description' },
        { 
          key: 'amount', 
          label: 'Amount',
          render: (transaction) => {
            const prefix = transaction.type === 'credit' ? '+' : '-';
            return `${prefix}$${Math.abs(transaction.amount).toFixed(2)}`;
          }
        },
        { key: 'category', label: 'Category' },
        { key: 'pending', label: 'Status' }
      ],
      sortConfig: [{ key: 'date', direction: 'desc' }],
      ariaLabel: 'All Transactions Grid',
      ariaDescription: 'Complete transaction history with amounts and categories'
    },
    {
      id: 'credits',
      label: 'Credits',
      columns: [
        { 
          key: 'date', 
          label: 'Date',
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: 'description', label: 'Description' },
        { 
          key: 'amount', 
          label: 'Amount',
          render: (transaction) => `+$${transaction.amount.toFixed(2)}`
        },
        { key: 'category', label: 'Category' }
      ],
      filter: (transactions) => transactions.filter(t => t.type === 'credit'),
      ariaLabel: 'Credit Transactions Grid',
      ariaDescription: 'Incoming payments and credits only'
    },
    {
      id: 'debits',
      label: 'Debits',
      columns: [
        { 
          key: 'date', 
          label: 'Date',
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: 'description', label: 'Description' },
        { 
          key: 'amount', 
          label: 'Amount',
          render: (transaction) => `-$${Math.abs(transaction.amount).toFixed(2)}`
        },
        { key: 'category', label: 'Category' }
      ],
      filter: (transactions) => transactions.filter(t => t.type === 'debit'),
      ariaLabel: 'Debit Transactions Grid',
      ariaDescription: 'Outgoing payments and charges only'
    },
    {
      id: 'pending',
      label: 'Pending',
      columns: [
        { 
          key: 'date', 
          label: 'Date',
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: 'description', label: 'Description' },
        { 
          key: 'amount', 
          label: 'Amount',
          render: (transaction) => {
            const prefix = transaction.type === 'credit' ? '+' : '-';
            return `${prefix}$${Math.abs(transaction.amount).toFixed(2)}`;
          }
        },
        { key: 'type', label: 'Type' }
      ],
      filter: (transactions) => transactions.filter(t => t.pending),
      ariaLabel: 'Pending Transactions Grid',
      ariaDescription: 'Transactions awaiting processing'
    }
  ];

  return createGenericTabsConfig(transactions, tabDefinitions);
};

/**
 * Plugin registry for easy domain-specific configurations
 */
export const dataGridPlugins = {
  ecommerce: {
    name: 'E-commerce',
    description: 'Product catalogs with pricing, inventory, and ratings',
    dataConfig: ecommerceDataConfig,
    createTabs: createEcommerceTabs
  },
  financial: {
    name: 'Financial',
    description: 'Transaction data with amounts, categories, and statuses',
    dataConfig: financialDataConfig,
    createTabs: createFinancialTabs
  }
};

/**
 * Helper function to create a data grid with a specific plugin
 */
export const createPluginDataGrid = <T>(
  pluginName: keyof typeof dataGridPlugins,
  data: T[]
) => {
  const plugin = dataGridPlugins[pluginName] as any;
  return {
    dataConfig: plugin.dataConfig,
    tabPanels: plugin.createTabs(data)
  };
};
