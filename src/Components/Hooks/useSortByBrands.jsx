import { useProducts } from "../Context/ProductReducer";

const useSortByBrands = (products) => {
  const { state } = useProducts();

  if (state.sortByBrand) {
    return products.filter(
      (product) => product.brandName === state.sortByBrand
    );
  }
  return products;
};
export default useSortByBrands;
