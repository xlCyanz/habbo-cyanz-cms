import React from "react";
import {
  Label,
  Checkbox,
  LabelProps,
  CheckboxProps as CheckboxPropsUI,
} from "theme-ui";

import { StylesUtils } from "@utils";

export type CheckboxProps = CheckboxPropsUI & {
  label: string;
  labelProps?: LabelProps;
};

const CheckboxWrapper = ({ label, labelProps, ...props }: CheckboxProps) => {
  return (
    <Label
      sx={StylesUtils.compose(labelProps?.sx, { alignItems: "center" })}
      {...labelProps}
    >
      <Checkbox {...props} />
      {label}
    </Label>
  );
};

export default CheckboxWrapper;
