import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherContainer from './components/weather-components/WeatherContainer';

function App() {

  const [searchInput, setSearchInput] = useState('')




  function searchChangeHandler(event:any){
    setSearchInput(event.target.value)
  }
  const appStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    gap: '50px'
  }
  function sendRequestToBackend(){
    // takes input from search state

    //  constructs a URL
    const requestURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchInput}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`

    // fetch new data
    fetch(requestURL).then(function(response){return response.json()}).then(function(response){console.log(response)})
  }

  return (
      <div style={appStyles} className="App">
        <Search searchInput={searchInput} searchChangeHandler={searchChangeHandler} sendRequestToBackend={sendRequestToBackend} />
        <WeatherContainer searchInput={searchInput} />
      </div>
    
  );
}

export default App;
