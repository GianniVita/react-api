import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [actresses, setActresses] = useState([]);



  function fetchActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {

        setActresses(response.data)


      })


  }

  //solo al primo rendering ??????
  useEffect(fetchActresses, []);


  return (
    <>
      <div className='container'>
        <h1> 🕴🏻Lista Attrici 🎭</h1>
        <div className='list-group'>
          {actresses.map((actress) => (
            <div>
              <li className='list-group-item' key={actress.id}>{actress.name}</li>
              <div className="card">
                <ul>
                  <li className="list-group-item">foto: {actress.image}</li>
                  <li className="list-group-item">anno di nascita: {actress.birth_year}</li>
                  <li className="list-group-item">nazionalità: {actress.nationality}</li>
                  <li className="list-group-item">biogafia: {actress.biography}</li>
                  <li className="list-group-item">riconoscimenti: {actress.awards}</li>
                  <li className="list-group-item">Anno R.i.p.: {actress.death_year}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  );
}
