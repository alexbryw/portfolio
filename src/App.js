import React from 'react';
import CardHolder from './components/cards/CardHolder';
// import { ThemeProvider } from '@material-ui/core/styles'
// import Theme from './components/MuiTheme'

function App() {
  return (
    // <ThemeProvider theme={Theme}>
      <div className="App">
        <CardHolder/>
      </div>
    // </ThemeProvider>
  );
}

export default App;
