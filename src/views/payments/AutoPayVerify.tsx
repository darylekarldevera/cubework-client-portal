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
import { formatCurrency } from '@/lib/utils.ts';
import { Link } from 'react-router-dom';
import {
  CC_TERMS_CONDITIONS,
  TERMS_CONDITIONS,
  TITLE_CC_TERMS_CONDITIONS,
  TITLE_TERMS_CONDITIONS,
} from '@/__mocks__/termsConditions.ts';
import TermsConditions from '@/components/TermsConditions.tsx';

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
                <div className="w-3/4">
                  <Select items={['Bankxx-109', 'Bankxx-110']} />
                </div>
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
        <ShadCNLabel className="text-[11px] leading-relaxed text-cw-charcoal font-bold ">
          I authorize the Cubework to withdraw the amount specified above from my account on the designated payment date
          each month, in accordance with the agreed terms and conditions.
        </ShadCNLabel>
      </div>
      <div className="mt-5 flex items-center justify-between px-[10px]">
        <div className="flex gap-1">
          <TermsConditions
            text={TERMS_CONDITIONS}
            title={TITLE_TERMS_CONDITIONS}
            title2={TITLE_CC_TERMS_CONDITIONS}
            text2={CC_TERMS_CONDITIONS}
            checkboxText="I have read and agree to the Cubework's terms and conditions"
            variant="double"
          />
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
