import type { FC } from "react";
import Dropdown from "~/components/ui/Dropdown";

const DropdownTier: FC = () => {
  return (
    <Dropdown
      items={[
        { value: "public", label: "Public" },
        { value: "subscriber", label: "Subscribers only" },
      ]}
      placeholder="Select tier"
      ariaLabel="Select post tier"
    />
  );
};

export default DropdownTier;
