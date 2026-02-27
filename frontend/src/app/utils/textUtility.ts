export const replaceString = (
  string: string,
  replaceTo: string | number,
  replaceWith: string = "{value}"
): string => {
    return string.replace(replaceWith, String(replaceTo));
};
