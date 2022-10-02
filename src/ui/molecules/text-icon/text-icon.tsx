import React from "react";
import { Flex } from "theme-ui";

import { Icon, IconProps, TextProps, Text } from "@atoms";

export type TextIconProps = {
  text: string;
  iconName: IconProps["name"];
  textProps?: TextProps;
  iconProps?: Omit<IconProps, "name">;
};

const TextIcon = ({
  text,
  iconName,
  textProps = {},
  iconProps = {},
  ...props
}: TextIconProps) => {
  return (
    <Flex sx={{ alignItems: "center" }} {...props}>
      <Text data-testid="textIcon_Text" mr={1} {...textProps}>
        {text}
      </Text>
      <Icon data-testid="textIcon_Icon" name={iconName} {...iconProps} />
    </Flex>
  );
};

export default TextIcon;
