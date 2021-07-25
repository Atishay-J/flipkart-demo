import { useProducts } from "../Context/ProductReducer";
import { useEffect, useState } from "react";

const SortByIdealFor = ({ reset, setReset }) => {
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
          id="men"
          name="SORT_BY_IDEAL_FOR"
          value="Men"
          onChange={(e) => changeFilter(e)}
          checked={checked === "Men"}
        />
        <label for="men">Men</label>
      </div>
      <div className="filterInputWrapper">
        <input
          type="radio"
          id="women"
          name="SORT_BY_IDEAL_FOR"
          value="Women"
          onChange={(e) => changeFilter(e)}
          checked={checked === "Women"}
        />
        <label for="women">Women</label>
      </div>
    </div>
  );
};
export default SortByIdealFor;
