import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import TableHeader from '@/components/shared/TableHeader.tsx';
import TableItem from '@/components/shared/TableItem.tsx';

const Mechanics = () => {
  return (
    <Card className="w-full rounded-[16px] shadow-lg">
      <CardHeader className="h-[15px] border-b border-[#ECECEC] flex justify-center pl-[10px] items-start">
        <TableHeader>How to verify a new bank account</TableHeader>
      </CardHeader>
      <CardContent className="pt-[10px]">
        <TableItem>
          <p>1. Add new Bank Account </p>
          <p>2. Look for a small deposit (less than $1) in your bank account.** </p>
          <p>3. Click ‘Verify Now’ and enter the amount.</p>
          <p>4. Once confirmed, payments can be processed by selecting the verified bank.</p>
          <br />
          <span className="text-[9px] leading-relaxed">
            **Allow 1-2 business days for deposit to appear. Deposit name will be, ‘Cubework Penny “Company Name”
            Account Verify”.
          </span>
        </TableItem>
      </CardContent>
    </Card>
  );
};

export default Mechanics;
