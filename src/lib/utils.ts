import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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