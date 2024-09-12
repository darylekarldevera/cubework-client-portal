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
      <SelectTrigger className="w-[178px] h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-[#717171] text-[#717171]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className=" bg-white rounded-[6px]">
        <SelectGroup>
          {items &&
            items.map((item) => (
              <SelectItem className="text-xs text-[#717171]" value={item.toLowerCase()}>
                {item}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </ShadCNSelect>
  );
};

export default Select;
