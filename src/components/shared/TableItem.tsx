import { Label as ShadCNLabel } from '@/components/ui/label';
import { ReactNode } from 'react';

type TableHeaderProps = {
  children: ReactNode;
  cn?: string;
};

const TableHeader = ({ children, cn }: TableHeaderProps) => {
  return <ShadCNLabel className={`text-cw-charcoal font-regular text-[10px] leading-5 ${cn}`}>{children}</ShadCNLabel>;
};

export default TableHeader;
