import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {getCountiesList, getOneCountryData} from "../../store/actions/actions";

import './Statisctics.css';

class Statistics extends Component {

    state = {
        name: ''
    };

    componentDidMount() {
        this.props.getCountiesList();
    }

    changeCountryHandler = event => {
        const name = event.target.value;
        this.setState({
            name
        });
        this.props.getOneCountryData(name)
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


                    {this.props.countryData ?
                        <div>
                            {this.props.countryData.map((country, index) => {
                                console.log(country);
                                return (
                                    <div key={index}>
                                        <div>
                                            <h3>{moment(country.Date).format('D MMMM')}</h3>
                                        </div>
                                        <div>
                                            <div>
                                                <p>Active <span>{country.Active}</span></p>
                                                <p>Confirmed <span>{country.Confirmed}</span></p>
                                            </div>
                                            <div>
                                                <p>Deaths <span>{country.Deaths}</span></p>
                                                <p>Recovered <span>{country.Recovered}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    : null}
                </div> : null
        );
    }
}

const mapStateToProps = state => ({
    countryData: state.countryData,
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    getCountiesList: () => dispatch(getCountiesList()),
    getOneCountryData: (slug) => dispatch(getOneCountryData(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
