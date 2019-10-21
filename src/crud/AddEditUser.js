import React, { useState,useEffect } from "react";

const AddEditUserForm = props => {

  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);
  const [header,setHeader] = useState("Add User")

  const handleInputChange = event => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  const cancel = event => {
    event.preventDefault();
    setUser(initialFormState);
    props.clearIsEdit()
  }
  const handleSubmit = event => {
    event.preventDefault();
    if (!user.name || !user.username) return;

    props.addUser(user);
    setUser(initialFormState);
  };

  useEffect(()=>{
     console.log("----------->",props.userToEdit)
    setUser({...props.userToEdit})
    const text = !props.userToEdit ? "Add user" : "Edit User";
    setHeader(text)
  },[props.userToEdit])

  
  return (
    <div>
     <h2>{header}</h2> 
    {user.id && <p style={{ textAlign: "left" }} ><label>Id: </label> {user.id}</p>}
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          id="name"
          value={user.name}
          onChange={handleInputChange}
        />

        <label>Username</label>
        <input
          className="form-control"
          type="text"
          id="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
            {!user.id &&<button className="btn btn-default">Add new user</button>}
            {user.id &&(<React.Fragment><button className="btn btn-default">Edit User</button>
                       <button onClick={cancel}className="btn btn-default">Cancel</button></React.Fragment>)
          }
    </form>
    </div>
  );
};

export default AddEditUserForm;
