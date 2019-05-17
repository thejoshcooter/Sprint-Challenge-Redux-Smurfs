import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            age: '',
            height: '',
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addSmurf = event => {
        event.preventDefault();
        const { name, age, height } = this.state;
        let newSmurf = {name, age, height}
        this.props.addSmurf(newSmurf)
        this.setState(() => ({
            name: '',
            age: '',
            height: ''
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}><h2>Add Smurf</h2> 
                    <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name'></input>
                    <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age'></input>
                    <input name='height' value={this.state.height} onChange={this.changeHandler} type='text' placeholder='Height'></input>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null, { addSmurf })(Form);