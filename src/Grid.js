import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { Alert, TextField } from '@mui/material';



export default function SetGridSize({row, setRow, column, setColumn}) {
  const [rowError,setRowError] = React.useState(false);
  const [colError,setColError] = React.useState(false);
  
  const handleRow = (event) => {
    const n = String(event.target.value).split('');
    if(isNaN(event.target.value)){setRowError(true);setRow(n[0]=0)}
    else{setRowError(false); setRow( Number(n[0]) )}
  };

  const handleCol = (event) => {
    const n = event.target.value.split('');
    if(isNaN(event.target.value)){setColError(true);setColumn(n[0]=0)}
    else{setColError(false); setColumn( Number(n[0]) )}
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Next, determine your grid size 
      </Typography>

      <Grid container spacing={3} padding = "20px">
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
            label='Row'
            variant='outlined'
            value={row}
            error={rowError}
            helperText={(rowError)?'Input numbers only':''}
            onInput={handleRow}></TextField>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
          <TextField
            label='Column'
            variant='outlined'
            value={column}
            error={colError}
            helperText={(colError)?'Input numbers only':''}
            onInput={handleCol}></TextField>
          </FormControl>
        </Grid>

      </Grid><Alert severity='error'>a</Alert>
    </React.Fragment>
  );
}
