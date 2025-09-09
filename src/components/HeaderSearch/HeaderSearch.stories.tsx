import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { HeaderSearch } from './HeaderSearch';
import { HeaderSearchProps, SearchQuery, SearchResult } from './HeaderSearch.types';

const meta: Meta<typeof HeaderSearch> = {
  title: 'Components/Header/HeaderSearch',
  component: HeaderSearch,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The HeaderSearch component provides a flexible search form for NHS headers, supporting three interaction modes:

## Modes

### Form Mode (default)
Traditional form submission for SSR environments. The form submits to a server endpoint with standard browser behavior.

### Controlled Mode
Full React controlled component with callbacks for SPA environments. Handle search results entirely client-side.

### Hybrid Mode
Progressive enhancement - combines form submission with optional client-side callbacks. Perfect for graceful degradation.

## Features
- NHS design system compliant styling
- Accessible search form with proper ARIA attributes
- Debounced search for controlled mode
- Loading states and result dropdowns
- Mobile responsive design
- Clear functionality
- TypeScript support
        `
      }
    }
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['form', 'controlled', 'hybrid'],
      description: 'Search interaction mode',
    },
    action: {
      control: 'text',
      description: 'Search action URL (form/hybrid modes)'
    },
    placeholder: {
      control: 'text',
      description: 'Search input placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the search is disabled'
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state indicator'
    },
    showResults: {
      control: 'boolean',
      description: 'Whether to show search results dropdown'
    }
  }
};

export default meta;
type Story = StoryObj<HeaderSearchProps>;

// Mock search results for demonstrations
const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'NHS Services',
    description: 'Find NHS services near you',
    href: '/services',
  },
  {
    id: '2',
    title: 'Health A-Z',
    description: 'Browse conditions and treatments',
    href: '/conditions',
  },
  {
    id: '3',
    title: 'Medicines A-Z',
    description: 'Find information about medicines',
    href: '/medicines',
  },
];

export const FormMode: Story = {
  args: {
    mode: 'form',
    placeholder: 'Search the NHS website',
    action: 'https://www.nhs.uk/search/',
  },
  parameters: {
    docs: {
      description: {
        story: `**Form Mode** - Traditional form submission (SSR-friendly)
        
This is the default mode that submits to a server endpoint. Perfect for SSR environments where you want the browser to handle form submission naturally.`
      }
    }
  }
};

export const ControlledMode: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const handleSearch = async (query: SearchQuery) => {
      console.log('Searching for:', query.query);
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setSearchResults(mockResults.filter(result => 
          result.title.toLowerCase().includes(query.query.toLowerCase()) ||
          (result.description && result.description.toLowerCase().includes(query.query.toLowerCase()))
        ));
        setShowResults(true);
        setIsLoading(false);
      }, 800);
    };

    const handleChange = (value: string) => {
      setSearchValue(value);
      if (value.length < 2) {
        setShowResults(false);
        setSearchResults([]);
      }
    };

    return (
      <HeaderSearch
        mode="controlled"
        value={searchValue}
        placeholder="Type to search..."
        isLoading={isLoading}
        showResults={showResults}
        results={searchResults}
        callbacks={{
          onChange: handleChange,
          onSearch: handleSearch,
          onFocus: () => console.log('Input focused'),
          onBlur: () => setTimeout(() => setShowResults(false), 200),
          onClear: () => {
            setSearchValue('');
            setShowResults(false);
            setSearchResults([]);
          }
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `**Controlled Mode** - Full React controlled component
        
In this mode, the component is fully controlled by React state and callbacks. Perfect for SPA environments where you want to handle search results client-side.
        
Features demonstrated:
- Controlled input value
- Real-time search with debouncing
- Loading states
- Search results dropdown
- Client-side result filtering`
      }
    }
  }
};

export const HybridMode: Story = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleClientSearch = (query: SearchQuery) => {
      console.log('Client-side search triggered:', query.query);
      setSearchQuery(query.query);
      // Could trigger analytics, suggestions, etc.
    };

    return (
      <div>
        <HeaderSearch
          mode="hybrid"
          action="/search"
          placeholder="Progressive enhancement search"
          callbacks={{
            onSearch: handleClientSearch,
            onChange: (value) => console.log('Input changed:', value),
          }}
        />
        {searchQuery && (
          <div style={{ padding: '1rem', background: '#f0f4f7', marginTop: '1rem' }}>
            <p><strong>Client-side enhancement triggered!</strong></p>
            <p>Query: "{searchQuery}"</p>
            <p>Form will also submit to: /search</p>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `**Hybrid Mode** - Progressive enhancement
        
This mode combines form submission with optional client-side enhancement. The form will submit normally (great for accessibility and no-JS environments), but you can also enhance the experience with client-side callbacks.
        
Perfect for:
- Progressive enhancement strategies
- Analytics tracking
- Real-time suggestions while maintaining form fallback
- Graceful degradation`
      }
    }
  }
};

export const LoadingState: Story = {
  args: {
    mode: 'controlled',
    placeholder: 'Search in progress...',
    isLoading: true,
    value: 'NHS services',
  },
  parameters: {
    docs: {
      description: {
        story: 'HeaderSearch showing loading state with spinner icon.'
      }
    }
  }
};

export const WithResults: Story = {
  args: {
    mode: 'controlled',
    placeholder: 'Search with results',
    value: 'NHS',
    showResults: true,
    results: mockResults,
  },
  parameters: {
    docs: {
      description: {
        story: 'HeaderSearch displaying search results dropdown.'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'HeaderSearch in disabled state.'
      }
    }
  }
};

export const CustomLabels: Story = {
  args: {
    visuallyHiddenLabel: 'Search the medical database',
    visuallyHiddenButton: 'Submit search',
    placeholder: 'Enter medical terms...'
  },
  parameters: {
    docs: {
      description: {
        story: 'HeaderSearch with custom accessibility labels.'
      }
    }
  }
};
