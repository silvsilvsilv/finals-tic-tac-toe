import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Gamemode from './Gamemode';
import SetGridSize from './Grid';
// import Review from './Review';
import PickSymbols from './PickSymbols';
import Game from './Game';
import ReceivingComponent from './test';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Tic Tac Toe Finals Project | John Leonil Silva '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Game mode', 'Grid size', 'Symbols'];

function getStepContent(step) {
  const pull_data = (data) =>{
    console.log(data);
  }
  
  switch (step) {
    case 0:
      return <Gamemode func={pull_data}/>;
    case 1:
      return <SetGridSize />;
    case 2:
      return <PickSymbols />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({ 
  palette: {
  primary: {
    light: '#5f7481',
    main: '#344955',
    dark: '#0b222c',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffdc65',
    main: '#f9aa33',
    dark: '#c17b00',
    contrastText: '#000',
  },
},});

export default function Setup() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" >
            Tic Tac Toe Game
          </Typography>
        </Toolbar>

      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Determine game mode
          </Typography>

            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          
          {activeStep === steps.length ? (
            <Game />
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Play' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
          
        </Paper>
        <Copyright />
      </Container>
      
    </ThemeProvider>
  );
}

