import {
  Select as ShadCNSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectProps = {
  items?: readonly string[] | undefined;
};

const Select = (props: SelectProps) => {
  const placeholder = props.items && props.items[0];
  return (
    <ShadCNSelect {...props}>
      <SelectTrigger className="w-full h-[30px] text-[11px] leading-relaxed rounded-[6px] border border-cw-darkgray text-cw-charcoal">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className=" bg-white rounded-[6px]">
        <SelectGroup>
          {props.items &&
            props.items.map((item, index) => (
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
