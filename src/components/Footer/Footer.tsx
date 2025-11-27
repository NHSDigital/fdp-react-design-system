import React from 'react';
import classNames from 'classnames';
import './Footer.scss';
import { FooterProps, FooterLinkItem } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({
  className,
  links = [],
  linksColumn2,
  linksColumn3,
  metaLinks,
  copyright = '© NHS England',
  containerClasses,
  attributes = {},
  style,
  footerStyle,
  containerStyle,
}) => {
  const renderLinkItem = (item: FooterLinkItem, isDefaultLayout: boolean = false) => (
    <li
      key={`${item.URL}-${item.label}`}
      className={classNames('nhsuk-footer__list-item', {
        'nhsuk-footer-default__list-item': isDefaultLayout,
      })}
    >
      <a
        className="nhsuk-footer__list-item-link"
        href={item.URL}
        target={item.newWindow ? '_blank' : undefined}
        rel={item.newWindow ? 'noopener noreferrer' : undefined}
      >
        {item.label}
      </a>
    </li>
  );

  const isMultiColumnLayout = !!(linksColumn2 || linksColumn3);

  return (
    <footer role="contentinfo" {...attributes} style={{ ...(attributes as any)?.style, ...style }}>
      <div className="nhsuk-footer-container">
        <div
          className={classNames('nhsuk-width-container', containerClasses)}
          style={containerStyle}
        >
          <h2 className="nhsuk-u-visually-hidden">Support links</h2>
          <div className={classNames('nhsuk-footer', className)} style={footerStyle}>
            {!isMultiColumnLayout ? (
              // Single column layout (default)
              <ul className="nhsuk-footer__list">
                {links.map((item) => renderLinkItem(item, true))}
                {(linksColumn2 || []).map((item) => renderLinkItem(item, true))}
                {(linksColumn3 || []).map((item) => renderLinkItem(item, true))}
                {(metaLinks || []).map((item) => renderLinkItem(item, true))}
              </ul>
            ) : (
              // Multi-column layout
              <>
                {links.length > 0 && (
                  <ul className="nhsuk-footer__list">
                    {links.map((item) => renderLinkItem(item))}
                  </ul>
                )}
                {linksColumn2 && linksColumn2.length > 0 && (
                  <ul className="nhsuk-footer__list">
                    {linksColumn2.map((item) => renderLinkItem(item))}
                  </ul>
                )}
                {linksColumn3 && linksColumn3.length > 0 && (
                  <ul className="nhsuk-footer__list">
                    {linksColumn3.map((item) => renderLinkItem(item))}
                  </ul>
                )}
                {metaLinks && metaLinks.length > 0 && (
                  <ul className="nhsuk-footer__list nhsuk-footer__meta">
                    {metaLinks.map((item) => renderLinkItem(item))}
                  </ul>
                )}
              </>
            )}
          </div>
          {!isMultiColumnLayout && (
            <div>
              <p className="nhsuk-footer__copyright">{copyright}</p>
            </div>
          )}
        </div>
        {isMultiColumnLayout && (
          <div className="nhsuk-width-container">
            <div>
              <p className="nhsuk-footer__copyright">{copyright}</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
