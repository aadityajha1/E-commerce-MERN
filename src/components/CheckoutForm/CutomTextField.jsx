import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        required={required}
        label={label}
      />
    </Grid>
  );
};

export default FormInput;
