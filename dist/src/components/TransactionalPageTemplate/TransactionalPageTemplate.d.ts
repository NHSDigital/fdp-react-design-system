import React from "react";
import { ContainerProps, GridWidth } from "../Grid/Grid.types";
import { MainWrapperProps } from "../MainWrapper/MainWrapper.types";
import { SkipLinkProps } from "../SkipLink/SkipLink.types";
import { HeaderProps } from "../Header/Header.types";
import { FooterProps } from "../Footer/Footer.types";
import { HeadingProps } from "../Heading/Heading.types";
import { BackLinkProps } from "../BackLink/BackLink.types";
/**
 * TransactionalPageTemplate Component Props
 *
 * Complete transactional page template following NHS Service Manual guidance.
 * Used for transactional services like forms, applications, and user journeys.
 */
export interface TransactionalPageTemplateProps extends Omit<ContainerProps, "children"> {
    /** Content to render inside the page template */
    children: React.ReactNode;
    /** Main page title/heading */
    title?: string;
    /** Props to customize the page heading */
    pageHeadingProps?: Omit<HeadingProps, "level" | "size" | "children">;
    /** Column width for main content area */
    columnWidth?: GridWidth;
    /** Size variant for MainWrapper */
    mainWrapperSize?: MainWrapperProps["size"];
    /** Skip link configuration */
    skipLinkProps?: SkipLinkProps;
    /** Header configuration (simplified for transactional use) */
    headerProps?: Omit<HeaderProps, "navigation" | "search" | "account">;
    /** Footer configuration */
    footerProps?: FooterProps;
    /** Back link configuration */
    backLinkProps?: BackLinkProps;
    /** Service name for the transactional header */
    serviceName?: string;
    /** Service URL for the transactional header */
    serviceHref?: string;
    /** Logo configuration for header */
    logo?: HeaderProps["logo"];
}
/**
 * TransactionalPageTemplate Component
 *
 * A complete transactional page template following NHS Service Manual guidance.
 * Designed for transactional services such as forms, applications, and user journeys.
 *
 * This template includes:
 * - Skip link for keyboard navigation
 * - Simplified NHS header with service branding (no navigation, search, or account)
 * - Back link for navigation
 * - Main content area with NHS-standard width container
 * - Responsive grid system
 * - Semantic main wrapper with small variant by default
 * - NHS footer
 *
 * Key differences from the standard PageTemplate:
 * - Simplified header without navigation, search, or account components
 * - Includes back link component
 * - Uses smaller main wrapper size by default (appropriate for forms)
 * - Focused on single-task user journeys
 *
 * @example
 * <TransactionalPageTemplate
 *   pageTitle="Book an appointment"
 *   serviceName="NHS App"
 *   serviceHref="/"
 *   backLinkProps={{
 *     text: "Back to appointments",
 *     href: "/appointments"
 *   }}
 * >
 *   <form>
 *     <p>Form content goes here</p>
 *   </form>
 * </TransactionalPageTemplate>
 *
 * @example
 * // With custom back link handler
 * <TransactionalPageTemplate
 *   pageTitle="Confirm your details"
 *   serviceName="NHS Online Services"
 *   backLinkProps={{
 *     text: "Back",
 *     element: "button",
 *     onClick: () => window.history.back()
 *   }}
 * >
 *   <p>Confirmation content</p>
 * </TransactionalPageTemplate>
 */
export declare const TransactionalPageTemplate: React.FC<TransactionalPageTemplateProps>;
export default TransactionalPageTemplate;
