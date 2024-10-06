import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { useState } from 'react';
import AddBankAccountModal from '@/components/payments/AddBankAccountModal.tsx';
import AddCreditCardModal from '@/components/payments/AddCreditCardModal.tsx';
import Mechanics from '@/components/payments/Mechanics.tsx';
import CreditCardTable from '@/components/payments/CreditCardTable.tsx';
import BankTable from '@/components/payments/BankTable.tsx';

// type CreditCardProps = {
//   TermsConditions: boolean;
// };

// type BankAccountProps = {
//   TermsConditions: boolean;
// };

const AccountDashboard = () => {
  const [isVerifyShow, setIsVerifyShow] = useState(true);
  // const [isCreditCardTC, setIsCreditCardTC] = useState(false);
  // const [formCreditCard, setFormCreditCard] = useState({} as CreditCardProps);
  // const [formBankAccount, setFormBankAccount] = useState({} as BankAccountProps);

  const handleClick = () => {
    setIsVerifyShow(false);
  };

  return (
    <>
      <div className="flex gap-[28px] text-[#212529]">
        <div className="w-2/3">
          <div className="py-[14px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Bank Account(s)</ShadCNLabel>
            <AddBankAccountModal />
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-[#212529]">
              Use the bank accounts listed below to make payments or schedule monthly automatic payments.
            </ShadCNLabel>
          </div>
          <BankTable handleClick={handleClick} isVerifyShow={isVerifyShow} />
          <div className="mt-[55px] pr-[20px] pl-[10px] flex justify-between">
            <ShadCNLabel className="text-xs font-bold text-black">Credit Cards</ShadCNLabel>
            <AddCreditCardModal />
          </div>
          <div className="pl-[10px]">
            <ShadCNLabel className="text-xs text-[#212529]">
              Use the credit cards below to make one-time payments.
            </ShadCNLabel>
          </div>
          <CreditCardTable />
        </div>
        <div className="mt-[15px] w-1/3">
          <Mechanics />
        </div>
      </div>
    </>
  );
};
export default AccountDashboard;
