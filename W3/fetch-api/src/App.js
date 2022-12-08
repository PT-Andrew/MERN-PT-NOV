import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

// Base URL
// https://reqres.in/api/

// https://swapi.dev/api/

// API Key

function App() {

  const [list,setList] = useState([])

  // https://reqres.in/api/users?page=2/{API_KEY}

  // Asynchronous Requests
  // AJAX

  // single threaded language

  // Promise

  // axios

  useEffect(()=>{
    fetch('https://swapi.dev/api/planets/2')
    .then((res)=>{
      return res.json()
    }).then((result)=>{
      console.log(result)
      setList(result)
    }).catch((err)=>{
      console.log(err)
    })
    // dependency array
  },[])

  return (
    <div className="App">
 
          <div>
            <h1>Name: {list.name}</h1>
            <h2>Population:{list.population}</h2>

          </div>
      
      {/* {
        list.map((user)=>(
          <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <h2>{user.email}</h2>
            <img src={user.avatar} />
          </div>
        ))
      } */}
     
    </div>
  );
}

export default App;
