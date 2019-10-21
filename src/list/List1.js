import React, { useState } from "react";

function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map(n => <p>{n}</p>);
  return  listItems ;
}
function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers,setNumbers] = useState([1, 2, 3, 4]);
  setTimeout(()=>setNumbers([...numbers,numbers[numbers.length-1]+1]),1000)
  return <ListDemo numbers={numbers} />;
}
