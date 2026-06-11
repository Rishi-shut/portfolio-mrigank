import { clsx, type ClassValue } from 'clsx';
import { PureComponent } from 'react';

export function cn(...inputs: ClassValue[]) {
  // Simple tailwind merge alternative or standard clsx
  return clsx(inputs);
}
