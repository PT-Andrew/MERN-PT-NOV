import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import OneMovie from './components/OneMovie';
import UpdateForm from './components/UpdateForm';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/movielist' element={<MovieList />} />
          <Route path='/onemovie/:id' element={<OneMovie />} />
          <Route path='/editmovie/:id' element={<UpdateForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
