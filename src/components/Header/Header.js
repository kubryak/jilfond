import React from 'react'
import './Header.scss';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header__logo'>Жилфонд</h1>
      <p className='header__user-name'>Пользователь</p>
    </header>
  )
}
