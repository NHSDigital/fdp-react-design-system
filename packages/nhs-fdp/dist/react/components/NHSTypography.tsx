// Do not edit directly, this file was auto-generated.

import React from 'react';
import { CSSProperties } from 'react';
import * as tokens from '../index';

// Helper function to convert composite token to CSS properties
export const getResponsiveStyles = (
	fontSize: { mobile: string; tablet: string; print?: string },
	marginBottom: { mobile: string; tablet: string }
): CSSProperties & { 
	'@media (min-width: 768px)': CSSProperties;
	'@media print': CSSProperties;
} => ({
	fontSize: fontSize.mobile,
	marginBottom: marginBottom.mobile,
	'@media (min-width: 768px)': {
	fontSize: fontSize.tablet,
	marginBottom: marginBottom.tablet,
	},
	'@media print': {
	fontSize: fontSize.print || fontSize.tablet,
	},
});

// NHS Heading Components
export const NHSHeading1: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<h1 
	className={className}
	style={{
		fontFamily: tokens.HeadingsNhsukHeadingXl.fontFamily,
		fontWeight: tokens.HeadingsNhsukHeadingXl.fontWeight,
		fontSize: tokens.HeadingsNhsukHeadingXl.fontSize.mobile,
		lineHeight: tokens.HeadingsNhsukHeadingXl.lineHeight,
		marginTop: tokens.HeadingsNhsukHeadingXl.marginTop,
		marginBottom: tokens.HeadingsNhsukHeadingXl.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</h1>
);

export const NHSHeading2: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<h2 
	className={className}
	style={{
		fontFamily: tokens.HeadingsNhsukHeadingL.fontFamily,
		fontWeight: tokens.HeadingsNhsukHeadingL.fontWeight,
		fontSize: tokens.HeadingsNhsukHeadingL.fontSize.mobile,
		lineHeight: tokens.HeadingsNhsukHeadingL.lineHeight,
		marginTop: tokens.HeadingsNhsukHeadingL.marginTop,
		marginBottom: tokens.HeadingsNhsukHeadingL.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</h2>
);

export const NHSHeading3: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<h3 
	className={className}
	style={{
		fontFamily: tokens.HeadingsNhsukHeadingM.fontFamily,
		fontWeight: tokens.HeadingsNhsukHeadingM.fontWeight,
		fontSize: tokens.HeadingsNhsukHeadingM.fontSize.mobile,
		lineHeight: tokens.HeadingsNhsukHeadingM.lineHeight,
		marginTop: tokens.HeadingsNhsukHeadingM.marginTop,
		marginBottom: tokens.HeadingsNhsukHeadingM.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</h3>
);

export const NHSHeading4: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<h4 
	className={className}
	style={{
		fontFamily: tokens.HeadingsNhsukHeadingS.fontFamily,
		fontWeight: tokens.HeadingsNhsukHeadingS.fontWeight,
		fontSize: tokens.HeadingsNhsukHeadingS.fontSize.mobile,
		lineHeight: tokens.HeadingsNhsukHeadingS.lineHeight,
		marginTop: tokens.HeadingsNhsukHeadingS.marginTop,
		marginBottom: tokens.HeadingsNhsukHeadingS.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</h4>
);

export const NHSHeading5: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<h5 
	className={className}
	style={{
		fontFamily: tokens.HeadingsNhsukHeadingXs.fontFamily,
		fontWeight: tokens.HeadingsNhsukHeadingXs.fontWeight,
		fontSize: tokens.HeadingsNhsukHeadingXs.fontSize.mobile,
		lineHeight: tokens.HeadingsNhsukHeadingXs.lineHeight,
		marginTop: tokens.HeadingsNhsukHeadingXs.marginTop,
		marginBottom: tokens.HeadingsNhsukHeadingXs.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</h5>
);

// NHS Paragraph Components
export const NHSBodyText: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<p 
	className={className}
	style={{
		fontFamily: tokens.ParagraphsBody.fontFamily,
		fontWeight: tokens.ParagraphsBody.fontWeight,
		fontSize: tokens.ParagraphsBody.fontSize.mobile,
		lineHeight: tokens.ParagraphsBody.lineHeight,
		marginTop: tokens.ParagraphsBody.marginTop,
		marginBottom: tokens.ParagraphsBody.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</p>
);

export const NHSBodyTextLarge: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<p 
	className={className}
	style={{
		fontFamily: tokens.ParagraphsBodyLarge.fontFamily,
		fontWeight: tokens.ParagraphsBodyLarge.fontWeight,
		fontSize: tokens.ParagraphsBodyLarge.fontSize.mobile,
		lineHeight: tokens.ParagraphsBodyLarge.lineHeight,
		marginTop: tokens.ParagraphsBodyLarge.marginTop,
		marginBottom: tokens.ParagraphsBodyLarge.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</p>
);

export const NHSBodyTextSmall: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<p 
	className={className}
	style={{
		fontFamily: tokens.ParagraphsBodySmall.fontFamily,
		fontWeight: tokens.ParagraphsBodySmall.fontWeight,
		fontSize: tokens.ParagraphsBodySmall.fontSize.mobile,
		lineHeight: tokens.ParagraphsBodySmall.lineHeight,
		marginTop: tokens.ParagraphsBodySmall.marginTop,
		marginBottom: tokens.ParagraphsBodySmall.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</p>
);

export const NHSLedeText: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<p 
	className={className}
	style={{
		fontFamily: tokens.ParagraphsLedeText.fontFamily,
		fontWeight: tokens.ParagraphsLedeText.fontWeight,
		fontSize: tokens.ParagraphsLedeText.fontSize.mobile,
		lineHeight: tokens.ParagraphsLedeText.lineHeight,
		marginTop: tokens.ParagraphsLedeText.marginTop,
		marginBottom: tokens.ParagraphsLedeText.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</p>
);

export const NHSLedeTextSmall: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
	children, 
	className = '', 
	style = {} 
}) => (
	<p 
	className={className}
	style={{
		fontFamily: tokens.ParagraphsLedeTextSmall.fontFamily,
		fontWeight: tokens.ParagraphsLedeTextSmall.fontWeight,
		fontSize: tokens.ParagraphsLedeTextSmall.fontSize.mobile,
		lineHeight: tokens.ParagraphsLedeTextSmall.lineHeight,
		marginTop: tokens.ParagraphsLedeTextSmall.marginTop,
		marginBottom: tokens.ParagraphsLedeTextSmall.marginBottom.mobile,
		...style,
	}}
	>
	{children}
	</p>
);
