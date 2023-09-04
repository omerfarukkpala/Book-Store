import { useContext } from "react"


export default function Footer(props) {
  return (
        
  <div className="container mt-5 bg-yellow">
    <div className="row">
      <div className="col-12"><h2>Почему мы</h2>
      </div>
      <div className="col-sm-4">
        <img src="images/Group 21.svg" />
        <h3>Давно на рынке</h3>
        <div className="content">Мы продаем книги с 1926 года и мы намерены еще очень долго радовать наших любимых читателей лучшими кингами!</div>
      </div>
       <div className="col-sm-4">
        <img src="images/Group 22.svg" />
        <h3>Социальные сети</h3>
        <div className="content">Ведем крутой инстаграм о книгах где делимся с нашими читателями интересными новостями из мира книг, а так же рассказываем о новинках!</div>
      </div>
       <div className="col-sm-4">
        <img src="images/Group 23.svg" />
        <h3>Собственная кофейня</h3>
        <div className="content">Мы решили сделать самое уютное место для прочтения любимой книги. Чашечка вкуснейшего кофе сделает процесс чтения еще приятнее!</div>
      </div>
    </div>
  </div>  
        
  )
}