import type { Meta, StoryObj } from '@storybook/react';
import { AriaTabsDataGridDemo } from './AriaTabsDataGridDemo';

const meta: Meta<typeof AriaTabsDataGridDemo> = {
  title: 'NHS/Data/SortableDataTable',
  component: AriaTabsDataGridDemo,
  // Removed 'autodocs' tag; dedicated docs page exists
  parameters: {
    layout: 'fullscreen',
    documentation: {
		title: 'Old Documentation',
	  	description: 'This is the old documentation for the AriaTabsDataGrid component.',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AriaTabsDataGridDemo>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This is the complete demonstration of the AriaTabsDataGrid component showing real NHS patient data
across four specialized healthcare views:

### Tab Overview

1. **Patient Overview**: Core patient information for general management
2. **Vital Signs & EWS**: Clinical measurements and early warning scores
3. **Discharge Planning**: Discharge coordination and planning data
4. **Bed Management**: Location and logistics information

### Interactive Features

- **Tab Navigation**: Click tabs or use left/right arrow keys to switch views
- **Data Grid Sorting**: Click column headers to sort data within each tab
- **Filter Presets**: Use the filter buttons to apply common healthcare filters
- **Statistics Display**: View patient statistics and counts for each category
- **Row Selection**: Click rows to select patients for further action
        `,
      },
    },
  },
};

