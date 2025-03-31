
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Dropdown created with radix ui as radix was already used in project
export function Dropdown() {
  return (
    <Select>
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Select tier" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="public">Public</SelectItem>
          <SelectItem value="subscriber">Subscribers only</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
