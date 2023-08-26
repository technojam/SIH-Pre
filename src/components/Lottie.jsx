import React from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import LottieX from "react-lottie";
import animationData2 from "./loading";

export default function Lottie() {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        my: 30,
      }}
    >
      <LottieX options={defaultOptions2} width={400} height={400} />
    </Stack>
  );
}
