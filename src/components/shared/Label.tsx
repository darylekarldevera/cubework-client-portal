import { Label as ShadCNLabel } from '@/components/ui/label';
import { ReactNode } from 'react';

type LabelProps = {
  children: ReactNode;
};

const Label = ({ children }: LabelProps) => {
  return <ShadCNLabel className="font-medium text-3xl">{children}</ShadCNLabel>;
};

export default Label;
