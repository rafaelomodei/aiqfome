import { ReactNode } from 'react';

export interface IPropertyItem {
  title: string;
  description: string;
  children: ReactNode;
  isRequired?: boolean;
}
