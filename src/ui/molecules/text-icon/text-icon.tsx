import { Flex } from "theme-ui";

import { Icon, IIconProps, ITextProps, Text } from "@atoms";

export interface ITextIconProps {
  text: string;
  icon: IIconProps["name"];
  textProps?: ITextProps;
  iconProps?: Omit<IIconProps, "name">;
}

const TextIcon = ({ text, icon, textProps, iconProps }: ITextIconProps) => {
  return (
    <Flex sx={{ alignItems: "center" }}>
      <Text mr={1} {...textProps}>
        {text}
      </Text>
      <Icon name={icon} {...iconProps} />
    </Flex>
  );
};

export default TextIcon;
