import React from "react";
import { Container, Typography, Link, Box } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function WelcomePage() {
  return (
    <Box style={topContainerStyle}>
      <Typography variant={"h2"} color={"primary"}>
        Portfolio
      </Typography>
      <Typography variant={"h6"}>Alexander Bryngelsson</Typography>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0 0 0",
        }}
      >
        <Typography style={{ padding: "1rem" }}>
          <Link href="https://github.com/alexbryw">
            <GitHubIcon fontSize={"large"} />
          </Link>
        </Typography>
        <Typography style={{ padding: "1rem" }}>
          <Link href="https://www.linkedin.com/in/alexanderbryngelsson/">
            <LinkedInIcon fontSize={"large"} />
          </Link>
        </Typography>
      </Container>
      <KeyboardArrowDownIcon style={{ position: "absolute", top: "90vh" }} />
    </Box>
  );
}

const topContainerStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${"/img/cloud1920.jpg"})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  // backgroundAttachment: "fixed"
};
