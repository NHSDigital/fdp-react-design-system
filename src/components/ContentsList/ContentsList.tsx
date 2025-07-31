import React from 'react';
import classNames from 'classnames';
import './ContentsList.scss';
import { ContentsListProps, ContentsListItem } from './ContentsList.types';

export const ContentsList: React.FC<ContentsListProps> = ({
  items,
  classes,
  ariaLabel = 'Pages in this guide',
  attributes = {},
}) => {
  const contentsListClasses = classNames('nhsuk-contents-list', classes);

  const renderItem = (item: ContentsListItem, index: number) => {
    if (item.current) {
      return (
        <li 
          key={index}
          className="nhsuk-contents-list__item" 
          aria-current="page"
          {...(item.attributes || {})}
        >
          <span className="nhsuk-contents-list__current">{item.text}</span>
        </li>
      );
    }

    return (
      <li 
        key={index}
        className="nhsuk-contents-list__item"
      >
        <a 
          className="nhsuk-contents-list__link" 
          href={item.href}
          {...(item.attributes || {})}
        >
          {item.text}
        </a>
      </li>
    );
  };

  return (
    <nav 
      className={contentsListClasses}
      role="navigation" 
      aria-label={ariaLabel}
      {...attributes}
    >
      <h2 className="nhsuk-u-visually-hidden">Contents</h2>
      <ol className="nhsuk-contents-list__list">
        {items.map((item, index) => renderItem(item, index))}
      </ol>
    </nav>
  );
};
