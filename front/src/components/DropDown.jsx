import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NumberOfUnits from "./NumberOfUnits";
import TextField from '@mui/material/TextField';
import Invoice from './Invoice';



export function DropDown({ services }) {
    const [selectedService, setSelectedService] = useState("");
    const [price, SetPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const invoiceData = {
        totalAmount: amount,
    }
    useEffect(() => {
        console.log(invoiceData.totalAmount)
    }, [selectedService, price, amount]);

    const handleChange = (event) => {
        setSelectedService(event.target.value);
        SetPrice(event.target.value.prix);
    };
    const handleAmount = (evt) => {
        setAmount(price * evt.target.value);

    }
    useEffect(() => {

    }, [price, amount]);


    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Service</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedService}
                        label="Service"
                        onChange={handleChange}
                    >

                        {services.map(el => <MenuItem key={el._id} value={el}>{el.activite.toLowerCase()}</MenuItem>)}


                    </Select>
                    <TextField
                        id="outlined-number"
                        label="Nombre d'unités"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleAmount}
                    />

                    <p>prix:{amount.toFixed(2)}</p>
                </FormControl>
            </Box>
            <Invoice invoiceData={invoiceData} />
        </>
    )
}
