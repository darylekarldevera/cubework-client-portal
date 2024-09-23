import { Label as ShadCNLabel } from '@/components/ui/label';

type TableHeaderProps = {
  children: string;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return <ShadCNLabel className="text-[#717171] text-cb-text leading-relaxed ">{children}</ShadCNLabel>;
};

export default TableHeader;
