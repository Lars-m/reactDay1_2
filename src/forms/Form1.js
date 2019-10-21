import React, {useState} from "react";

const NameForm = () => {
  const [name,setName] = useState("");

  function handleChange(event) {
    const {value,id} = event.target;
    setName(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    window.alert("Name: "+name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input value={name} id="name" onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>
      {name}
    </div>
  );
};
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}