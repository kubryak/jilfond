import React, { useState } from 'react'
import './Main.scss'
import Sidebar from '../Sidebar/Sidebar'
import Profile from '../Profile/Profile'
import { api } from '../../utils/api.js'

export default function Main() {

  function getUsers(search) {
    api.getUsers(search)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='main'>
      <Sidebar onSearch={getUsers} />
      <Profile />
    </div>
  )
}
