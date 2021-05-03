import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { Box, Typography, Link } from "@material-ui/core";

export default function Bottom() {
  return (
    <Box
      bgcolor={"primary.main"}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 1.25rem 2rem 1.25rem",
        margin: "2rem 0 1rem 0",
      }}
    >
      <Link href="mailto:alex@alexanderbryngelsson.com">
        <Typography
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.2rem",
          }}
        >
          <MailIcon style={{ padding: "0 0.3rem" }} />
          {/* alex@alexanderbryngelsson.com */}
        </Typography>
      </Link>
      <Link href="https://github.com/alexbryw">
        <Typography
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.2rem",
          }}
        >
          <GitHubIcon style={{ padding: "0 0.3rem" }} />
        </Typography>
      </Link>
      <Link href="https://www.linkedin.com/in/alexanderbryngelsson/">
        <Typography
          style={{
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.2rem",
          }}
        >
          <LinkedInIcon style={{ padding: "0 0.3rem" }} />
        </Typography>
      </Link>
    </Box>
  );
}
