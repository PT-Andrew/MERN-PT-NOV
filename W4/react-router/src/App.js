import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import {useState} from 'react'

function App() {

  const [state,setState] = useState([
    {
      id:1,
      name:"Person 1",
      age:"whatever",
      somethingElse:"blah"
    },
    {
      id:2,
      name:"Person 2",
      age:"who knows",
      somethingElse:"ok"
    },
    {
      id:3,
      name:"Person 3",
      age:"uhhhh",
      somethingElse:"yes ok"
    },
  ])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home state={state} setState={setState} />} />
          <Route path="/about" element={<About />} />
          {/* Params */}
          <Route path="/about/:num" element={<About state={state} setState={setState} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
