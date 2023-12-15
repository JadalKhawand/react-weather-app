import { cardStyle } from "../../shared/constants"

function LocationInfo({searchInput} : {searchInput:string}) {
  
  return (
    <div style={cardStyle}>
      <h2>{searchInput}</h2>
      <p>Friday 15 December</p>
      <p>Population: 1,000,000</p>
    </div>
  )
}

export default LocationInfo