import { Flex } from "theme-ui";

import { Icon, IIconProps, ITextProps, Text } from "@atoms";

export interface ITextIconProps {
  text: string;
  icon: IIconProps["name"];
  reverted?: boolean;
  textProps?: ITextProps;
  iconProps?: Omit<IIconProps, "name">;
}

const TextIcon = ({
  text,
  icon,
  textProps = {},
  iconProps = {},
  reverted = false,
}: ITextIconProps) => {
  return (
    <Flex sx={{ alignItems: "center" }}>
      {reverted && <Icon name={icon} {...iconProps} />}
      <Text {...(reverted ? { ml: 1 } : { mr: 1 })} {...textProps}>
        {text}
      </Text>
      {!reverted && <Icon name={icon} {...iconProps} />}
    </Flex>
  );
};

export default TextIcon;
