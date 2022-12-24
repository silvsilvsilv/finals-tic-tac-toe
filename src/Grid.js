import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export default function SetGridSize() {
  const [grid, setGrid] = React.useState();
  
  const handleGrid = (event) => {
    setGrid(event.target.value);
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
              value={grid}
              label="Rows"
              onChange={handleGrid} 
              defaultValue = {'row3'}
            >
              <MenuItem value={'row3'} selected >3</MenuItem>
              <MenuItem value={'row4'}>4</MenuItem>
              <MenuItem value={'row5'}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
          <InputLabel id="select-col-label">Columns</InputLabel>
            <Select 
              labelId="select-col-label"
              id="select=col"
              value={grid}
              label="Columns"
              onChange={handleGrid} 
              defaultValue = {'col3'}
            >
              <MenuItem value={'col3'}>3</MenuItem>
              <MenuItem value={'col4'}>4</MenuItem>
              <MenuItem value={'col5'}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
