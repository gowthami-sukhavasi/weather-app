import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchCity from "./SearchCity";
import DisplayWeather from "./DisplayWeather";
import api from "../api/weatherData";
import './App.css';

function App() {

  const [weather, setWeather] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveWeather = async () => {
    const response = await api.get("/");
    return response.data;
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newWeatherData = weather.filter((weatherItem) => {
        return Object.values(weatherItem)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newWeatherData);
    }
    else {
      setSearchResults(weather);
    }
  };

  useEffect(() => {
    const getAllWeatherData = async () => {
      const allWeatherData = await retrieveWeather();
      if (allWeatherData) setWeather(allWeatherData);
    };

    getAllWeatherData();
  }, []);

  return (
    <div className="ui container">
      <Header />
      <SearchCity term={searchTerm} searchKeyword={searchHandler} />
      <DisplayWeather weather={searchTerm.length < 1 ? weather : searchResults} />
    </div>
  );
}

export default App;
