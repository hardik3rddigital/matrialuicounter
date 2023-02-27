import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function IncrementDecrement() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
          padding: "2rem",
          textAlign: "center",
          mt: "2rem",
          backgroundColor:'primary.main',
          '&:hover': {
            backgroundColor:'primary.light',
          }
        }}
      >
        <Box>
          <h4 style={{color:"#fff",marginTop:0}}>Counter App</h4>
          <h1 style={{color:"#fff"}}>{counter}</h1>
          <Button variant="contained" onClick={Increment}>
            <AddIcon />
          </Button>{" "}
          &nbsp;
          <Button variant="contained" onClick={Decrement}>
            <RemoveIcon />
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default IncrementDecrement;
