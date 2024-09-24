import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card } from '@/components/ui/card.tsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader as ShadCNTableHeader,
  TableRow,
} from '@/components/ui/table';
import TableHeader from '@/components/shared/TableHeader.tsx';
import TableItem from '@/components/shared/TableItem.tsx';
import Select from '@/components/shared/Select.tsx';
import Button from '@/components/shared/Button.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { formatCurrency } from '@/lib/utils.ts';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {
  CC_TERMS_CONDITIONS,
  TERMS_CONDITIONS,
  TITLE_CC_TERMS_CONDITIONS,
  TITLE_TERMS_CONDITIONS,
} from '@/__mocks__/termsConditions.ts';

const AutoPayVerify = () => {
  return (
    <>
      <div className="py-[14px] pl-[10px]">
        <ShadCNLabel className="text-xs font-bold text-black">Auto Pay Account</ShadCNLabel>
      </div>
      <div className="pl-[10px]">
        <Card className="pl-5 py-3 bg-[#17A2B8]">
          <ShadCNLabel className="text-xs font-medium text-white">
            <span className="font-bold">Important:</span>Your first payment will be on 8/1/2024
          </ShadCNLabel>
        </Card>
      </div>
      <Card className="mt-[30px] w-full rounded-[16px] shadow-lg">
        <Table>
          <ShadCNTableHeader>
            <TableRow>
              <TableHead>
                <TableHeader>Payment</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>Start Date</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>End Date</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>Pay on Day</TableHeader>
              </TableHead>
              <TableHead>
                <TableHeader>Max Pay Amount</TableHeader>
              </TableHead>
            </TableRow>
          </ShadCNTableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Select items={['Bankxx-109', 'Bankxx-110']} />
              </TableCell>
              <TableCell>
                <TableItem>8/1/2024</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>8/1/2025</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>1</TableItem>
              </TableCell>
              <TableCell>
                <TableItem>${formatCurrency(2000.0)}</TableItem>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <div className="mt-[20px] pl-[10px]">
        <ShadCNLabel className="text-[11px] leading-relaxed text-[#212529] font-bold ">
          I authorize the Cubework to withdraw the amount specified above from my account on the designated payment date
          each month, in accordance with the agreed terms and conditions.
        </ShadCNLabel>
      </div>
      <div className="mt-5 flex items-center justify-between px-[10px]">
        <div className="flex gap-1">
          <Dialog>
            <DialogTrigger asChild>
              <div className=" w-full text-xs leading-relaxed flex items-center gap-2">
                <Checkbox
                  id="terms"
                  className="border border-[#E5E7EB] rounded-[4px] focus:shadow-[0_0_0_2px_#E5E7EB]"
                />
                <ShadCNLabel id="terms" className="text-[11px] leading-relaxed text-[#212529] font-bold ">
                  I have read and agree to the Cubework's terms and conditions
                </ShadCNLabel>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[925px] bg-white overflow-auto max-h-[500px]">
              <DialogHeader>
                <DialogTitle>{TITLE_TERMS_CONDITIONS}</DialogTitle>
                <DialogDescription>Last updated 9/17/2024</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {TERMS_CONDITIONS}
                <DialogHeader className="mt-14">
                  <DialogTitle>{TITLE_CC_TERMS_CONDITIONS}</DialogTitle>
                  <DialogDescription>Last updated 9/17/2024</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">{CC_TERMS_CONDITIONS}</div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary">Cancel</Button>
          <Button>
            <Link to={'..' + '/details'} relative="path">
              Setup Auto Pay
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AutoPayVerify;
