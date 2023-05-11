import React, {useState, useEffect}  from  'react';
import Character from "./components/Character";
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char , setChar] = useState([]);
  
  

  
 

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data);
      setChar(res.data);
    })
    .catch(err => {console.error(err)})
  },[])

  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {char.map((ch ) => {
        return <Character info={ch} key={ch.id} />
      })}
      
      </div>
      
  );
}

export default App;
