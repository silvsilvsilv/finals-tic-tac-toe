import * as React from 'react';
import { CssBaseline,AppBar,Box,Container,Toolbar,Paper,Stepper,Step,StepLabel,Button,Typography,Tooltip} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Gamemode from './Gamemode';
import SetGridSize from './Grid';
import PickSymbols from './PickSymbols';
import Game from './Game';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Tic Tac Toe Finals Project | John Leonil Silva '}
      {new Date().getFullYear()}
      {'.'}
      {'Gwapo kayka Sir'}
    </Typography>
  );
}

const steps = ['Game mode', 'Grid size', 'Symbols'];

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
  const [mode, setMode] = React.useState('pvp');
  const [row, setRow] = React.useState(3);
  const [column, setColumn] = React.useState(3);
  // const [symb, setSymb] = React.useState('X');
  const [p1symb, setP1Symb] = React.useState('X');
  const [p2symb, setP2Symb] = React.useState('O');
  const [reset, setReset] = React.useState(true);

  function resetGame() {
    setReset(!reset)
  }
  

  function getStepContent(step) {
    
    switch (step) {
      case 0:
        return <Gamemode mode={mode} setMode={setMode} />; // pass current state and update function to children
      case 1:
        return <SetGridSize row={row} setRow={setRow} column={column} setColumn={setColumn}/>;
      case 2:
        return <PickSymbols p1symb={p1symb} setP1Symb={setP1Symb} p2symb={p2symb} setP2Symb={setP2Symb} />;
      default:
        throw new Error('Unknown step');
    }
  }

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
        <Tooltip title="Reset the game" arrow>
          <Button 
          color='inherit' 
          size='large' 
          onClick={()=>{window.location.reload()}}
          >
            Tic Tac Toe Game
          </Button>
        </Tooltip>
        {activeStep===steps.length?(
          <Tooltip title="Reset the board" arrow>
            <Button 
            color='inherit' 
            onClick={() => resetGame()} 
            style={{marginLeft:'auto'}}
            >
              Try Again
            </Button>
          </Tooltip>
          ):null
          }
        </Toolbar>

      </AppBar>
      <Container component="main" maxWidth={(activeStep===steps.length)&&( (row>5) && (column>5))?'':'sm'} sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        {activeStep === steps.length ? ( reset? 
          <Game key="game1" mode={mode} row={row} column={column} p1symb={p1symb} p2symb={p2symb} />:
          <Game key="game2" mode={mode} row={row} column={column} p1symb={p1symb} p2symb={p2symb}/>
          ) : (
          <>
          <Typography component="h1" variant="h4" align="center">
          Setup for the game
          </Typography>

            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          
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
            </>
          )}
    
        </Paper>
        <Copyright />
      </Container>
      
    </ThemeProvider>
  );
}

