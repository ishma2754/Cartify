
export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return dollarAmount;
};

//NO NEED OF PRICE/100 AND TO FIXED(2)

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return <option key={amount}>{amount}</option>;
  });
};
