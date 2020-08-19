import React, {Component} from 'react';
import {connect} from 'react-redux';

class Statistics extends Component {

    state = {

    };

    render() {
        return (
            <div>
                HELLO
            </div>
        );
    }
}

const mapStateToProps = state => ({
    countryData: state.countryData
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
