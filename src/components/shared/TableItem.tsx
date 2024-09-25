import { Label as ShadCNLabel } from '@/components/ui/label';
import { ReactNode } from 'react';

type TableHeaderProps = {
  children: ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return <ShadCNLabel className="text-cw-charcoal font-regular text-[10px] leading-5">{children}</ShadCNLabel>;
};

export default TableHeader;
