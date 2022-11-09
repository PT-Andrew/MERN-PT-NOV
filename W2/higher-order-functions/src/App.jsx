import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import PersonCard from './components/PersonCard';

function App() {

  const [state,setState] = useState([
    {
      firstName:'Cool',
      lastName:'Guy',
      age:200,
      city:'Milwaukee'
    },
    {
      firstName:'Not Cool',
      lastName:'Person',
      age:25,
      city:'Witchita'
    },
    {
      firstName:'Very Awesome',
      lastName:'Person',
      age:2,
      city:'Borneo'
    },
  ])

  return (
    <div className="App">
      {
        state.map((person)=>(
          <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} city={person.city}/>
        ))
      }
    </div>
  );
}

export default App;
