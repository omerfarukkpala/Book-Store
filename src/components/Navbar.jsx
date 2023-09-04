import React from 'react';
import { NavLink } from 'react-router-dom';
import './medium.css';

export default function Navbar(props) {
  return (
    <div className="bg-yellow py-1">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src="images/logo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li className="nav-item ml-4 mx-3">
                <NavLink className="nav-link" to="/Home">
                  Ассортимент <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ml-4">
                <NavLink className="nav-link" to="/Адресамагазинов">
                  Адреса магазинов
                </NavLink>
              </li>
              <li className="nav-item ml-4">
                <NavLink className="nav-link" to="/Поддержкаиконтакты">
                  Поддержка и контакты
                </NavLink>
              </li>
              <li className="nav-item ml-4 ml-md-auto">
                <NavLink className="nav-link" to="/Заказатьзвонок">
                  <a href="#" className="nav-btn">
                    Заказать звонок
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="element bg-yellow">
        <img src="images/element.svg" alt="Element" />
      </div>
    </div>
  );
}
