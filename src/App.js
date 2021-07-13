import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent';
const { REACT_APP_API_KEY } = process.env;


export default function App() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [countryInfo, setCountryInfo] = useState({})

  useEffect(() => {

    fetch(`https://geo.ipify.org/api/v1?apiKey=${REACT_APP_API_KEY}&ipAddress`, {
      method: 'get'
    })
      .then((res) => res.json())
      .then(async (data) => {
        setUserData(data)
        const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${data.location.country}`);
        const result_1 = await res.json();
        setCountryInfo(result_1);
        setIsLoading(false);
  })
}, [])


  return (
    <div className="App">
      {isLoading ?
        (<h1>LOADING ...</h1>)
        :
        (
          <div>
          <div className="main">
            <h5>Location: {countryInfo.name}</h5>
            <h5> IP: {userData.ip}</h5>
            </div>
            <div className="card-1"><CardComponent fetchedData={userData} countryInfo={countryInfo}/></div>
          </div>
        )}

    </div>
  );
}

  
