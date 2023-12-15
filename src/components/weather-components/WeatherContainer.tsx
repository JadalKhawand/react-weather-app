import React from 'react'
import LocationInfo from './LocationInfo'
import WeatherInfo from './WeatherInfo'

function WeatherContainer({searchInput}: {searchInput:string}) {
  const WeatherContainerStyles = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    gap: '40px',
    justifyContent: 'center'
    
  }
  return (
    <div style={WeatherContainerStyles}>
      <LocationInfo searchInput={searchInput}/>
      <WeatherInfo/>
    </div>
  )
}

export default WeatherContainer