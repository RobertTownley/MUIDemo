import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Homepage from "./homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
