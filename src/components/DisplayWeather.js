import React from "react";
import WeatherCard from "./WeatherCard";

const DisplayWeather = (props) => {

    const WeatherList = props.weather.map((weatherItem) => {
        return <WeatherCard weatherItem={weatherItem} />;
    });

    return (
        <div className="ui celled list">
            <h3 style={{ marginTop: "30px" }}>Result</h3>
            {WeatherList.length > 0 ? WeatherList : "No data available"}
        </div>
    );
};

export default DisplayWeather;