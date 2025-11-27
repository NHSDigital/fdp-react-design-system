import { Account } from './Account/Account';
import { PageTemplate } from './PageTemplate/PageTemplate';

// Test Account component standalone
const AccountWithIcon = () => (
  <Account
    items={[
      { text: 'Profile', href: '/profile', icon: true },
      { text: 'Settings', href: '/settings' },
      { text: 'Sign out', href: '/signout' },
    ]}
  />
);

// Test Account in PageTemplate
const PageTemplateWithAccount = () => (
  <PageTemplate
    pageTitle="Test Page"
    account={{
      items: [
        { text: 'Dr. Smith', href: '/profile', icon: true },
        { text: 'Settings', href: '/settings' },
        { text: 'Sign out', action: '/logout', method: 'post' },
      ],
    }}
  >
    <p>Test content</p>
  </PageTemplate>
);

export { AccountWithIcon, PageTemplateWithAccount };
