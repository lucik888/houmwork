// модули React
import React from 'react';
import ReactDOM from 'react-dom';
// библиотека для работы с классами
import cn from 'classnames';
// импорт стилей прямо в JS
import './styles.css';

// компонент, который описывает приложение
const App = () => {
  // состояние - крутится шестеренка или нет, изначально не крутится
  const [isSpining, setIsSpining] = React.useState(false);
  // класс для шестеренки, если крутится добавляется класс "spin"
  const gearClassName = cn('gear', isSpining && 'spin');

  return (
    <div className="container">
      <h1>Нажми на кнопку получишь результат</h1>
      {/* className используется вместо class, т.к. class - зарезервированное служебное слово в JS */}
      <img className={gearClassName} src="/gear.svg" />
      <br />
      {/* onClick - функция, которая будет вызвана при клике на кнопку, нужно поменять isSpining на true */}
      <button onClick={() => setIsSpining(true)} className="press-button">Жми сюды</button>
      {/* Отображение по условию - если isSpining, отображаем "Заработало" */ }
      {isSpining && <p>Заработало!</p>}
    </div>
  );
};

// вызовы метода render для отрисовки нашего приложения
ReactDOM.render(
  // наш корневой компонент
  <App />,
  // отрисовываем наше приложение в <body>
  document.body
);
