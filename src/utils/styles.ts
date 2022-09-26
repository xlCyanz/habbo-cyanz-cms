import { ThemeUIStyleObject } from "theme-ui";

type CreateStyle<S extends string | number | symbol> = {
  [key in S]: ThemeUIStyleObject;
};

const createStyle = <S extends string | number | symbol>(
  obj: CreateStyle<S>,
) => {
  return obj;
};

const composeStyle = <T>(style1: T, style2?: T) => {
  return Object.assign({}, style1, style2) as T;
};

export { createStyle as create, composeStyle as compose };
