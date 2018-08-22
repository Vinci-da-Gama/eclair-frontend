import React, { Component } from 'react';
import { connect } from 'react-redux';

import brandImg from '../../img/brand.png';
import { getUsers } from '../actions';
import { itemComponent } from '../components/list-item';

class ListContainer extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    render () {
        if (!this.props.users || this.props.users.length === 0) {
			return (
				<div className="centered-container">Loading...</div>
			);
		}
        return (
            <div>
                <div className="card bg-light centered-container">
                    <div className="card-header text-center">
                        <img src={brandImg} className="img-fluid" alt="brand" />
                        <p className="my-2 text-uppercase">USER ID: 1</p>
                    </div>
                    <div className="card-body scroll-content">
                        {this.props.users.map(itemComponent)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({users: state.users.users});

export default connect(mapStateToProps, { getUsers })(ListContainer);
