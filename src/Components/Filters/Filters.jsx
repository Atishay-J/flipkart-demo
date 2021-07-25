import SortBySize from "./SortBySize";
import SortByPrice from "./SortByPrice";
import SortByBrands from "./SortByBrands";
import SortByIdealFor from "../Filters/SortByIdealFor";
import { useProducts } from "../Context/ProductReducer";
import { useState } from "react";
import "./filters.css";

const Filters = () => {
  const { dispatch } = useProducts();
  const [reset, setReset] = useState(false);

  const resetFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    setReset(true);
  };

  return (
    <div className="filterContainer">
      <h1 className="filterHeading">Filters</h1>
      <SortBySize reset={reset} setReset={setReset} />
      <SortByPrice reset={reset} setReset={setReset} />
      <SortByBrands reset={reset} setReset={setReset} />
      <SortByIdealFor reset={reset} setReset={setReset} />
      <button className="clearFilterBtn" onClick={resetFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
