import { Label as ShadCNLabel } from '@/components/ui/label';

type TableHeaderProps = {
  children: string;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return <ShadCNLabel className="text-[#212529] text-[11px] leading-relaxed ">{children}</ShadCNLabel>;
};

export default TableHeader;
