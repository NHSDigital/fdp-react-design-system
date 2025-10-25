import React from 'react';
import './BackLink.scss';
export interface ForwardLinkProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
    text?: string;
    html?: string;
    href?: string;
    element?: 'a' | 'button';
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    className?: string;
}
export declare const ForwardLink: React.FC<ForwardLinkProps>;
