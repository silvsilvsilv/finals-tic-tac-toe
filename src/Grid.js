import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


export default function SetGridSize({row, setRow, column, setColumn}) {
  
  
  const handleRow = (event) => {
    setRow(event.target.value);
  };

  const handleCol = (event) => {
    setColumn(event.target.value);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Next, determine your grid size 
      </Typography>

      <Grid container spacing={3} padding = "20px">
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
          <InputLabel id="select-row-label">Rows</InputLabel>
            <Select 
              labelId="select-row-label"
              id="select-row"
              value={row}
              label="Rows"
              onChange={handleRow} 
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
          <InputLabel id="select-col-label">Columns</InputLabel>
            <Select 
              labelId="select-col-label"
              id="select=col"
              value={column}
              label="Columns"
              onChange={handleCol} 
              defaultValue = {'col3'}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
