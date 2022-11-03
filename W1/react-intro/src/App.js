import logo from './logo.svg';
import './App.css';
import Component from './components/Component';

// Discussion Questions!!

function App() {
  return (
    <div className="App my-class">
      <Component message={'this is from props'} message2={'message2'} />
    </div>
  );
}

export default App;


// Node --> npm (node package manager) --> npx create-react-app