import TableHeader from '@/components/shared/TableHeader.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import TableItem from '@/components/shared/TableItem.tsx';

const CreditCardTable = () => {
  return (
    <Card className="mt-[15px]  w-full rounded-[16px] flex flex-col shadow-lg">
      <div className="py-4 h-[10px] px-[10px] flex flex-row items-center justify-between border-b ">
        <div className="w-full  ">
          <TableHeader>Card Type</TableHeader>
        </div>
        <div className="w-full  ">
          <TableHeader>Card Number</TableHeader>
        </div>
      </div>
      <CardContent className="h-full flex flex-row px-[10px] py-[15px] w-full">
        <div className="w-full ">
          <TableItem>There are no accounts on file. Select ‘+ Add Credit Card’ to get started. </TableItem>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditCardTable;
