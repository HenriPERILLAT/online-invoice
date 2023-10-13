import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function DropDown({ data }) {
    const [selectedService, setSelectedService] = useState("");

    useEffect(() => {
        console.log(selectedService);
    }, [selectedService]);

    const handleChange = (event) => {
        setSelectedService(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedService}
                    label="Age"
                    onChange={handleChange}
                >

                    {data.map(el => <MenuItem key={el._id} value={el.ACTIVITE}>{el.ACTIVITE}</MenuItem>)}


                </Select>
            </FormControl>
        </Box>
    )
}
