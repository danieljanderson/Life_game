//import React, { useState } from 'react' why does this not work;
// and this does
import * as React from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/lab';
import MenuItem from '@mui/material/MenuItem';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import WcIcon from '@mui/icons-material/Wc';
import IconButton from '@mui/material/IconButton';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

function NewPlayerForm() {
  const [value, setValue] = React.useState(null);
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Box component="form" noValidate>
      <FormControl variant="standard">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* Start of First Name input*/}
          <Grid item md={8}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="First-Name"
                label="First Name"
                variant="standard"
              />
            </Box>
          </Grid>
          {/* End of First Name input */}

          {/* Start of Last Name input */}
          <Grid>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="Last-Name" label="Last Name" variant="standard" />
            </Box>
          </Grid>
          {/* End of Last Name input */}
          {/* This is for the start of the birthday date picker */}
          <Grid>
            <DatePicker
              label="Birthday"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          {/* end of birthday date picker */}
          {/* Start of Gender picker */}
          <Grid item md={3}>
            <Box>
              <TextField
                label="Gender"
                select
                id="Gender-Select"
                value={gender}
                sx={{ width: '100%' }}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WcIcon></WcIcon>
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
              </TextField>
            </Box>
          </Grid>
          {/* End of Gender Picker */}
          {/* Start of Location */}

          <Grid item md={12}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LocationCityIcon />
              <TextField id="Location" label="Location" variant="standard" />
            </Box>
          </Grid>
          {/* End of Location */}
          {/* Strart of Hobbies Input */}
          <Grid item md={5}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                id="Hobbies"
                label="Please enter a Hobby"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SportsTennisIcon></SportsTennisIcon>
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton aria-label="Add an Hobby">
                <ControlPointIcon></ControlPointIcon>
              </IconButton>
            </Box>
          </Grid>
          {/* End of Hobbies Input */}
        </Grid>
      </FormControl>
    </Box>
  );
}
export default NewPlayerForm;
