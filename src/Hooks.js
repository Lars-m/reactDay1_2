import React, {useState,useEffect} from 'react';


const Counter = () => {
  const initial = ()=> Number(window.localStorage.getItem("count") || 0);
  const [count,setCount] = useState(initial);
  const increment = () => setCount(count +1)
  useEffect(()=> {
    window.localStorage.setItem("count",count);
  },[count])
  return (
    <div style={{marginTop: 20}}>

    <button onClick={increment}>{count}</button>
    </div>
    );
}
 
export default Counter;