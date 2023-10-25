import React, { useState, useEffect } from 'react'
import './Sidebar.scss'
import card_img from '../../image/sidebar__card-img.png'

export default function Sidebar({ onSearch, searchResult, onCardClick, searchStatus, setSelectedUser, setSearchStatus}) {
  const [query, setQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    setSelectedUserId(null)
  }, [searchResult])

  let content;

  if (searchStatus === 'start' || query === '') {
    content = <p className='sidebar__text-result'>начните поиск</p>
    setSelectedUser(null);
    setSearchStatus('start');
  } else if (searchStatus === 'loading') {
    content = <p className='sidebar__text-result'>Загрузка...</p>
  } else if (searchStatus === 'success' && searchResult.length > 0) {
    content = (
      <div className='sidebar__cards'>
        {searchResult.map(user => (
          <div key={user.id} className={`sidebar__card ${user.id === selectedUserId ? 'sidebar__card_type_active' : ''}`} onClick={() => handleCardClick(user)}>
            <img className='sidebar__card-img' src={card_img} alt='Фотография сотрудника' />
            <div className={`sidebar__card-info ${user.id === selectedUserId ? 'sidebar__card-info_type_active' : ''}`}>
              <p className='sidebar__card-name'>{user.name}</p>
              <p className='sidebar__card-email'>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (searchStatus === 'error') {
    content = <p className='sidebar__text-result'>ошибка на сервере</p>
  }
  else {
    content = <p className='sidebar__text-result'>ничего не найдено</p>
  }

  const handleCardClick = (user) => {
    setSelectedUserId(user.id);
    onCardClick(user);
  }

  function onSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>Поиск сотрудников</h2>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setQuery(e.target.value)} className='sidebar__input' type='text' placeholder='Введите Id или имя' />
      </form>
      <h2 className='sidebar__title-result'>Результаты</h2>
      {content}
    </div>
  )
}
