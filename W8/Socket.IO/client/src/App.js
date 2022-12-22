import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Form from './components/Form';
import MovieList from './components/MovieList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import OneMovie from './components/OneMovie';
import UpdateForm from './components/UpdateForm';
import Register from './components/Register';
import Login from './components/Login';
import {io} from 'socket.io-client'

function App() {

  // sets up connection to server with socket.io
  const [socket] = useState(()=>io(':8000'))

  useEffect(()=>{
    socket.on('connection',()=>{
      console.log('connected to server')
    })
    return () => socket.disconnect(true);
  },[])

  return (
    <div className="App">
      {/* <Form /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/movielist' element={<MovieList socket={socket} />} />
          <Route path='/onemovie/:id' element={<OneMovie socket={socket} />} />
          <Route path='/editmovie/:id' element={<UpdateForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
