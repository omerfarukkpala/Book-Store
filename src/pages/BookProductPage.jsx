import React from 'react';
import ProductCard from './ProductCard'; 

export default function BookProductPage() {
  const products = [
   
    {
      imageUrl: "/images/insanneileyasar.jpg", 
      title: "Чем люди живы",
      price: "100 ₽"
    },
    {
      imageUrl: "/images/altincikogus.jpg",  
      title: "Палата № 6",
      price: "150 ₽" 
    },
    {
      imageUrl: "/images/kumarbaz.jpg",  
      title: "Игрок",
      price: "150 ₽" 
    },
    
  ];

  return (
    <section id="products" className="products Section Section--spacingNormal">
      <div className="container">
      <br />
        <div className="row">
          
          <h2 className="Heading u-h1 text-center"><br /> <h1></h1>ПРЕДСТАВЛЕННЫЕ ТОВАРЫ</h2>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
