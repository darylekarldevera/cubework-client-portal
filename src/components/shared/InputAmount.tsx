// interface InputAmountProps {
//   onChange: ChangeHandler;
//   onBlur: ChangeHandler;
//   name: string;
//   ref: RefCallback<any>;
// }

import { ChangeEvent } from 'react';

interface InputAmountProps {
  value: string;
  setValue: (value: string) => void;
}

const InputAmount = ({ value, setValue }: InputAmountProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 0) {
      // Add leading zeros if necessary
      while (input.length < 3) {
        input = '0' + input;
      }
      // Insert decimal point
      const decimalValue = input.slice(0, -2) + '.' + input.slice(-2);
      // Add commas for thousands
      const formattedValue = parseFloat(decimalValue).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setValue(formattedValue);
    } else {
      setValue('');
    }
  };

  return (
    <input
      type="text"
      className="h-[30px] px-3 text-[11px] font-bold leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
      onChange={handleInputChange}
      value={value}
    />
  );
};

export default InputAmount;
