import { DropDown } from './components/DropDown';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import InvoiceForm from './components/InvoiceForm';





function App() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/invoiceData')
      .then(response => setServices(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {/* <DropDown services={services} /> */}
      <InvoiceForm services={services} />
    </>
  );
}

export default App
