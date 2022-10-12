import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./Styles/global";
import { Router } from "./Router";
import { lightTheme } from "./Styles/themes/lightTheme";

function App() {

  return (
    <div className="App">
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>          
          <GlobalStyle/>
        </ThemeProvider>
    </div>
  );
}

export default App;
