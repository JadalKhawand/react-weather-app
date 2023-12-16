import React, { useState,useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherContainer from './components/weather-components/WeatherContainer';

function App() {

  const [searchInput, setSearchInput] = useState('')

  const [apiSearch, setapiSearch] = useState('')

  const [response, setResponse] = useState({})

  const slides = [
    {url: "./1.jpeg", title: '1'},
    {url: "./2.jpg", title: '2'},
    {url: "./3.jpg", title: '3'},
  ]


  function searchChangeHandler(event:any){
    setSearchInput(event.target.value)
  }
  function apiSearchHandler(event:any){
    setapiSearch(event.target.value)
  }
  
  
  const appStyles = {
    
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    gap: '150px'
  }

  
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
useEffect(() => {
  sendRequestToBackend();
}, []);

console.log(response)
  let rain = response?.list?.[0]?.pop || 0;
  console.log(rain)
  let currentIndex = 0;
  if(rain<0.5)
    currentIndex = 1;
  else
    currentIndex =2;
  const imageStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  const combinedStyles = {
    ...imageStyles,
    ...appStyles,
  };


  return (
      <div style={combinedStyles} className="App">
        <Search apiInput={apiSearch} searchInput={searchInput} apiSearchHandler = {apiSearchHandler} searchChangeHandler={searchChangeHandler} sendRequestToBackend={sendRequestToBackend} />
        {/* @ts-ignore */}
        
        {searchInput ? <WeatherContainer response = {response} searchInput={searchInput} />:"Please enter a city"}

<div>
  {/* @ts-ignore */}
  {/* {response['city'] && JSON.stringify(response['city'])} */}
</div>

      </div>

    
  );
}

export default App;
