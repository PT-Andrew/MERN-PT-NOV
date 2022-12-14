import { render } from '@testing-library/react'
import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:''
        }
        console.log("Constructor")
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAdd(this.state)
    }

    componentDidMount(){
        console.log("Component did mount")
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    render(){
        console.log("Render")
        return(
            <div>
                <form className="col-6 mx-auto" onSubmit={this.handleSubmit}>
                    <label className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control" onChange={this.handleChange} />
                    <label className="form-label">Email:</label>
                    <input type="text" name="email" className="form-control" onChange={this.handleChange} />
                    <label className="form-label">Password:</label>
                    <input type="text" name="password" className="form-control" onChange={this.handleChange} />
                    <button className="btn btn-info mt-3">Add User</button>
                </form>
            </div>
        )
    };
}

export default Form;