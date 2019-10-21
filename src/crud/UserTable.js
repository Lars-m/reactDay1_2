import React from 'react'

const UserTable = ({users,deleteUser,editUser}) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
    
      </tr>
    </thead>
    <tbody>
      {(
        users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={()=> {
                console.log("###-->",user)            
               editUser(user)
               }} className="btn btn-default btn-xs">Edit</button>&nbsp;
              <button onClick={()=>deleteUser(user.id)} className="btn btn-default btn-xs">Delete</button>
            </td>
          </tr>
        ))
      ) }
    </tbody>
  </table>
)

export default UserTable