import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ handleResetArray }) => {

  const handleLogoClick = () => {
    handleResetArray(); // Сбрасываем фильтр при нажатии на логотип
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to={'/'} className="header__logo" onClick={handleLogoClick}>
          <img src="/assets/icons/logo.svg" alt="logo" />
          <h1 className="header__logo--text">Abito</h1>
        </Link>
        <div className="header__controls">
          <button className="btn btn-outlined">Вход и регистрация</button>
          <button className="btn btn-primary">Подать объявление</button>
        </div>
        <div className="header__burger">
          <img src="/assets/icons/burger.svg" alt="burger" />
        </div>
      </div>
    </header>
  )
}

export default Header