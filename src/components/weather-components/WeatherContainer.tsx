import React from 'react'
import LocationInfo from './LocationInfo'
import WeatherInfo from './WeatherInfo'

function WeatherContainer({searchInput , response}: {searchInput:string, response:object}) {
  const WeatherContainerStyles = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    gap: '40px',
    justifyContent: 'center'
    
  }
  return (
    <div style={WeatherContainerStyles}>
      {/* @ts-ignore */}
    <LocationInfo response = {response} searchInput={searchInput}/>
      <WeatherInfo/>
    </div>
  )
}

export default WeatherContainer