import "./productCard.css";
const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  discount,
  ratings,
  image,
  size,
  idealFor,
  promoted,
}) => {
  return (
    <div className="productCardContainer">
      <div className="productImageWrapper">
        <img src={image} alt="Product" className="productImage" />
        {promoted && <span className="promoted">Ad</span>}
      </div>
      <div className="productInfoWrapper">
        <h1 className="brandName">{brand}</h1>
        <h2 className="productName">{name}</h2>
        <div className="priceWrapper">
          <h3 className="price">{price}</h3>
          <h4 className="originalPrice">{originalPrice}</h4>
          <span className="discount">{discount} off</span>
        </div>
        <div className="discountWrapper">
          <span className="ratings">{ratings} ★</span>
        </div>
        <div className="extraInfo">
          <h4 className="size">
            <span className="sizeHeading"> Size:</span> {size.join(", ")}
          </h4>
          <h4 className="size">
            <span className="sizeHeading"> Ideal For:</span>{" "}
            {idealFor.join(", ")}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
