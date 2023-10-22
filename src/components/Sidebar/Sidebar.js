import React, { useState } from 'react'
import './Sidebar.scss'

export default function Sidebar({ onSearch }) {
  const [search, setSearch] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <div className='sidebar'>
      <h3 className='sidebar__title'>Поиск сотрудников</h3>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setSearch(e.target.value)} className='sidebar__input' type='text' placeholder='Введите Id или имя' />
      </form>
      <h4 className='sidebar__title-result'>Результаты</h4>
      <p className='sidebar__text-result'>начните поиск</p>
    </div>
  )
}
