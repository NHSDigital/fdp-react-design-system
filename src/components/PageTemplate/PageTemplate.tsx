import React from 'react';
import { SkipLink } from '../SkipLink/SkipLink';
import { Header } from '../Header/Header';
import { WidthContainer } from '../WidthContainer/WidthContainer';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { Row, Column } from '../Grid/Grid';
import { Heading } from '../Heading/Heading';
import { Footer } from '../Footer/Footer';
import { ContainerProps, GridWidth } from '../Grid/Grid.types';
import { MainWrapperProps } from '../MainWrapper/MainWrapper.types';
import { SkipLinkProps } from '../SkipLink/SkipLink.types';
import { HeaderProps } from '../Header/Header.types';
import { FooterProps } from '../Footer/Footer.types';
import { HeadingProps } from '../Heading/Heading.types';

/**
 * PageTemplate Component Props
 * 
 * Complete page template following NHS Service Manual guidance.
 */
export interface PageTemplateProps extends Omit<ContainerProps, 'children'> {
  /** Content to render inside the page template */
  children: React.ReactNode;
  
  /** Main page title/heading */
  pageTitle?: string;
  
  /** Props to customize the page heading */
  pageHeadingProps?: Omit<HeadingProps, 'level' | 'size' | 'children'>;
  
  /** Column width for main content area */
  columnWidth?: GridWidth;
  
  /** Size variant for MainWrapper */
  mainWrapperSize?: MainWrapperProps['size'];
  
  /** Skip link configuration */
  skipLinkProps?: SkipLinkProps;
  
  /** Header configuration (merged with service/navigation props) */
  headerProps?: Omit<HeaderProps, 'service' | 'navigation' | 'search' | 'account' | 'organisation' | 'logo'>;
  
  /** Footer configuration */
  footerProps?: FooterProps;
  
  // Header content props (for convenience)
  /** Service information for header */
  service?: HeaderProps['service'];
  
  /** Navigation items for header */
  navigation?: HeaderProps['navigation'];
  
  /** Search configuration for header */
  search?: HeaderProps['search'];
  
  /** Account information for header */
  account?: HeaderProps['account'];
  
  /** Organisation information for header */
  organisation?: HeaderProps['organisation'];
  
  /** Logo configuration for header */
  logo?: HeaderProps['logo'];
}

/**
 * PageTemplate Component
 * 
 * A complete page template following NHS Service Manual guidance and best practices.
 * Provides a clean, semantic structure with proper accessibility and responsive design.
 * 
 * This template includes:
 * - Skip link for keyboard navigation
 * - NHS header with service branding
 * - Main content area with NHS-standard width container
 * - Responsive grid system
 * - Semantic main wrapper
 * - NHS footer
 * 
 * @example
 * <PageTemplate
 *   pageTitle="Manage your appointments"
 *   service={{ name: "NHS App", href: "/" }}
 *   navigation={[
 *     { text: "Home", href: "/", current: true },
 *     { text: "Appointments", href: "/appointments" },
 *     { text: "Messages", href: "/messages" }
 *   ]}
 * >
 *   <p>Your page content goes here</p>
 * </PageTemplate>
 * 
 * @example
 * // Custom column width
 * <PageTemplate
 *   pageTitle="Service overview"
 *   columnWidth="full"
 *   mainWrapperSize="large"
 * >
 *   <p>Full-width content with large wrapper</p>
 * </PageTemplate>
 */
export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  pageTitle,
  pageHeadingProps,
  columnWidth = "two-thirds",
  mainWrapperSize,
  skipLinkProps,
  headerProps,
  footerProps,
  service,
  navigation,
  search,
  account,
  organisation,
  logo,
  className,
  ...containerProps
}) => {
  // Prepare header props
  const headerConfig = {
    service,
    navigation,
    search,
    account,
    organisation,
    logo,
    ...headerProps,
  };

  return (
    <>
      <SkipLink {...skipLinkProps} />
      <Header {...headerConfig} />
      <WidthContainer className={className} {...containerProps}>
        <MainWrapper size={mainWrapperSize}>
          <Row>
            <Column width={columnWidth}>
              {pageTitle && (
                <Heading size="l" {...pageHeadingProps}>
                  {pageTitle}
                </Heading>
              )}
              {children}
            </Column>
          </Row>
        </MainWrapper>
      </WidthContainer>
      <Footer {...footerProps} />
    </>
  );
};

export default PageTemplate;
