import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import {useState} from 'react';

function App() {

      // getter, setter
  const [state,setState] = useState('message from state')
  const [thing,setThing] = useState(true)

  const state2 = useState('mystate')
  console.log(state2)

  return (
    <div className="App border border-dark p-4">
      <h1>App Component</h1>
      <p>{state}</p>
      <Comp1 message={state} setState={setState} />
    </div>
  );
}

export default App;

// Hooks
// State
// useState hook
