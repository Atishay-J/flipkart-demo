import { useProducts } from "../Context/ProductReducer";

const useSortBySize = (products) => {
  const { state } = useProducts();

  let sortedProducts = state.sortBySize
    ? products.filter((product) =>
        product.size.find((item) => item === state.sortBySize)
      )
    : products;

  return sortedProducts;
};
export default useSortBySize;
