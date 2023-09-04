import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function BookProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    // Ürünlerin listesi burada...
    {
      imageUrl: "/images/insanneileyasar.jpg", 
      title: "Чем люди живы",
      price: "10 ₽",
      details:"Мы знаем, что мы перешли из смерти и жизнь, потому что любим братьев: не любящий брата пребывает в смерти"
    },
    {
      imageUrl: "/images/altincikogus.jpg",  
      title: "Палата № 6",
      price: "15 ₽" ,
      details:"«Все это было бы смешно, когда бы не было так грустно», — это, пожалуй, лаконичная и точная характеристика гениальных рассказов Антона Павловича Чехова, величайшего писателя, публициста и драматурга, которого и по сей день знают и любят во всем мире. Тонкий юмор, язвительный сарказм и вместе с тем трогательная до нежности чуткость ко всякому человеческому переживанию — отличительные черты произведений Чехова, неважно, написаны ли они в форме короткого рассказа или пьесы."
    },
    {
      imageUrl: "/images/kumarbaz.jpg",  
      title: "Игрок",
      price: "10 ₽",
      details:"Достоевским я зачитывался, даже в очень плохих переводах. Позднее я прочитал его по-французски, на французский его переводили русские, их переводы были гораздо лучше испанских. Я думаю, что для любого писателя в мире русские романисты — основа основ"
    },
    {
      imageUrl: "/images/ana.png",  
      title: "Мать",
      price: "10 ₽" ,
      details:"В основу романа «Мать», одного из самых популярных произведений Горького, легла массовая демонстрация 1902 года в городе Сормове. Отсюда основанный на реальных событиях волнующий сюжет, с острой политической борьбой, тайными сходками, обыс ками, арестами, самоотверженным героизмом главного героя-революционера Павла Власова."
    },
    {
      imageUrl: "/images/birdeli.png",  
      title: "Записки сумасшедшего",
      price: "10 ₽" ,
      details: "Ярчайший представитель плеяды знаменитых классиков русской литературы Николай Гоголь прославился на весь мир. Его произведения популярны не только в странах бывшего Союза, но и далеко за их пределами — они переведены на десятки языков, а литературоведы из самых разных стран до сих пор разбирают его книги по косточкам."
    },
    {
      imageUrl: "/images/beyazgeceler.png",  
      title: "БЕЛЫЕ НОЧИ",
      price: "10 ₽" ,
      details:"Санкт-Петербург. Лето. Белые ночи. Одинокий человек совершает привычную прогулку и не находит знакомые лица. Петербург пустеет — господа разъезжаются по дачам. Предаваясь грустным мыслям и мечтам, главный герой неожиданно встречает девушку. Так в повествовании появляется Настенька. Молодые люди сближаются. Они встречаются белыми ночами, беседуют, затрагивая историю своей жизни. В одной из таких бесед Настенька рассказывает о бывшем постояльце, что квартировал в их с бабушкой доме. Тогда-то девушка и влюбилась в него. Любви не суждено было вылиться во что-то большее, ибо постоялец съехал, обещав вернуться через год. Ровно столько он отвёл себе для улучшения финансового благосостояния. Прошёл год, бывший постоялец в городе, но с Настенькой так и не связался. Молодой человек, сам изнывая от любви к девушке, вызывается помочь той, дабы разрешить сложившуюся ситуацию."
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="products Section Section--spacingNormal">
      <div className="container">
        <br />
        <br />
        <div className="row">
          <h2 className="Heading u-h1 text-center"><br /> ПРЕДСТАВЛЕННЫЕ ТОВАРЫ</h2>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              // details={product.details}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
        {selectedProduct && (
          <div className="row">
            <div className="col-md-6 offset-md-2">
              <div className="product-details">
                <h3>{selectedProduct.title} деталь</h3>
                <img src={selectedProduct.imageUrl} alt={selectedProduct.title} className="img-fluid" />
                <p className="price">{selectedProduct.price}</p>
                <p className="details">{selectedProduct.details}</p>
                {/* Diğer ürün detayları buraya eklenir */}
                <button onClick={() => setSelectedProduct(null)}>закрывать</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
