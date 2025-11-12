import { useState, useEffect} from 'react';
import axios from 'axios';

export default function App(){
  const [actresses, setActresses] = useState ([]);
  


function fetchActresses() {
  axios.get("https://lanciweb.github.io/demo/api/actresses/")
  .then((response) => {
    
    setActresses(response.data)


  } )


}
  
//solo al primo rendering ??????
  useEffect(fetchActresses, []);


  return (
    <>
    <div className='container '>
      <h1>Lista Attrici</h1>
      <ul className='list-group'>
        {actresses.map((actress) => (
          <li className='list-group-item' key={actress.id}>{actress.name}</li>
        ))}
      </ul>
    </div>



    </>
  );
}
