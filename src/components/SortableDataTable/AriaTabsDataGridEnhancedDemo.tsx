import { useState, useCallback, useRef } from 'react';
import { AriaTabsDataGrid, AriaTabsDataGridRef } from './AriaTabsDataGrid';
import { createTCHTabsConfig, tchDataConfig } from './AriaTabsDataGridTCH';
import { createGenericTabsConfig, dataComparators, filterFunctions, booleanRenderers } from './AriaTabsDataGridFactory';
import { EWSPatientData } from './AriaTabsDataGridTypes';
import patientsData from './patients_with_ews.json';
import './AriaTabsDataGrid.scss';
import './AriaTabsDataGridDemo.scss';

// Example generic data for demonstration
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  category: string;
  lastUpdated: string;
}

const sampleProducts: Product[] = [
  { id: 1, name: 'Laptop Pro', price: 1299.99, inStock: true, category: 'Electronics', lastUpdated: '2024-01-15' },
  { id: 2, name: 'Wireless Mouse', price: 29.99, inStock: false, category: 'Electronics', lastUpdated: '2024-01-10' },
  { id: 3, name: 'Office Chair', price: 199.99, inStock: true, category: 'Furniture', lastUpdated: '2024-01-12' },
  { id: 4, name: 'Standing Desk', price: 399.99, inStock: true, category: 'Furniture', lastUpdated: '2024-01-08' },
];

/**
 * Enhanced demo showcasing both healthcare-specific and generic usage
 */
export function AriaTabsDataGridEnhancedDemo() {
  // Cast imported JSON to typed patient data
  const patients = patientsData as EWSPatientData[];
  
  // Component state
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState<EWSPatientData | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [demoMode, setDemoMode] = useState<'healthcare' | 'generic'>('healthcare');

  // References for both components
  const healthcareTabsRef = useRef<AriaTabsDataGridRef>(null);
  const genericTabsRef = useRef<AriaTabsDataGridRef>(null);

  // Healthcare tabs configuration
  const healthcareTabs = createTCHTabsConfig(patients);

  // Generic tabs configuration for products
  const productTabs = createGenericTabsConfig(sampleProducts, [
    {
      id: 'all-products',
      label: 'All Products',
      columns: [
        { key: 'name', label: 'Product Name' },
        { key: 'price', label: 'Price', render: (product: Product) => `$${product.price.toFixed(2)}` },
        { key: 'inStock', label: 'In Stock' },
        { key: 'category', label: 'Category' },
        { key: 'lastUpdated', label: 'Last Updated', render: (product: Product) => new Date(product.lastUpdated).toLocaleDateString() }
      ],
      ariaLabel: 'All Products Data Grid',
      ariaDescription: 'Complete list of products with pricing and availability'
    },
    {
      id: 'electronics',
      label: 'Electronics',
      columns: [
        { key: 'name', label: 'Product Name' },
        { key: 'price', label: 'Price', render: (product: Product) => `$${product.price.toFixed(2)}` },
        { key: 'inStock', label: 'Available' }
      ],
      filter: (products: Product[]) => products.filter(p => p.category === 'Electronics'),
      ariaLabel: 'Electronics Data Grid',
      ariaDescription: 'Electronics products only'
    },
    {
      id: 'furniture',
      label: 'Furniture',
      columns: [
        { key: 'name', label: 'Product Name' },
        { key: 'price', label: 'Price', render: (product: Product) => `$${product.price.toFixed(2)}` },
        { key: 'inStock', label: 'Available' }
      ],
      filter: (products: Product[]) => products.filter(p => p.category === 'Furniture'),
      ariaLabel: 'Furniture Data Grid',
      ariaDescription: 'Furniture products only'
    }
  ]);

  // Data operation configurations
  const productDataConfig = {
    dataComparator: dataComparators.id,
    filterFunction: filterFunctions.simple,
    booleanRenderer: booleanRenderers.yesNo,
    getDataId: (product: Product) => `product-${product.id}`
  };

  // Handle tab change
  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
  };

  // Handle healthcare row selection
  const handleHealthcareSelection = useCallback((rowData: EWSPatientData | null) => {
    setSelectedPatient(rowData);
  }, []);

  // Handle generic product selection
  const handleProductSelection = useCallback((rowData: Product | null) => {
    setSelectedProduct(rowData);
  }, []);

  return (
    <div className="aria-tabs-datagrid-demo">
      <div className="demo-header">
        <h1>AriaTabsDataGrid - Enhanced Demo</h1>
        <p>Showcasing both healthcare-specific and generic data usage</p>
        
        {/* Demo mode switcher */}
        <div className="demo-mode-switcher" style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => setDemoMode('healthcare')}
            style={{
              padding: '8px 16px',
              marginRight: '8px',
              backgroundColor: demoMode === 'healthcare' ? '#005eb8' : '#f0f4f8',
              color: demoMode === 'healthcare' ? 'white' : '#005eb8',
              border: '2px solid #005eb8',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Healthcare Demo
          </button>
          <button 
            onClick={() => setDemoMode('generic')}
            style={{
              padding: '8px 16px',
              backgroundColor: demoMode === 'generic' ? '#005eb8' : '#f0f4f8',
              color: demoMode === 'generic' ? 'white' : '#005eb8',
              border: '2px solid #005eb8',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Generic Products Demo
          </button>
        </div>
      </div>

      {/* Healthcare Demo */}
      {demoMode === 'healthcare' && (
        <>
          <h2>Healthcare Data Example</h2>
          <p>Using healthcare-specific data operations with custom filtering and NHS-compliant boolean rendering</p>
          
          <AriaTabsDataGrid
            ref={healthcareTabsRef}
            tabPanels={healthcareTabs}
            selectedIndex={selectedTabIndex}
            onTabChange={handleTabChange}
            onGlobalRowSelectionChange={handleHealthcareSelection}
            dataConfig={tchDataConfig}
            ariaLabel="Timely Care Data Table Concept"
            ariaDescription="Healthcare data with EWS scores and patient information"
            className="demo-tabs healthcare-demo"
            orientation="horizontal"
            data-testid="healthcare-tabs"
          />

          {/* Selected Patient Information */}
          {selectedPatient && (
            <div className="selected-item-info" style={{ 
              marginTop: '16px', 
              padding: '16px', 
              backgroundColor: '#f0f4f8', 
              borderRadius: '8px',
              border: '2px solid #005eb8'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#005eb8' }}>
                Selected Patient: {selectedPatient.name}
              </h4>
              <p style={{ margin: '0', fontSize: '14px' }}>
                <strong>Age:</strong> {selectedPatient.age} | 
                <strong> Ward:</strong> {selectedPatient.ward_name} | 
                <strong> Bed:</strong> {selectedPatient.bed_name} | 
                <strong> EWS Score:</strong> {selectedPatient.ews_score} |
                <strong> Specialty:</strong> {selectedPatient.speciality}
              </p>
              <p style={{ margin: '4px 0 0 0', fontSize: '12px', fontStyle: 'italic' }}>
                ✨ Using healthcare-specific data operations with custom patient comparison
              </p>
            </div>
          )}
        </>
      )}

      {/* Generic Demo */}
      {demoMode === 'generic' && (
        <>
          <h2>Generic Data Example</h2>
          <p>Using configurable data operations with ID-based comparison and custom boolean rendering</p>
          
          <AriaTabsDataGrid
            ref={genericTabsRef}
            tabPanels={productTabs}
            selectedIndex={selectedTabIndex}
            onTabChange={handleTabChange}
            onGlobalRowSelectionChange={handleProductSelection}
            dataConfig={productDataConfig}
            ariaLabel="Product Management System"
            ariaDescription="Generic product data with configurable operations"
            className="demo-tabs generic-demo"
            orientation="horizontal"
            data-testid="generic-tabs"
          />

          {/* Selected Product Information */}
          {selectedProduct && (
            <div className="selected-item-info" style={{ 
              marginTop: '16px', 
              padding: '16px', 
              backgroundColor: '#f0f4f8', 
              borderRadius: '8px',
              border: '2px solid #005eb8'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#005eb8' }}>
                Selected Product: {selectedProduct.name}
              </h4>
              <p style={{ margin: '0', fontSize: '14px' }}>
                <strong>Price:</strong> ${selectedProduct.price.toFixed(2)} | 
                <strong> Category:</strong> {selectedProduct.category} | 
                <strong> In Stock:</strong> {selectedProduct.inStock ? 'Yes' : 'No'} | 
                <strong> ID:</strong> {selectedProduct.id}
              </p>
              <p style={{ margin: '4px 0 0 0', fontSize: '12px', fontStyle: 'italic' }}>
                ✨ Using generic data operations with ID-based comparison and Yes/No boolean rendering
              </p>
            </div>
          )}
        </>
      )}

      {/* Configuration Information */}
      <div className="demo-configuration" style={{ 
        marginTop: '24px', 
        padding: '16px', 
        backgroundColor: '#ffffff', 
        borderRadius: '8px',
        border: '1px solid #d4d4d8'
      }}>
        <h3>Current Configuration</h3>
        {demoMode === 'healthcare' ? (
          <div>
            <p><strong>Data Comparator:</strong> Healthcare-specific (name + bed_name)</p>
            <p><strong>Filter Function:</strong> Healthcare filters (EWS scores, wards, specialties)</p>
            <p><strong>Boolean Renderer:</strong> NHS-compliant icons (✓/✗)</p>
            <p><strong>Data ID:</strong> Healthcare-specific (name-bed_name)</p>
          </div>
        ) : (
          <div>
            <p><strong>Data Comparator:</strong> ID-based comparison</p>
            <p><strong>Filter Function:</strong> Simple object property matching</p>
            <p><strong>Boolean Renderer:</strong> Yes/No text</p>
            <p><strong>Data ID:</strong> Product ID-based</p>
          </div>
        )}
      </div>

      {/* Footer Information */}
      <div className="demo-footer">
        <div className="demo-footer__help">
          <h4>Navigation Help:</h4>
          <ul>
            <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> - Navigate between interactive elements</li>
            <li><kbd>←</kbd> / <kbd>→</kbd> - Switch between tabs</li>
            <li><kbd>Home</kbd> / <kbd>End</kbd> - Go to first/last tab</li>
            <li><kbd>Enter</kbd> / <kbd>Space</kbd> - Activate focused tab</li>
            <li><kbd>↑</kbd> / <kbd>↓</kbd> - Navigate table rows</li>
            <li>Click column headers to sort data</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AriaTabsDataGridEnhancedDemo;
