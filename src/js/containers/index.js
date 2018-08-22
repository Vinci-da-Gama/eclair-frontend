import React, { Component } from 'react';
import { connect } from 'react-redux';

import brandImg from '../../img/brand.png';
import { getUsers } from '../actions';

class ListContainer extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    render () {
        return (
            <div>
                <div className="card bg-light centered-container">
                    <div className="card-header text-center">
                        <img src={brandImg} className="img-fluid" alt="brand" />
                        <p className="my-2 text-uppercase">USER ID: 1</p>
                    </div>
                    <div className="card-body scroll-content">
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                        <p>a...</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (users) => ({users});

export default connect(mapStateToProps, { getUsers })(ListContainer);
