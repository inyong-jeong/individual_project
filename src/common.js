export const ConvertDate = (date) => {
  const result = date.replaceAll("-", ".");
  return result;
};

export const ConvertTime = (date) => {
  const result = date.replaceAll("-", ":");
  return result;
};
