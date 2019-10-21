import React from "react";
import person from "./file2";
import {males,females} from "./file2";

const {firstName,email} = person;
const all = [...males,...females];
const allPlus = [...males,"Kurt","Helle",...females,"Tina"];

console.log(all)
console.log(allPlus)
const kurtV2 ={...person,phone:123456,friends:all}
console.log(kurtV2);

const Ex2 = () => {
  return (
  <div>
    <h3>Exercise 2</h3>
    <p>{firstName}</p>
    <p>{email}</p>+
  </div>
  )
};

export default Ex2;