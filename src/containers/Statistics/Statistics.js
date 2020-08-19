import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCountiesList} from "../../store/actions/actions";

import './Statisctics.css';

class Statistics extends Component {

    state = {
        name: ''
    };

    componentDidMount() {
        this.props.getCountiesList();
    }

    changeCountryHandler = event => {
        this.setState({
            name: event.target.value
        })
    };

    render() {
        return (
            this.props.list ?
                <div className={'main'}>
                    <select name="select-country" id="selectCountry" onChange={this.changeCountryHandler}>
                        {this.props.list.map((country, index) => {
                            return <option key={index} value={country.slug}>{country.country}</option>
                        })}
                    </select>
                </div> : null
        );
    }
}

const mapStateToProps = state => ({
    countryData: state.countryData,
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    getCountiesList: () => dispatch(getCountiesList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
