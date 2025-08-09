import React from 'react';

export type ListType = 'bullet' | 'number' | 'none';
export type ListSize = 'small' | 'medium' | 'large';

export interface ListProps {
  children: React.ReactNode;
  type?: ListType;
  size?: ListSize;
  border?: boolean;
  className?: string;
  role?: string;
  as?: 'ul' | 'ol';
}

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}
