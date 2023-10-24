import Select from "react-select";
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Input } from '@mui/material';


export default function InvoiceForm({ services }) {
  const [prestations, setPrestations] = useState([]);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      amount: 0,
      select: null
    }
  });
  useEffect(() => {
    console.log(prestations);
  }, [prestations]);

  const onSubmit = data => {
    setPrestations((prevPrestations) => [...prevPrestations, data]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="amount"
        control={control}
        render={({ field }) => <Input type="number" {...field} />}
      />
      <Controller
        name="select"
        control={control}
        render={({ field }) => <Select
          {...field}
          options={services.map(service => ({ value: service.activite, label: service.activite }))}
          value={field.value || null}
        />}
      />
      <input type="submit" />
    </form>
  );
};

