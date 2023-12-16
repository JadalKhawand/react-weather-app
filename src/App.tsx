import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherContainer from './components/weather-components/WeatherContainer';

function App() {

  const [searchInput, setSearchInput] = useState('')

  const [response, setResponse] = useState({})


  function searchChangeHandler(event:any){
    setSearchInput(event.target.value)
  }
  
  const imageStyles = {
    backgroundImage: `url('./1.jpeg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  
  const appStyles = {
    
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    gap: '150px'
  }

  const combinedStyles = {
    ...imageStyles,
    ...appStyles,
  };
  async function sendRequestToBackend() {
    // takes input from search state

    // constructs a URL
    const requestURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchInput}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`;
    console.log("hello");

    try {
        // fetch new data
        const response = await fetch(requestURL);
        const responseData = await response.json();
        console.log(responseData);
        setResponse(responseData);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error as needed
    }
}


  return (
      <div style={combinedStyles} className="App">
        <Search searchInput={searchInput} searchChangeHandler={searchChangeHandler} sendRequestToBackend={sendRequestToBackend} />
        {/* @ts-ignore */}
        <WeatherContainer response = {response} searchInput={searchInput} />

<div>
  {/* @ts-ignore */}
  {response['city'] && JSON.stringify(response['city'])}
</div>

      </div>

    
  );
}

export default App;
