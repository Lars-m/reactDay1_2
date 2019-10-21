import React, { useState } from "react";
import UserTable from "./UserTable";
import AddEditUser from "./AddEditUser";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];
  const [users, setUsers] = useState(usersData);
  const [userToEdit,setUserToEdit] = useState(null);

  const addUser = user => {
    if (!user.id) {
      user.id = users.length + 1;
      setUsers([...users, user]);
    } else {
      const idx = users.findIndex(u => u.id=== user.id);
      users[idx] = {...user};
      setUsers([...users]);
      setUserToEdit(null);
    }
    
  }
  const clearIsEdit = ()=>{
    setUserToEdit(null)
  }

  const deleteUser = id => {
    if(userToEdit === null){
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const editUser = (user) => {
    setUserToEdit({...user});
    console.log("-->",{...user})
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div>
        <div className="col-md-6">
          <h2>View users</h2>
          <hr />
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} setUserToEdit={setUserToEdit}/>
        </div>
        <div className="col-md-6">
          <hr />
          
          <AddEditUser addUser={addUser} userToEdit={userToEdit} clearIsEdit={clearIsEdit}/>
        </div>
      </div>
    </div>
  );
};

export default App;
