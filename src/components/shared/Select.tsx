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
  return (
    <ShadCNSelect>
      <SelectTrigger className="w-[204px] rounded-[6px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className=" rounded-[6px]">
        <SelectGroup>
          {items &&
            items.map((item) => (
              <SelectItem className="" value={item.toLowerCase()}>
                {item}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </ShadCNSelect>
  );
};

export default Select;
