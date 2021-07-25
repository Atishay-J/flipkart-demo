import { useProducts } from "../Context/ProductReducer";

const useSortByIdealFor = (products) => {
  const { state } = useProducts();

  console.log("asfsf33", state, "sadfdf", products);

  if (state.sortByIdealFor) {
    return products.filter((product) =>
      product.idealFor.find((item) => item === state.sortByIdealFor)
    );
  }
  return products;
};
export default useSortByIdealFor;
