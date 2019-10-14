import React, {Component} from 'react';
import axios from "axios"
import "./WeatherComponent/Style.css";
import SearchCity from './WeatherComponent/SearchCity';
import ViewWeather from './WeatherComponent/ViewWeather';
import TitleApp from './WeatherComponent/titleApp'
import FooterApp from './WeatherComponent/FooterApp'

const IdWeather = "2edd9be58dc3229eb46cb071f4e62632";


class App extends Component {
  state = {
    value: '',
    humidity: '',
    name: '',
    length: '',
    width: '',
    temp: '',
    tempMin: '',
    tempMax: '',
    pressure: '',
    wind: '',
    error: false,
    isLoading: false,
    icon: '',
    description: '',
  };

  InputChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  
  
  getCityWeather = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    })
    const CityApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${IdWeather}&units=metric`;
    axios.get(CityApiUrl)
        .then(({data}) => {
          this.setState(weatherState => ({
                humidity: data.main.humidity,
                name: weatherState.value,
                length: data.coord.lon,
                width: data.coord.lat,
                temp: data.main.temp,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                icon: data.weather[0].icon,
                description: data.weather[0].description,
                error: false,
                isLoading: false,
              }));
              console.log(data.weather[0].icon)
        })
        .catch(error => {
            this.setState({
              error: true,
              isLoading: false,
            })
          });
  };
  render() {

    let loadingPage;

    if (this.state.isLoading) {
        loadingPage = (
          <div className="container">
            <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 " role="status">
              <span className="sr-only">Loading...</span>
              </div>
          </div>
          </div>
          
        )
    } else {
        loadingPage = (
        <ViewWeather weather={this.state} />
        );
    }


    return (
      <>
        <div>
        
        <TitleApp/> 
        
        <div className="background"> 
        <SearchCity
          value={this.state.value}
          changeInput={this.InputChange}
          send={this.getCityWeather}
        />
        {loadingPage}
        </div>
        <FooterApp /> 
        </div>
      </>
    );
  }
}

export default App;
