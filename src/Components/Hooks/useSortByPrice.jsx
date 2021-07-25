import { useProducts } from "../Context/ProductReducer";

const useSortByPrice = (products) => {
  const { state } = useProducts();

  if (state.sortByPrice === "lowToHigh") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (state.sortByPrice === "highToLow") {
    return [...products].sort((a, b) => b.price - a.price);
  }

  return products;
};
export default useSortByPrice;
