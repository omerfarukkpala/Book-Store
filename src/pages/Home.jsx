

import React from 'react';


export default function Home(props) {
  return (
    <div className="bg-yellow my-4">
      <div className="container">
        <div className="row">
          <div className="col-7 py-2">
            <br /> <br /> <br />
            <h1>Книжный магазин</h1>
            <h1>«Подписные издания» </h1>
            <p>
              Продаем книги с 1926 года. Наш широкий ассортимент не
             <p>  оставит равнодушним ни одного любителя бумажных книг!</p>
            </p>
            <a href="#" className="button">
              <div className="btntext">Смотреть каталог</div>
            </a>
            <div className="social">
              <ul className="social-items">
                <li>
                  <a href="#">
                    <img src="images/u_instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/u_vk-alt.svg" alt="wk" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/fi_facebook.svg" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/fi_youtube.svg" alt="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-end">
              <img src="images/Image.png" alt="resim" className="float-right img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
