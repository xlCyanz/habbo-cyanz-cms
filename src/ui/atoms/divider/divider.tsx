import { StylesUtils } from "@utils";
import { Divider, DividerProps } from "theme-ui";

export interface IDividerProps extends DividerProps {
  vertical?: boolean;
}

const styles = StylesUtils.create({
  vertical: {
    height: "70%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "secondaryLight",
  },
});

const DividerWrapper = ({ sx, vertical, ...props }: IDividerProps) => {
  return (
    <Divider
      sx={StylesUtils.compose(sx, vertical ? styles.vertical : {})}
      {...props}
    />
  );
};

export default DividerWrapper;
