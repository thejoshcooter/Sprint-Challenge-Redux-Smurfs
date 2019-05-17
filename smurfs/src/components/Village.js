import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

class Village extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            this.props.fetching ? 
            <div>Gathering Smurfs</div> :
            <div><h1>Smurf Village</h1>
                {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetching
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(Village);