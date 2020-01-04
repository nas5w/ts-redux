export const priceFormat = (price: number) => {
  return `$${(price / 100).toFixed(2)}`;
};
