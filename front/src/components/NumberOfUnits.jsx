// import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
export default function NumberOfUnits() {
    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <TextField
                    id="outlined-number"
                    label="Nombre d'unités"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </div>


        </Box>
    );
}