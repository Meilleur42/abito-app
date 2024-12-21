import React, { useState } from 'react';
import './Search.css'


const Search = ({ handleSearchArray }) => {

  const [searchText, setSearchtext] = useState('');
 
  const handleSearch = (e) => {
    setSearchtext(e.target.value)
  }

  const handleSubmit = () => {
    handleSearchArray(searchText); // Передаём текст для фильтрации в функцию handleSearchArray
    setSearchtext('')
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Предотвращаем стандартное поведение формы
      handleSubmit(); // Выполняем фильтрацию
    }
  };

 
  return (
    <section className="search">
        <div className="container search__container">
          <div className="search__group">
            <input 
            type="text" 
            placeholder="Поиск по объявлениям"
            value={searchText}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            />
            <button 
            className="btn btn-outlined" 
            id="search-btn"
            onClick={handleSubmit}
            >
              <img
                className="search__btn-icon"
                src="/assets/icons/search.svg"
                alt="search"
              />
              <span className="search__btn-text">Найти</span>
            </button>
          </div>
        </div>
      </section>
  )
}

export default Search