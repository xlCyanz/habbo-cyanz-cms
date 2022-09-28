import React from "react";
import { Checkbox, CheckboxProps, Label } from "theme-ui";

export interface ICheckboxProps extends CheckboxProps {
  label: string;
}

const CheckboxWrapper = ({ label, ...props }: ICheckboxProps) => {
  return (
    <Label sx={{ alignItems: "center" }}>
      <Checkbox {...props} />
      {label}
    </Label>
  );
};

export default CheckboxWrapper;
