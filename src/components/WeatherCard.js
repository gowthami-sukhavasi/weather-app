import React from "react";

const WeatherCard = (props) => {
    const {
        city,
        state,
        currentTemp,
        weather,
        wind,
        relativeHumidity,
        visibility,
        dewPoint,
        pressure,
    } = props.weatherItem;

    return (
        <div class="ui card">
            <div class="content">
                <div class="header">{city}</div>
                <div class="meta">{state}</div>
                <div class="description">
                    <table>
                        <tr>
                            <td>Temperature</td>
                            <td>{currentTemp}</td>
                        </tr>
                        <tr>
                            <td>Weather</td>
                            <td>{weather}</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>{wind}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{relativeHumidity}</td>
                        </tr>
                        <tr>
                            <td>Visibility</td>
                            <td>{visibility}</td>
                        </tr>
                        <tr>
                            <td>Dew Point</td>
                            <td>{dewPoint}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{pressure}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
