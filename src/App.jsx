import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App(){
  const [actresses, setActresses] = useState ([]);
}


function fetcActresses() {
  axios.get("https://lanciweb.github.io/demo/api/actresses/")
  .then((response) => setActresses(response.data) )
  return (
    <>
     <ul>
      <h1>Lista Attrici</h1>
      

     </ul>








    </>
  )
}

