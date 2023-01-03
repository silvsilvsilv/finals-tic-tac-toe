import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Gamemode({mode, setMode}) { // destructure the props directly for clarity

  // Implement `onChange` func from https://mui.com/material-ui/api/select/
  const handleMode = (event) => {
    setMode(event.target.value);
  };

  return (
    
    <React.Fragment>
      <Typography variant='h6'>
        Before we begin you must first set your Game mode
      </Typography>
      
      <Typography gutterBottom padding="15px">
        Please select among the following game modes: 
      </Typography>

      <Box sx={ { minWidth: 120 } }>
        <FormControl fullWidth>
          <InputLabel id="select-mode-label">Mode</InputLabel>
            <Select
              labelId="select-mode-label"
              id="select-mode"
              value={mode}
              label="Mode"
              onChange={handleMode}
            >
              <MenuItem value='pvp'>Player vs Player</MenuItem>
              <MenuItem value='pvc'>Player vs Computer</MenuItem>
              <MenuItem value='cvc'>Computer vs Computer</MenuItem>
            </Select>
        </FormControl>
    </Box>

    </React.Fragment>
  );
}
