import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Form from './components/Form';


class App extends Component {

  state = {
    users:[]
  }

  handleAdd = (newUser) => {
    this.setState({
      users:[...this.state.users,newUser]
    })
  }
  
  render(){
    return (
      <div className="App">
        <Form handleAdd={this.handleAdd} />
      </div>
    )
  }
}

export default App;
