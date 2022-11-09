import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {useState} from 'react'

function App() {

  const [list,setList] = useState([
    {
        id:1,
        name:"person 1",
        city:"place 1"
    },
    {
        id:2,
        name:"person 2",
        city:"place 2"
    },
    {
        id:3,
        name:"person 3",
        city:"place 3"
    },
])

  return (
    <div className="App d-flex p-5 bg-warning">
      <h1 className="">App.JS</h1>
      {/* children, and siblings */}
      <Form list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
