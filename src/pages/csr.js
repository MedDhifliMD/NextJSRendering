// client side rendering
import { useEffect, useState } from "react";

export default function ClientSideRendered() {
    const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch ('https://63e014158b24964ae0f92fa7.mockapi.io/names/names');
    const data = await res.json();
    setState(data);
  }
  
  useEffect(() => {
   getData();
  },[]);

  console.log("state = "+state);
  console.log("state11111 = "+state);

  return (
    <>
       {state.map((e) => (
         <h2 key={e.id}>{e.name}</h2>
        ))}
    </>)


}