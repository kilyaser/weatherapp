import React, {useState} from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setReady] = useState(false);

  React.useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=12c14c8d49d63968b9f9fa5f4e8ff7af')
    .then(result => result.json())
    .then(jsonresult => {
      setTemp(jsonresult.main.temp);
      setDesc(jsonresult.weather[0].description);
      setIcon(jsonresult.weather[0].icon);
      setReady(true);
    })
    .catch(err => console.log(err))
  }, [])

  if(isReady) {
    return (
    <div className="App">
      <p>Tempreture: {temp}</p>
      <p>Description: {desc}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"/>
    </div>
  );
  } else {
    return <div>Loading...</div>
  }
  
}

export default App;
