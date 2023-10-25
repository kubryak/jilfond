import React, { useState } from 'react'
import './Main.scss'
import Sidebar from '../Sidebar/Sidebar'
import Profile from '../Profile/Profile'
import { api } from '../../utils/api.js'

export default function Main() {
  const [searchResult, setSearchResult] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchStatus, setSearchStatus] = useState('start');

  const handleCardClick = (user) => {
    setSelectedUser(user);
  }

  function getUsers(search) {
    setSearchStatus('loading')
    setSelectedUser(null)
    api.getUsers(search)
      .then((res) => {
        setSearchResult(res)
        setSearchStatus(res.length > 0 ? 'success' : 'empty')
      })
      .catch(err => {
        console.log(err)
        setSearchStatus('error')
      })
  }

  return (
    <div className='main'>
      <Sidebar onSearch={getUsers} searchResult={searchResult} onCardClick={handleCardClick} searchStatus={searchStatus} setSelectedUser={setSelectedUser} setSearchStatus={setSearchStatus}/>
      <Profile user={selectedUser} />
    </div>
  )
}
