import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.tsx';
import Button from '@/components/shared/Button.tsx';
import PaypalIcon from '@/assets/icons/paypal-icon.svg';
import VisaIcon from '@/assets/icons/visa-icon.svg';
import MasterCardIcon from '@/assets/icons/mastercard-icon.svg';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import TermsConditions from '@/components/ui/TermsConditions.tsx';
import { CC_TERMS_CONDITIONS, TITLE_CC_TERMS_CONDITIONS } from '@/__mocks__/termsConditions.ts';

const AddCreditCardModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <Button variant="outlined">+ Credit Cards</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px] bg-white">
        <DialogHeader>
          <DialogTitle className="border-b border-black">Add Credit Card</DialogTitle>
        </DialogHeader>
        <div className="flex gap-3">
          <img src={PaypalIcon} alt="" />
          <img src={VisaIcon} alt="" />
          <img src={MasterCardIcon} alt="" />
        </div>
        <div className="grid grid-cols-2 items-center gap-4  ">
          <ShadCNLabel className="text-xs text-black border-b border-black pb-1">Card Details</ShadCNLabel>
          <ShadCNLabel className="text-xs text-black  border-b border-black pb-1">Billing Address</ShadCNLabel>
        </div>
        <div className="grid grid-cols-2 gap-[34px] text-black">
          <div className="grid grid-rows-2 gap-4 pb-4">
            <div className="grid grid-cols-2 items-center gap-4  ">
              <ShadCNLabel className="text-xs text-[#212529]">Card Number</ShadCNLabel>
              <Input />
            </div>
            <div className="grid grid-cols-2 items-center gap-4  ">
              <ShadCNLabel className="text-xs text-[#212529]">Card Holder Name</ShadCNLabel>
              <Input />
            </div>
            <div className="grid grid-cols-2 items-center gap-4 ">
              <ShadCNLabel className="text-xs text-[#212529]">CVC</ShadCNLabel>
              <Input />
            </div>
            <div className="grid grid-cols-2 gap-[23px] -mt-4">
              <div className="grid grid-rows-2 items-center">
                <ShadCNLabel className="text-xs text-[#212529]">Expiry Date</ShadCNLabel>
                <Input />
              </div>
              <div className="grid grid-rows-2 items-center  ">
                <ShadCNLabel className="text-xs text-[#212529]">Expiry Month</ShadCNLabel>
                <Input />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 pb-4  ">
            <div className="grid grid-cols-2 items-center gap-4  ">
              <ShadCNLabel className="text-xs text-[#212529]">Country</ShadCNLabel>
              <Input required={false} />
            </div>
            <div className="grid grid-cols-2 items-center gap-4  ">
              <ShadCNLabel className="text-xs text-[#212529]">Address 1</ShadCNLabel>
              <Input required={false} />
            </div>
            <div className="grid grid-cols-2 items-center gap-4  ">
              <ShadCNLabel className="text-xs text-[#212529]">City</ShadCNLabel>
              <Input required={false} />
            </div>
            <div className="grid grid-cols-2 gap-[23px] -mt-4">
              <div className="grid grid-rows-2 items-center">
                <ShadCNLabel className="text-xs text-[#212529]">State</ShadCNLabel>
                <Input required={false} />
              </div>
              <div className="grid grid-rows-2 items-center ">
                <ShadCNLabel className="text-xs text-[#212529]">Zip Code</ShadCNLabel>
                <Input />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black w-full flex justify-between pt-3">
          <TermsConditions text={CC_TERMS_CONDITIONS} title={TITLE_CC_TERMS_CONDITIONS} />
          <DialogTrigger className="flex w-full justify-end gap-8">
            <Button variant="outlined-black">Cancel</Button>
            <Button>Save</Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCreditCardModal;
