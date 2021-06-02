import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

export default theme;
