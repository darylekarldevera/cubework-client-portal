import { Label as ShadCNLabel } from '@/components/ui/label';

type TableHeaderProps = {
  children: string;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return <ShadCNLabel className="text-cw-charcoal text-[11px] leading-relaxed ">{children}</ShadCNLabel>;
};

export default TableHeader;
