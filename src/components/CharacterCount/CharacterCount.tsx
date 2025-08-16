import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import './CharacterCount.scss';
import { CharacterCountProps } from './CharacterCount.types';
import { Textarea } from '../Textarea';
import { Hint } from '../Hint';

export const CharacterCount: React.FC<CharacterCountProps> = ({
  id,
  maxLength,
  maxWords,
  threshold = 75,
  name,
  value = '',
  rows,
  className,
  countMessage,
  onCountChange,
  onChange,
  ...textareaProps
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [remaining, setRemaining] = useState(0);
  const [isOverLimit, setIsOverLimit] = useState(false);
  const [showCount, setShowCount] = useState(false);

  // Calculate count based on whether we're counting characters or words
  const calculateCount = useCallback((text: string) => {
    if (maxWords) {
      // Count words (split by whitespace and filter empty strings)
      return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    } else {
      // Count characters
      return text.length;
    }
  }, [maxWords]);

  // Update counts whenever value changes
  useEffect(() => {
    const newCount = calculateCount(currentValue);
    const limit = maxLength || maxWords || 0;
    const newRemaining = limit - newCount;
    const thresholdCount = Math.floor(limit * (threshold / 100));
    
    setRemaining(newRemaining);
    setIsOverLimit(newCount > limit);
    setShowCount(newCount >= thresholdCount || newCount > limit);

    // Call the callback if provided
    if (onCountChange) {
      onCountChange(newCount, newRemaining);
    }
  }, [currentValue, maxLength, maxWords, threshold, calculateCount, onCountChange]);

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setCurrentValue(newValue);
    
    if (onChange) {
      onChange(event);
    }
  };

  // Generate count message
  const generateCountMessage = () => {
    const limit = maxLength || maxWords || 0;
    const unit = maxWords ? 'word' : 'character';
    const unitPlural = maxWords ? 'words' : 'characters';
    
    if (!showCount) {
      return `You can enter up to ${limit} ${limit === 1 ? unit : unitPlural}`;
    }
    
    if (isOverLimit) {
      const overage = Math.abs(remaining);
      return `You have ${overage} ${overage === 1 ? unit : unitPlural} too many`;
    } else {
      return `You have ${remaining} ${remaining === 1 ? unit : unitPlural} remaining`;
    }
  };

  const characterCountClasses = classNames(
    'nhsuk-character-count',
    className
  );

  const messageClasses = classNames(
    'nhsuk-character-count__message',
    {
      'nhsuk-character-count__message--disabled': !showCount,
      'nhsuk-error-message': isOverLimit
    },
    countMessage?.classes
  );

  const textareaClasses = classNames(
    'nhsuk-js-character-count',
    {
      'nhsuk-textarea--error': isOverLimit
    }
  );

  return (
    <div 
      className={characterCountClasses}
      data-module="nhsuk-character-count"
      data-maxlength={maxLength}
      data-maxwords={maxWords}
      data-threshold={threshold}
      data-testid="character-count"
    >
      <Textarea
        id={id}
        name={name}
        value={currentValue}
        rows={rows}
        className={textareaClasses}
        onChange={handleChange}
        aria-describedby={`${id}-info`}
  aria-invalid={isOverLimit || undefined}
        {...textareaProps}
      />
      
      <Hint
        id={`${id}-info`}
  className={messageClasses}
  role="status"
  aria-live="polite"
      >
        {generateCountMessage()}
      </Hint>
    </div>
  );
};