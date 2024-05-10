import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import App from "./App";
import { UserProvider } from "./context/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UserProvider>
       <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </UserProvider>
  </StrictMode>,
  rootElement
);
