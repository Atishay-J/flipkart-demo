import { useProducts } from "../Context/ProductReducer";
import { useEffect, useState } from "react";

const SortBySize = ({ reset, setReset }) => {
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
          id="small"
          name="SORT_BY_SIZE"
          value="S"
          onChange={(e) => changeFilter(e)}
          checked={checked === "S"}
        />
        <label for="small">S</label>
      </div>
      <div className="filterInputWrapper">
        <input
          type="radio"
          id="medium"
          name="SORT_BY_SIZE"
          value="M"
          onChange={(e) => changeFilter(e)}
          checked={checked === "M"}
        />
        <label for="medium">M</label>
      </div>
      <div className="filterInputWrapper">
        <input
          type="radio"
          id="large"
          name="SORT_BY_SIZE"
          value="L"
          onChange={(e) => changeFilter(e)}
          checked={checked === "L"}
        />
        <label for="large">L</label>
      </div>
      <div className="filterInputWrapper">
        <input
          type="radio"
          id="extraLarge"
          name="SORT_BY_SIZE"
          value="XL"
          onChange={(e) => changeFilter(e)}
          checked={checked === "XL"}
        />
        <label for="extraLarge">XL</label>
      </div>
    </div>
  );
};

export default SortBySize;
