import { DropDown } from './components/DropDown';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/invoiceData')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <DropDown data={data} />
  );
}

export default App
