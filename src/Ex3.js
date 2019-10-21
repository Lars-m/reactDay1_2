import React from 'react';
import {names} from './file2';
import Presenter from './slet';
import PropTypes from 'prop-types';

function Welcome(props){
  return <h3>Hello, {props.name}</h3>
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
}



function WelcomePerson({person}){
  const {firstName,lastName,email,gender} = person;
  return (
    <div>
      <p>{firstName}, {lastName}, {email}, {gender}</p>
    </div>
  )
}
WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
}

function Ex3() {
  console.log(names)
  return (
    <div>
      <h3>Exercise 3 Props</h3>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    
     
      <h3>Exercise, Props 2</h3>
      <WelcomePerson person = {names[0]}/>
      {names.map((name,index) => <WelcomePerson key={index} person={name}/>)}
    </div>
  );
}

export default Ex3;
