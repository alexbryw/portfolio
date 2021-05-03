import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function About() {
  return (
    <Box bgcolor={"primary.main"} style={boxHolderStyle}>
      {/* <Typography style={textStyle}>
            </Typography> */}
      <Typography style={textStyle}>
        Jag läser just nu till Front End Developer på Medieinstitutet i
        Göteborg. HTML, CSS, JavaScript, TypeScript tillsammans med frameworks
        som React på front-end och Node/Express/MongoDB med REST API i back-end.
      </Typography>
      <Typography style={textStyle}>
        Jag har använt C# Unity3D i egna spelprojekt och Google Firebase
        Authentication, Firestore, Cloud Functions på min praktik. Jag är
        väldigt teknikintresserad, allt från webb, elektronik, raketer till ny
        energiteknik och AI. Nedan finns olika kodprojekt från mitt GitHub
        konto.
      </Typography>
    </Box>
  );
}

const boxHolderStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "3rem 0 3rem 0",
  padding: "1rem 0",
};

const textStyle = {
  color: "white",
  letterSpacing: 1.2,
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  margin: "0.25rem 1.25rem",
  maxWidth: "32rem",
};
