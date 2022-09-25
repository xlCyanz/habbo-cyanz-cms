import { ThemeUIStyleObject } from "theme-ui";

type CreateStyle<S extends string | number | symbol> = {
  [key in S]: ThemeUIStyleObject;
};

const createStyle = <T extends string | number | symbol>(
  obj: CreateStyle<T>,
) => {
  return obj;
};

export { createStyle as create };
