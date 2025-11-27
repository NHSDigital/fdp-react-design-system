import React from 'react';
import classNames from 'classnames';
import { InsetTextProps } from './InsetText.types';
import './InsetText.scss';

export const InsetText: React.FC<InsetTextProps> = ({
  text,
  html,
  children,
  className,
  ...rest
}) => {
  const insetTextClasses = classNames('nhsuk-inset-text', className);

  const renderContent = () => {
    if (children) {
      return children;
    }
    
    if (html) {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    
    if (text) {
      return <p>{text}</p>;
    }
    
    return null;
  };

  return (
    <div className={insetTextClasses} {...rest}>
      {renderContent()}
    </div>
  );
};
