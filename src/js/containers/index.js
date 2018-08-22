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
                List...
            </div>
        )
    }
}

const mapStateToProps = (users) => ({users});

export default connect(mapStateToProps, { getUsers })(ListContainer);
