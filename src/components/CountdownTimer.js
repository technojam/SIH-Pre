// import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import React, { Component } from "react";

import FlipCountdown from "flip-clock-count-countdown";
import { Box, Typography } from "@mui/material";

const CountdownTimer = () => {
  return (
    <Box
      sx={{
        background: "#070c1d",
        color: "#fff",
        pb: 7,
      }}
    >
      <Typography
        sx={{
          color: "#FAFAFA",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        Event Starts in
      </Typography>

      <FlipCountdown
        fontSize="1px"
        hideYear
        width={200}
        hideMonth
        theme="dark"
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        endAt={"2023-09-27 01:26:58"} // Date/Time
      />
    </Box>
  );
};
export default CountdownTimer;
