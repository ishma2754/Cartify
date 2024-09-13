import axios from "axios";

const productionUrl = "https://fakestoreapi.in/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => { 
  const dollarAmount = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(price);
return dollarAmount;
}


//NO NEED OF PRICE/100 AND TO FIXED(2)