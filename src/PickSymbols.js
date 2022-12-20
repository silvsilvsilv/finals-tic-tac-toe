import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


export default function PickSymbols() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Player 1 pick the symbol you like, so that we can begin!  
      </Typography>

      <Grid container spacing={3} padding = "20px">
        <Grid item xs={12} >
        <FormControl fullWidth>
        <InputLabel id="select-symb-label">Symbol</InputLabel>
        <Select 
          labelId="select-symbol"
          id="select-symb"
          label="Symbol"
          defaultValue = {'X'}
        >
          <MenuItem value={'X'} selected >X</MenuItem>
          <MenuItem value={'O'} selected >O</MenuItem>
        </Select>
        </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
