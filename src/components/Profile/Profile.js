import React from 'react'
import './Profile.scss'
import user_img from '../../image/profile__user-img.png'

export default function Profile({ user }) {
  return (
    <div className='profile'>
      {!user ? (
        <p className='profile__start-text'>Выберите сотрудника, чтобы посмотреть его профиль</p>
      ) : (
        <div className='profile__result'>
          <img src={user_img} className='profile__user-img' alt='Фотография сотрудника' />
          <div className='profile__info'>
            <h3 className='profile__name'>{user.name}</h3>
            <p className='profile__contact'><span className='profile__span'>email:</span> {user.email}</p>
            <p className='profile__contact'><span className='profile__span'>phone:</span> {user.phone}</p>
            <p className='profile__about-title'>О себе:</p>
            <p className='profile__about'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
