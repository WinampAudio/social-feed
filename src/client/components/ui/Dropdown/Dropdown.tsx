import type { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type DropdownItem = {
  value: string;
  label: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  placeholder: string;
  className?: string;
  ariaLabel?: string;
  onChange?: (value: string) => void;
};

const Dropdown: FC<DropdownProps> = ({
  items,
  placeholder,
  className = "w-[160px]",
  ariaLabel,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={className} aria-label={ariaLabel}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
