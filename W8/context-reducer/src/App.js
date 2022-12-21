import logo from './logo.svg';
import './App.css';
import {createContext,useState, useReducer} from 'react'
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import { FirstProvider } from './components/FirstContext';
import Count from './components/Count';


function App() {

  const initialState = {
    count:0
  }

  const reducer = (state,action) => {
    switch(action.type){
      case 'increment':
        console.log('increment')
        return {
          count:state.count++
        }
        case 'decrement':
          console.log('decrement')
          return {
            count:state.count--
          }
          case 'double':
            console.log('double')
            return {
              count:state.count*2
            }
          case 'addNum':
            return {
              count:state.count += Number(action.payload)
            }
          case 'default':
            return
    }
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">

      <Count state={state} dispatch={dispatch} />
      <FirstProvider>
        {/* <Comp1 />
        <Comp2 /> */}
      </FirstProvider>
    </div>
  );
}

export default App;
