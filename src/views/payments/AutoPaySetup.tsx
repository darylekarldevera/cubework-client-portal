import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import TableHeader from '@/components/shared/TableHeader';
import Select from '@/components/shared/Select.tsx';
import Button from '@/components/shared/Button.tsx';

const AutoPaySetup = () => {
  return (
    <>
      <div className="py-[14px] pl-[10px]">
        <ShadCNLabel className="text-xs font-bold text-black">Auto Pay Account</ShadCNLabel>
      </div>
      <div className="pl-[10px]">
        <ShadCNLabel className="text-xs font-medium text-cw-gray">
          <span className="font-bold">!Important:</span> Once auto pay is setup, you must contact Cubework team directly
          to revert.
        </ShadCNLabel>
      </div>
      <Card className="mt-[30px] h-[133px] w-full rounded-[16px]">
        <CardHeader className="h-[40px] pl-[10px] flex justify-center border-b border-[#ECECEC]">
          <TableHeader>Choose your space</TableHeader>
        </CardHeader>
        <CardContent className="h-full flex flex-row px-[10px] pt-[20px] w-full">
          <div className="w-full ">
            <Select items={['B20', 'B19', 'B18']} />
          </div>
          <div className="w-full text-right">
            <Button>Next</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AutoPaySetup;
