import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';


export default function PickSymbols({p1symb, setP1Symb, p2symb, setP2Symb}) {
  
  
  const handleP1Symb = (event) => {
    setP1Symb(event.target.value);
  };

  const handleP2Symb = (event) => {
    setP2Symb(event.target.value);
  };

  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Players set your respective symbols so that we can begin!  
      </Typography>

      <Grid container spacing={3} padding = "20px">
        <Grid item xs={12} >
          <FormControl fullWidth>
                <TextField 
                label="Player 1" 
                variant="outlined" 
                value={p1symb} 
                onInput={handleP1Symb}></TextField>
                <br/>
                <TextField 
                label="Player 2" 
                variant='outlined'
                value={p2symb}
                onInput={handleP2Symb}></TextField>
              
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
