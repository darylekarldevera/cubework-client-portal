import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import PaypalIcon from '@/assets/icons/paypal-icon.svg';
import VisaIcon from '@/assets/icons/visa-icon.svg';
import MasterCardIcon from '@/assets/icons/mastercard-icon.svg';
import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import TermsConditions from '@/components/TermsConditions.tsx';
import { CC_TERMS_CONDITIONS, TITLE_CC_TERMS_CONDITIONS } from '@/__mocks__/termsConditions.ts';
import { ChangeEvent, useState } from 'react';
import DialogButton from '@/components/shared/DialogButton.tsx';
import { useForm } from 'react-hook-form';
import { addCreditCardSchemaProps } from '@/components/zod/schema.types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { addCreditCardSchema } from '@/components/zod/schema.ts';
import Button from '@/components/shared/Button.tsx';
import { isObjectEmpty } from '@/lib/utils.ts';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const citiesWithZipCodes = {
  California: {
    'Los Angeles': ['90001', '90002', '90003', '90004', '90005'],
    'San Francisco': ['94101', '94102', '94103', '94104', '94105'],
    'San Diego': ['92101', '92102', '92103', '92104', '92105'],
    Sacramento: ['94203', '94204', '94205', '94206', '94207'],
  },
  Texas: {
    Houston: ['77001', '77002', '77003', '77004', '77005'],
    Dallas: ['75201', '75202', '75203', '75204', '75205'],
    Austin: ['73301', '73344', '78701', '78702', '78703'],
    'San Antonio': ['78201', '78202', '78203', '78204', '78205'],
  },
  'New York': {
    'New York City': ['10001', '10002', '10003', '10004', '10005'],
    Buffalo: ['14201', '14202', '14203', '14204', '14205'],
    Rochester: ['14602', '14603', '14604', '14605', '14606'],
    Albany: ['12201', '12202', '12203', '12204', '12205'],
  },
  Florida: {
    Miami: ['33101', '33102', '33103', '33104', '33105'],
    Orlando: ['32801', '32802', '32803', '32804', '32805'],
    Tampa: ['33601', '33602', '33603', '33604', '33605'],
    Jacksonville: ['32099', '32201', '32202', '32203', '32204'],
  },
  // Add more states and cities as needed
};

const AddCreditCardModal = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [expiryDate, setExpiryDate] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addCreditCardSchemaProps>({
    resolver: zodResolver(addCreditCardSchema),
  });

  const submitForm = () => alert('Credit Card Submitted');
  console.log(isObjectEmpty(errors));
  console.log(errors);
  return (
    <Dialog>
      <DialogButton variant="outlined">
        {' '}
        + Credit Card
        {/*<Button variant="outlined">+ Bank Account</Button>*/}
      </DialogButton>
      <DialogContent className="sm:max-w-[825px] bg-white">
        <DialogHeader>
          <DialogTitle className="border-b border-black text-sm">Add Credit Card</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(submitForm)} className="pb-0 mb-0">
          <div className="flex gap-3 pb-2">
            <img src={PaypalIcon} alt="" />
            <img src={VisaIcon} alt="" />
            <img src={MasterCardIcon} alt="" />
          </div>
          <div className="grid grid-cols-2 items-center gap-4  pb-3">
            <ShadCNLabel className="text-xs text-black border-b border-black pb-1">Card Details</ShadCNLabel>
            <ShadCNLabel className="text-xs text-black  border-b border-black pb-1">Billing Address</ShadCNLabel>
          </div>
          <div className="grid grid-cols-2 gap-[34px] text-black">
            <div className="grid grid-rows-2 gap-4 pb-4">
              <div className="grid grid-cols-2 items-center gap-4  ">
                <div className="flex flex-col justify-between gap-0">
                  <ShadCNLabel className="text-xs text-[#212529]">
                    Card Number <span className="text-red-500">*</span>
                  </ShadCNLabel>
                  {errors?.cardNumber && (
                    <span className="text-[10px] leading-relaxed text-red-500">{errors.cardNumber.message}</span>
                  )}
                </div>
                <input
                  type="text"
                  className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                  {...register('cardNumber')}
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-4  ">
                <div className="flex flex-col justify-between gap-0">
                  <ShadCNLabel className="text-xs text-[#212529]">
                    Card Holder Name <span className="text-red-500">*</span>
                  </ShadCNLabel>
                  {errors?.cardHolderName && (
                    <span className="text-[10px] leading-relaxed text-red-500">{errors.cardHolderName.message}</span>
                  )}
                </div>
                <input
                  type="text"
                  className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                  {...register('cardHolderName')}
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-4 ">
                <div className="flex flex-col justify-between gap-0">
                  <ShadCNLabel className="text-xs text-[#212529]">
                    CVV <span className="text-red-500">*</span>
                  </ShadCNLabel>
                  {errors?.cvv && (
                    <span className="text-[10px] leading-relaxed text-red-500">{errors.cvv.message}</span>
                  )}
                </div>
                <input
                  type="text"
                  className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                  {...register('cvv')}
                />
              </div>
              <div className="grid grid-cols-2 gap-[23px] -mt-4">
                <div className="grid grid-rows-2 items-center">
                  <div className="flex flex-row justify-between gap-0">
                    <ShadCNLabel className="text-xs text-[#212529]">Expiry Date</ShadCNLabel>
                  </div>
                  <input
                    type="date"
                    className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setExpiryDate(e.target.value);
                      console.log(expiryDate);
                    }}
                  />
                </div>
                <div className="grid grid-rows-2 items-center  ">
                  <ShadCNLabel className="text-xs text-[#212529]">Expiry Month</ShadCNLabel>
                  <input
                    type="date"
                    className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 pb-4  ">
              <div className="grid grid-cols-2 items-center gap-4  ">
                <ShadCNLabel className="text-xs text-[#212529]">Country</ShadCNLabel>
                <select className="w-full h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-cw-darkgray text-cw-charcoal px-2">
                  <option>United States</option>
                </select>
              </div>
              <div className="grid grid-cols-2 items-center gap-4  ">
                <ShadCNLabel className="text-xs text-[#212529]">State</ShadCNLabel>
                <select className="w-full h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-cw-darkgray text-cw-charcoal px-2">
                  {states.map((state) => (
                    <option value={state} className="text-xs text-cw-charcoal" key={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 items-center gap-4  ">
                <ShadCNLabel className="text-xs text-[#212529]">City</ShadCNLabel>
                <select className="w-full h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-cw-darkgray text-cw-charcoal px-2">
                  {Object.keys(citiesWithZipCodes).map((city) => (
                    <option value={city} className="text-xs text-cw-charcoal" key={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-[23px] -mt-4">
                <div className="grid grid-rows-2 items-center">
                  <ShadCNLabel className="text-xs text-[#212529]">Address 1</ShadCNLabel>
                  <Input required={false} />
                </div>
                <div className="grid grid-rows-2 items-center ">
                  <ShadCNLabel className="text-xs text-[#212529]">
                    Zip Code
                    <span className="text-red-500"> *</span>
                  </ShadCNLabel>
                  <input
                    type="text"
                    className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black w-full flex justify-between pt-3">
            <TermsConditions
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              text={CC_TERMS_CONDITIONS}
              title={TITLE_CC_TERMS_CONDITIONS}
              checkboxText="I agree to the terms and conditions"
            />
            <div className="flex flex-row justify gap-2">
              <DialogButton type="button" variant="outlined-black" className="text-black">
                {' '}
                Cancel
              </DialogButton>
              {!isObjectEmpty(errors) ? (
                <Button type="submit" variant="outlined-black" isDisabled={!isChecked}>
                  Save
                </Button>
              ) : (
                <DialogButton type="submit" isDisabled={!isChecked}>
                  Save
                </DialogButton>
              )}
            </div>
          </div>
        </form>
        <span className="italic text-[10px] text-red-500">* - Required fields</span>
      </DialogContent>
    </Dialog>
  );
};

export default AddCreditCardModal;
