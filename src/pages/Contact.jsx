import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <br/>
      <br/>
    <div className="container mt-5">
      <h2 className="mb-4">Контакты</h2>
      <p>Вы можете связаться с нами, заполнив форму ниже:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Ваше имя</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Ваш адрес электронной почты</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Ваше сообщение</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
    </div>
    </div>
  );
}
