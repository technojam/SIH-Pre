import {
  Facebook,
  GitHub,
  Instagram,
  YouTube,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ParticleX from "./ParticlesX";

export default function Footer() {
  const styles = {
    root: {
      fontFamily: "sans-serif",
      height: "100%",
      background: "#070c1d",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100vh", lg: "50vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#070c1d",
        flexWrap: "wrap",

        color: "#FAFAFA",
      }}
    >
      <Stack
        direction="row"
        spacing={7}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img src="https://technojam.github.io/dexterix3/assets/TJ_logo.png" />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ py: 1 }} textAlign="center">
              About TechnoJam
            </Typography>
            <Box Container sx={{ maxWidth: "sm" }}>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, px: 3 }}
                textAlign="center"
              >
                At TechnoJam, we believe Greater Noida is fertile ground for
                untold amounts of growth in tech, bearing fresh opportunities
                for young minds. Through Dexterix we ensure the culture of
                creating and building, both within GU and the larger academic
                circle of the region. Dexterix has brought many thousands
                together in the shared love for coding and tech, it has acted as
                their much-needed push to work on greater things and as their
                first entrepreneurial spark. That is something worth celebrating
                time and again
              </Typography>
            </Box>
            <Stack
              direction="row"
              spacing="2"
              justifyContent="center"
              alignItems="center"
              sx={{ pt: 4, px: 3 }}
            >
              <IconButton sx={{ color: "white" }}>
                <a href="https://www.facebook.com/teamtechnojam/"> <Facebook /></a>
              </IconButton>
              <IconButton sx={{ color: "#FAFAFA" }}>
              <a href="https://www.github.com/technojam"> <GitHub /></a>
              </IconButton>
              <IconButton sx={{ color: "#FAFAFA" }}>
              <a href="https://www.instagram.com/teamtechnojam/"> <Instagram /></a>
              </IconButton>
              <IconButton sx={{ color: "#FAFAFA" }}>
              <a href="https://www.youtube.com/channel/UCGkFbl5SfsI8rhNGqo9rJDA"> <YouTube /></a>
              </IconButton>
              <IconButton sx={{ color: "#FAFAFA" }}>
              <a href="https://www.linkedin.com/company/technojam/"> <LinkedIn /></a>
              </IconButton>
              <IconButton sx={{ color: "#FAFAFA" }}>
              <a href="https://twitter.com/technojam_gu"> <Twitter /></a>
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
