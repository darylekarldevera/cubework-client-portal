import { Label as ShadCNLabel } from '@/components/ui/label';
import { ReactNode } from 'react';

type TableHeaderProps = {
  children: ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return <ShadCNLabel className="text-[#717171] text-[11px] leading-relaxed ">{children}</ShadCNLabel>;
};

export default TableHeader;
