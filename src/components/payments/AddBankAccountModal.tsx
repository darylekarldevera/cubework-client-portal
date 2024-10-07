import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { TERMS_CONDITIONS, TITLE_TERMS_CONDITIONS } from '@/__mocks__/termsConditions.ts';
import TermsConditions from '@/components/TermsConditions.tsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ACCOUNT_TYPES, addBankAccountSchema } from '@/components/zod/schema.ts';
import { addBankAccountSchemaProps } from '@/components/zod/schema.types.ts';
import DialogButton from '@/components/shared/DialogButton.tsx';
import Button from '@/components/shared/Button.tsx';

const AddBankAccountModal = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addBankAccountSchemaProps>({
    resolver: zodResolver(addBankAccountSchema),
  });
  const submitForm = () => alert('Bank Account Submitted');
  // console.log(errors);
  return (
    <Dialog>
      <DialogButton variant="outlined"> + Bank Account</DialogButton>
      <DialogContent className="sm:max-w-[525px] bg-white text-black flex flex-col">
        <DialogHeader>
          <DialogTitle className="border-b border-black text-sm">Add Bank Account</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex flex-col justify-between gap-0">
                <ShadCNLabel className="text-xs text-[#212529]">
                  Account Name
                  <span className="text-red-500"> *</span>
                </ShadCNLabel>
                {errors?.accountName && <span className="text-xs text-red-500">{errors.accountName.message}</span>}
              </div>
              <input
                type="text"
                className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                {...register('accountName')}
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex flex-col justify-between gap-0">
                <ShadCNLabel className="text-xs text-[#212529]">
                  Account Number
                  <span className="text-red-500"> *</span>
                </ShadCNLabel>
                {errors?.accountNumber && <span className="text-xs text-red-500">{errors.accountNumber.message}</span>}
              </div>
              <input
                type="text"
                className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                {...register('accountNumber')}
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex flex-col justify-between gap-0">
                <ShadCNLabel className="text-xs text-[#212529]">
                  Routing Number
                  <span className="text-red-500"> *</span>
                </ShadCNLabel>
                {errors?.routingNumber && <span className="text-xs text-red-500">{errors.routingNumber.message}</span>}
              </div>
              <input
                type="text"
                className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                {...register('routingNumber')}
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex flex-col justify-between gap-0">
                <ShadCNLabel className="text-xs">
                  Account Type
                  <span className="text-red-500"> *</span>
                </ShadCNLabel>
                {errors?.accountType && (
                  <span className="text-[10px] leading-relaxed text-red-500">{errors.accountType.message}</span>
                )}
              </div>
              <select
                className="w-full h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-cw-darkgray text-cw-charcoal px-2"
                {...register('accountType')}
              >
                {ACCOUNT_TYPES.map((ACCOUNT_TYPE) => (
                  <option value={ACCOUNT_TYPE} className="text-xs text-cw-charcoal" key={ACCOUNT_TYPE}>
                    {ACCOUNT_TYPE}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <DialogFooter className="pt-3 border-t border-black w-full flex gap-[63px]">
            <div className="w-full text-xs leading-relaxed flex items-center gap-2">
              <TermsConditions
                setIsChecked={setIsChecked}
                isChecked={isChecked}
                text={TERMS_CONDITIONS}
                title={TITLE_TERMS_CONDITIONS}
                checkboxText="Set as default"
              />
              <DialogButton type="button" variant="outlined-black" className="text-black">
                {' '}
                Cancel
              </DialogButton>
              {Object.keys(errors).length === 0 ? (
                <Button type="submit" isDisabled={!isChecked}>
                  Save
                </Button>
              ) : (
                <DialogButton type="submit" isDisabled={!isChecked}>
                  Save
                </DialogButton>
              )}
            </div>
          </DialogFooter>
        </form>
        <span className="italic text-[10px] text-red-500">* - Required fields</span>
      </DialogContent>
    </Dialog>
  );
};

export default AddBankAccountModal;
