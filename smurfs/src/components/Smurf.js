import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";

class Smurf extends Component {
    constructor() {
        super();
    }

    render() {
        const { name, age, height, id } = this.props.smurf
        return (
            <div>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Height: {height}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {})(Smurf);