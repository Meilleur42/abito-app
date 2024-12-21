import React from 'react';
import './Sidebar.css';
import { sidebarArray } from '../../constants.js';
import SidebarCard from '../SidebarCard/SidebarCard';

const Sidebar = () => {
  return (
    <div className="content__sidebar">
                <h3 className="content__sidebar-title">Сервисы и услуги</h3>
                <div className="content__sidebar-group">
                  <div className="content__sidebar--list">
                    {
                      sidebarArray.map(item => (
                        <SidebarCard 
                        key={item.id} 
                        img={item.img}
                        alt={item.alt}
                        title={item.title}
                        text={item.text}
                        />
                      ))
                    }                    
                    
                  </div>

                  <div className="content__sidebar-footer">
                    <p className="content__sidebar-footer--item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a href="#!" className="content__sidebar-footer--item">
                      Политика конфиденциальности
                    </a>
                    <a href="#!" className="content__sidebar-footer--item">
                      Обработка данных
                    </a>
                  </div>
                </div>
              </div>
  )
}

export default Sidebar