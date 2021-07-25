import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductReducer";

const SortByBrands = ({ reset, setReset }) => {
  const { state, dispatch } = useProducts();
  const [checked, setChecked] = useState(false);

  let allBrands = state.products.map((product) => product.brandName);
  let removedDuplicateBrands = new Set(allBrands);

  const changeFilter = (event) => {
    setChecked(event.target.value);
    setReset(false);
    if (event.target.checked) {
      dispatch({ type: event.target.name, payload: event.target.value });
    }
  };

  useEffect(() => {
    if (reset) {
      setChecked(null);
    }
  }, [reset]);

  return (
    <div className="filterWrapper">
      {[...removedDuplicateBrands].map((brand, index) => (
        <div className="filterInputWrapper" key={index}>
          <input
            type="radio"
            id={brand}
            name="SORT_BY_BRAND"
            value={brand}
            onChange={(e) => changeFilter(e)}
            checked={checked === brand}
          />
          <label for={brand}>{brand}</label>
        </div>
      ))}
    </div>
  );
};
export default SortByBrands;
