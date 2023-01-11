import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';


export default function PickSymbols({p1symb, setP1Symb, p2symb, setP2Symb}) {
  
  
  const handleP1Symb = (event) => {
    const p1 = event.target.value.split('');
    setP1Symb(p1[0]);
  };

  const handleP2Symb = (event) => {
    const p2 = event.target.value.split('');
    setP2Symb(p2[0]);
  };

  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Players set your respective symbols so that we can begin!  
      </Typography>

      <Grid container spacing={3} padding = "20px">
        <Grid item xs={12} md={6}>
          <FormControl >
                <TextField 
                label="Player 1" 
                variant="outlined" 
                value={p1symb} 
                onInput={handleP1Symb}></TextField>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>    
          <FormControl>
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
