import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/movielist' element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
