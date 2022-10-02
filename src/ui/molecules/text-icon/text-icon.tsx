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
}: TextIconProps) => {
  return (
    <Flex sx={{ alignItems: "center" }}>
      <Text mr={1} {...textProps}>
        {text}
      </Text>
      <Icon name={iconName} {...iconProps} />
    </Flex>
  );
};

export default TextIcon;
