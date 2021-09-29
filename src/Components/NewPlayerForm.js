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

function NewPlayerForm() {
  const [value, setValue] = React.useState(null);
  return (
    <Box component="form" noValidate>
      <FormControl variant="standard">
        <Grid>
          {/* Start of First Name input*/}
          <Grid>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="First-Name"
                label="First Name"
                variant="standard"
              />
            </Box>
            {/* <TextField 
            
              id="First Name"
              label="First Name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle
                      
                    />
                  </InputAdornment>
                ),
              }}
            />
            */}
          </Grid>
          {/* End of Name input */}
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
        </Grid>
      </FormControl>
    </Box>
  );
}
export default NewPlayerForm;
