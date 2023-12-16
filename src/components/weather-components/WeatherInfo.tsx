import { cardStyle } from "../../shared/constants";

const divStyles = {
  display: 'flex'
};

function WeatherInfo({
  response,
}: {
  response: {list?: {feels_like?: { day?: number };weather?: { main?: string; description?: string }[];
    }[];
  };
}) {
// @ts-ignore
  let unix_timestamp1 = response?.list?.[0]?.sunrise;

  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds
  var date = new Date(unix_timestamp1 * 1000);
  
  // Hours part from the timestamp
  var hours = date.getHours();
  
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  
  
  
  // Will display time in 10:30:23 format
  var formattedTimeRise = hours + ':' + minutes.substr(-2) 
  
  // @ts-ignore
  let unix_timestamp2 = response?.list?.[0]?.sunset;

  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds
  var date = new Date(unix_timestamp2 * 1000);
  
  // Hours part from the timestamp
  var hours = date.getHours();
  
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  
  
  
  // Will display time in 10:30:23 format
  var formattedTimeSet = hours + ':' + minutes.substr(-2) 
  
  

  
  const dayData = response?.list?.[0];

  if (!dayData) {
    return <div>No weather data available</div>;
  }

  const { feels_like, weather } = dayData;
  const degree = feels_like?.day ?? 0;

  function emoji(degree: number) {
    return degree < 0 ? "❄️" : degree < 10 ? "🌫️" : "🌤️";
  }

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', gap: '45px', padding:'10px'}} className="firstrow">
        <p>
          {emoji(degree)} {`${degree} °C`}
        </p>
        <p>{`${weather?.[0]?.main}, ${weather?.[0]?.description} `}</p>
      </div>
      <div className="secondrow" style={{display:'flex', justifyContent: 'space-between',padding:'10px'}}>
        <p>
        🌅 {formattedTimeRise}
        </p>
        <p>
        🌇 {formattedTimeSet}
        </p>
      </div>
      <div className="thirdrow">
        <p>hello</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
