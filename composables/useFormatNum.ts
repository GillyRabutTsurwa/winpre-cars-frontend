export const useFormatNum = (): object => {
  const format = (num: number): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return {
    format: format,
  };
};
