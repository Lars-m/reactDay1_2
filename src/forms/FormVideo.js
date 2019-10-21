import React, {useState} from 'react';

const FormDemo = () => {
  const initialState = {name: "", age: null, email: ""};
  const [person,setPerson] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.alert(JSON.stringify(person));
  }

  // const handleInput = (event) => {
  //   const target = event.target;
  //   const id = target.id;
  //   var value = target.value;
  //   person[id] = value; 
  //   setPerson({...person});
  // }
  const handleInput = (event) => {
    const {id,value} = event.target;
    person[id] = value; 
    setPerson({...person});
  }
  return (
    <div style={{marginTop:25}}>
      <form onSubmit={handleSubmit} >
        <input id="name" type="text" value={person.name}
               placeholder="Name" onChange={handleInput}/>
        <br/>
        <input id="age" type="number" value={person.age}
               placeholder="Age" onChange={handleInput}/>
        <br/>
        <input id="email" type="text" value={person.email}
                placeholder="email" onChange={handleInput}/>
        <br/>
        <button >Submit</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}

export default FormDemo;

