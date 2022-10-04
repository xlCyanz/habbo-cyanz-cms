import React from "react";
import { Flex } from "theme-ui";

import { Icon, IconProps, TextProps, Text, FlexProps } from "@atoms";

export type IconTextProps = FlexProps & {
  text: string;
  iconName: IconProps["name"];
  textProps?: TextProps;
  iconProps?: Omit<IconProps, "name">;
};

const IconText = ({
  text,
  iconName,
  textProps = {},
  iconProps = {},
  ...props
}: IconTextProps) => {
  return (
    <Flex sx={{ alignItems: "center" }} {...props}>
      <Icon data-testid="iconText_Icon" name={iconName} {...iconProps} />
      <Text data-testid="iconText_Text" ml={1} {...textProps}>
        {text}
      </Text>
    </Flex>
  );
};

export default IconText;
