export const formatNumber = (value: number | string | undefined,  decimals = 2) => {
  if (!value) return 0.00 ;

  const number = typeof value === "string" ? parseFloat(value) : value;
  const numFormat = Intl.NumberFormat('en-US', {
    style: "decimal",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return numFormat.format(number);
};

export const formatMarketCap = (num: string) => {
  const number = parseFloat(num);
  if (number >= 1e12) return `$${(number / 1e12).toFixed(2)}T`;
  if (number >= 1e9) return `$${(number / 1e9).toFixed(2)}B`;
  if (number >= 1e6) return `$${(number / 1e6).toFixed(2)}M`;
  return `$${formatNumber(num)}`;
};
