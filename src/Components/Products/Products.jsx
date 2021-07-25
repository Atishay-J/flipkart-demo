import ProductCard from "../Cards/ProductCard";
import { useProducts } from "../Context/ProductReducer";
import useSortByBrands from "../Hooks/useSortByBrands";
import useSortByIdealFor from "../Hooks/useSortByIdealFor";
import useSortByPrice from "../Hooks/useSortByPrice";
import useSortBySize from "../Hooks/useSortBySize";
import "./products.css";

const Products = () => {
  const { state } = useProducts();
  const sortedBySize = useSortBySize(state.products);
  const sortedByPrice = useSortByPrice(sortedBySize);
  const sortedByBrands = useSortByBrands(sortedByPrice);
  const sortedByIdealFor = useSortByIdealFor(sortedByBrands);

  console.log("asdfdfdff3344", sortedByIdealFor);

  return (
    <div className="productsContainer">
      {sortedByIdealFor.length ? (
        sortedByIdealFor.map(
          ({
            id,
            name,
            productImage,
            isPromoted,
            brandName,
            price,
            originalPrice,
            discount,
            size,
            idealFor,
            ratings,
          }) => (
            <ProductCard
              key={id}
              name={name}
              brand={brandName}
              price={price}
              originalPrice={originalPrice}
              discount={discount}
              ratings={ratings}
              image={productImage}
              size={size}
              idealFor={idealFor}
              promoted={isPromoted}
            />
          )
        )
      ) : (
        <h2>Can't find any products for the filters</h2>
      )}
    </div>
  );
};
export default Products;
