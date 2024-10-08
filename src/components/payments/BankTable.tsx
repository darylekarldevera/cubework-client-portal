import TableHeader from '@/components/shared/TableHeader.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import TableItem from '@/components/shared/TableItem.tsx';
import Verify from '@/components/payments/Verify.tsx';
import BankIcon from '@/assets/icons/bank-icon.svg';

interface BankTableProps {
  isVerifyShow: boolean;
  handleClick: () => void;
}

const BankTable = ({ isVerifyShow, handleClick }: BankTableProps) => {
  return (
    <Card className="mt-[15px]  w-full rounded-[16px] flex flex-col shadow-lg">
      <div className="py-4 h-[10px] px-[10px] flex flex-row items-center justify-between border-b ">
        <div className="w-full  ">
          <TableHeader>Account Name</TableHeader>
        </div>
        <div className="w-full  ">
          <TableHeader>Account</TableHeader>
        </div>
        <div className="w-full  ">
          <TableHeader>Status</TableHeader>
        </div>
      </div>
      <CardContent className="h-full flex flex-row px-[10px] py-[15px] w-full">
        <div className="w-full flex items-center">
          <div className="w-full  ">
            <TableItem cn="flex gap-2 items-center">
              <img src={BankIcon} alt="" className="h-4" />
              Test
            </TableItem>
          </div>
          <div className="w-full  ">
            <TableItem>Checking-****1234</TableItem>
          </div>
          <div className="w-full  ">
            {isVerifyShow ? <Verify handleClick={handleClick} /> : <TableItem>Verified</TableItem>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankTable;
