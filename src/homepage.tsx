import React from "react";
import { Button, Typography } from "@material-ui/core";

const Homepage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Here too</h2>
      <Button color="secondary" variant="contained">
        I am a prettier button
      </Button>
      <Typography variant="subtitle1">Hello</Typography>
    </div>
  );
};

export default Homepage;
