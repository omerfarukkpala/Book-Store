import React from 'react';

const ProductCard = ({ imageUrl, title, price }) => (
  <div className="col-md-4 mb-4">
    <div className="product-card">
      <img src={imageUrl} alt={title} className="img-fluid" />
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <a href="#" className="btn btn-primary">See More</a>
    </div>
  </div>
);

export default ProductCard;
