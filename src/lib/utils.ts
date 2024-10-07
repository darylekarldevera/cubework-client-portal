import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DeepRequired, FieldErrorsImpl, GlobalError } from 'react-hook-form';
import { addCreditCardSchemaProps } from '@/components/zod/schema.types.ts';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | string) {
  const dollarUSLocale = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (typeof amount === 'string') {
    return dollarUSLocale.format(parseFloat(amount));
  }

  return dollarUSLocale.format(amount);
}

export function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function isObjectEmpty(
  objectName: Partial<FieldErrorsImpl<DeepRequired<addCreditCardSchemaProps>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  }
): boolean {
  return Object.keys(objectName).length === 0 && objectName.constructor === Object;
}

export function cleanUp() {
  localStorage.clear();
}
