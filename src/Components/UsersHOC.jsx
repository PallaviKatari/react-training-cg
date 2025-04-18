import React from 'react'
import Hoc from './HOC'

//UserList Component
const UserList = ({ data }) => {
  let usersList = data.map((item) => {
    return <div key={item.id}>{item.name}<br/>{item.email}<hr/></div>
  })
  return <div>{usersList}</div>
}
const SearchUsers = Hoc(UserList, 'users')
export default SearchUsers