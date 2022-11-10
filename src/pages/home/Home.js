import React from "react";
import profileImage from "../../assets/profileimage.jpg";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Home(props) {
  const { loading } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#660000",
      },
    },
  });

  return (
    <div className="center-div">
      {loading ? (
        <ThemeProvider theme={theme}>
          <Box sx={{ width: "50%" }}>
            <LinearProgress color="primary" />
          </Box>
        </ThemeProvider>
      ) : (
        <>
          <img src={profileImage} />
          <h1>RYAN HAEFNER</h1>
          <h3>WELCOME TO MY PORTFOLIO</h3>
        </>
      )}
    </div>
  );
}

export default Home;
