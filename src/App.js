import './App.css';
import { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyMap from "./MyMap"
const {REACT_APP_API_KEY} = process.env;

export default function App() {
  const [userData, setUserData] = useState({});  

  
  useEffect(()=> {
      fetch(`https://geo.ipify.org/api/v1?apiKey=${REACT_APP_API_KEY}&ipAddress`)
        .then((res) => res.json())
        .then((data) => {
          console.log( data)
          setUserData(data)
        });
  }, [])


  return (
    <div className="App">
      <MyNavbar />
      <h3>your IP is: {userData.ip}</h3>
      
      <MyMap/>
    </div>
  );
}


