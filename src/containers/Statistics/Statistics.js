import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {getCountiesList, getOneCountryData} from "../../store/actions/actions";

import './Statisctics.css';
import Backdrop from "../../components/UI/Backdrop/Backdrop";

class Statistics extends Component {

    state = {
        name: 'kyrgyzstan',
        filteredData: ''
    };

    componentDidMount() {
        this.props.getCountiesList();
        const data = JSON.parse(localStorage.getItem('data'));
        if (!data.countryData) {
            this.props.getOneCountryData(this.state.name);
        } else {
            this.setState({
                name: data.countryData[0].Country
            })
        }
    }

    changeCountryHandler = async event => {
        const name = event.target.value;
        await this.setState({
            name
        });
        this.props.getOneCountryData(this.state.name)
    };

    render() {
        return (
            this.props.list ?
                <div className={'countries'}>
                    <select
                        className={'countries_select'}
                        name="select-country"
                        id="selectCountry"
                        value={this.state.name}
                        onChange={this.changeCountryHandler}>
                        {this.props.list.map((country, index) => {
                            return <option key={index} value={country.slug}>{country.country}</option>
                        })}
                    </select>

                    <div className={'statistics'}>
                        {this.props.countryData ?
                            <div className={'statistics__days'}>
                                {this.props.countryData.map((country, index) => {
                                    return (
                                        <div key={index} className={'statistics__day'}>
                                            <div className={'day__date'}>
                                                <h3>{moment(country.Date).format('D MMMM')}</h3>
                                            </div>
                                            <div className={'day__numbers'}>
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

                        {this.props.topRecovered ?
                            <div className={'statistics__top-day'}>
                                <h5>Top recovered cases</h5>
                                <h2>{this.props.topRecovered.Recovered}</h2>
                                <p>{moment(this.props.topRecovered.Date).format('D MMMM')}</p>
                            </div>
                            : null
                        }
                    </div>
                </div> : <Backdrop/>
        );
    }
}

const mapStateToProps = state => ({
    countryData: state.countryData,
    list: state.list,
    topRecovered: state.topRecovered
});

const mapDispatchToProps = dispatch => ({
    getCountiesList: () => dispatch(getCountiesList()),
    getOneCountryData: (slug) => dispatch(getOneCountryData(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
