import { useProducts } from "../Context/ProductReducer";
import { useEffect, useState } from "react";

const SortByPrice = ({ reset, setReset }) => {
  const { dispatch } = useProducts();
  const [checked, setChecked] = useState(false);

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
      <div className="filterInputWrapper">
        <input
          type="radio"
          id="lowToHigh"
          name="SORT_BY_PRICE"
          value="lowToHigh"
          onChange={(e) => changeFilter(e)}
          checked={checked === "lowToHigh"}
        />
        <label for="lowToHigh">Low to High</label>
      </div>
      <div className="filterInputWrapper">
        <input
          type="radio"
          id="highToLow"
          name="SORT_BY_PRICE"
          value="highToLow"
          onChange={(e) => changeFilter(e)}
          checked={checked === "highToLow"}
        />
        <label for="highToLow">High to Low</label>
      </div>
    </div>
  );
};

export default SortByPrice;
