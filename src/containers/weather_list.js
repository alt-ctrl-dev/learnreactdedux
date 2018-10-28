import  React, {Component} from 'react';
import {connect} from 'react-redux';
import LineChart from "../components/line_chart";
import GoogleMap from '../components/google_map';
import { showSnack } from 'react-redux-snackbar';

class WeatherList extends Component{

    renderWeather(cityData){
        if(!cityData || cityData.error){
            alert(cityData.message);
            return (null);
        }
        let {city,list} = cityData;
        let name = city.name;
        let temps = list.map(w => w.main.temp);
        let humids = list.map(w => w.main.humidity);
        let press = list.map(w => w.main.pressure);
        let {lon,lat} = city.coord;
        
        return(
            <tr key={name+city.country}>
                <td><GoogleMap lon={lon} lat={lat} /> <b>{name}, {city.country}</b></td>
                <td><LineChart limit={5} data={temps} color={"red"} units={"˚C"}/></td>
                <td><LineChart data={press} color={"green"} units={"hPa"}/></td>
                <td><LineChart data={humids} color={"blue"} units={"%"}/></td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>City</th>
                    <th>Temperature (˚C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}



function mapStateToProps({weather}){
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);