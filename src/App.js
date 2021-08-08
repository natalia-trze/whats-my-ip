import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent';
import Box from '@material-ui/core/Box';
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
        (<h1 style={{ padding: "50vh" }}>LOADING ...</h1>)
        :
        (
          <div>

            <Box className="main" color="text.primary">
              <p>You are in  {countryInfo.name}</p>
              <p> IP: {userData.ip}</p>
            </Box>

            <div className="card-1"><CardComponent fetchedData={userData} countryInfo={countryInfo} /></div>
          </div>
        )}

    </div>
  );
}


