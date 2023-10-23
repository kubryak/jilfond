import React, { useState } from 'react'
import './Sidebar.scss'
import card_img from '../../image/sidebar__card-img.png'

export default function Sidebar({ onSearch }) {
  const [search, setSearch] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>Поиск сотрудников</h2>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setSearch(e.target.value)} className='sidebar__input' type='text' placeholder='Введите Id или имя' />
      </form>
      <h2 className='sidebar__title-result'>Результаты</h2>
      {/* <p className='sidebar__text-result'>начните поиск</p> */}
      <div className='sidebar__card'>
        <img className='sidebar__card-img' src={card_img} alt='Фотография сотрудника' />
        <div className='sidebar__card-info'>
          <p className='sidebar__card-name'>Bret</p>
          <p className='sidebar__card-email'>Sincere@april.biz</p>
        </div>
      </div>
      <div className='sidebar__card sidebar__card_type_active'>
        <img className='sidebar__card-img' src={card_img} alt='Фотография сотрудника' />
        <div className='sidebar__card-info sidebar__card-info_type_active'>
          <p className='sidebar__card-name'>Bret</p>
          <p className='sidebar__card-email'>Sincere@april.biz</p>
        </div>
      </div>
    </div>
  )
}
