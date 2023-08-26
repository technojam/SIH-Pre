import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function () {
  return (
    <div style={{ background: "#070c1d" }} id="about">
      <Box>
        <Typography
          variant="h2"
          sx={{
            py: { xs: 10, lg: 5 },
            color: "#FAFAFA",
          }}
          textAlign="center"
          gutterBottom
        >
          About
        </Typography>
      </Box>
      <Stack
        sx={{
          mx: { lg: 20, sx: 10, md: 15 },

          flexWrap: { lg: "nowrap", sm: "wrap", xs: "wrap" },
        }}
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Add video */}
        <Box
          sx={{
            pb: { xs: 10 },
          }}
        >
          <iframe
            width="500"
            height="405"
            src="https://www.youtube.com/embed/Q4PpJN79GKA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>

        <Typography
          sx={{ color: "#FAFAFA" }}
          variant="h6"
          component="h2"
          textAlign="left"
          gutterBottom
        >
          Dexterix is Galgotias University’s largest tech hackathon, organized
          through collaboration between Team TechnoJam, the Technical Club under
          GU Student Council, and the University’s School of Computing Science
          and Engineering. It is a themed competitive event that holds host to
          participants from more than 100+ colleges and universities from around
          India, capturing the spirit of innovation while fostering a love for
          technology and its beautiful application in all areas of life.
        </Typography>
      </Stack>
    </div>
  );
}
