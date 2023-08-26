import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import imgx from "../assets/x.png";
import imgy from "../assets/y.png";
import { Container } from "@mui/material";

export default function FullWidthTabs() {
  return (
    <Box
      sx={{
        bgcolor: "#070c1d",
        width: 500,
        color: "white",
        width: "100%",
      }}
      id="schedule"
    >
      <Typography
        variant="h2"
        sx={{ py: 5, color: "#FAFAFA" }}
        textAlign="center"
        gutterBottom
      >
        Timeline
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <img
          src={imgx}
          style={{
            width: "70vw",
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
          alt="timeline"
        />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <img
          src={imgy}
          style={{ width: "100%", height: "50%" }}
          alt="timeline"
        />
      </Container>
    </Box>
  );
}
