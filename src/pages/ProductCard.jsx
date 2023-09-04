import React from 'react';

const ProductCard = ({ imageUrl, title, price, onClick,details }) => (
  <div className="col-md-4 mb-4">
    <div className="product-card" onClick={onClick}> {/* Ürün kartına tıklamayı ekleyin */}
      <img src={imageUrl} alt={title} className="img-fluid" />
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <p className="details">{details}</p>
      {/* <a href="#details" className="details">Detaylara git</a> */}

    </div>
    <br />
  </div>
);

export default ProductCard;
