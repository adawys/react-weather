import React from 'react';
import './Style.css';

const ViewWeather = props => {
  const {
    humidity,
    name,
    width,
    length,
    temp,
    pressure,
    wind,
    tempMin,
    tempMax,
    error,
    icon,
    description,
  } = props.weather;

  let content = null;
  let iconWether = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  let imageText = `${description}`;
  if (!error && name) {
    content = (
      <div className="container container-padding ">
        <div className="card card-body text-center bg-gradient-success ">
          <h1 className="text-capitalize display-3">
            <strong className="neon">{name}</strong>
          </h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 container-padding">
              <img className="resize" src={iconWether} alt={imageText} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 container-padding">
              <h2>
                <abbr title="Temeratura">
                  <i className="fas fa-thermometer-half"></i>
                </abbr>
                {temp} &#176;C
              </h2>
              <h4>
                <abbr title="Tempertaura minimalna">
                  <i className="fas fa-temperature-low"></i>
                </abbr>
                <span className="text-primary">{tempMin}&#176;C </span>

                <abbr title="Temperatura maksymalna">
                  <i className="fas fa-temperature-high"></i>
                </abbr>
                <span className="text-danger">{tempMax}&#176;C</span>
              </h4>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 container-padding">
              <div className="flex-column">
                <div><abbr title="Ciśnienie">
                  <i className="fas fa-chart-line"></i>
                </abbr>{' '}
                {pressure} hPa{' '}</div>
                <div><abbr title="Wilgotność">
                  <i className="fas fa-water"></i>
                </abbr>{' '}
                {humidity}%{' '}</div>
                <div><abbr title="Siła wiatru">
                  <i className="fas fa-wind"></i>
                </abbr>{' '}
                {wind} m/s</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-12 container-padding">
              <p>
                <abbr title="Współrzędne geograficzne">
                  <i className="fas fa-map-marker-alt"></i>
                </abbr>
                {width}&#176; {length}&#176;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1>{error ? `brak danych` : content}</h1>
      </div>
    </div>
  );
};

export default ViewWeather;
