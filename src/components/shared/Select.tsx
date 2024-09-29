import {
  Select as ShadCNSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectProps = {
  placeholder?: string;
  items?: string[] | undefined;
};

const Select = ({ placeholder, items }: SelectProps) => {
  placeholder = items && items[0];
  return (
    <ShadCNSelect>
      <SelectTrigger className="w-full h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-cw-darkgray text-cw-charcoal">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className=" bg-white rounded-[6px]">
        <SelectGroup>
          {items &&
            items.map((item, index) => (
              <SelectItem key={index} className="text-xs text-cw-charcoal" value={item.toLowerCase()}>
                {item}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </ShadCNSelect>
  );
};

export default Select;
