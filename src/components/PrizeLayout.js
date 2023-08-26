import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import FlipCard from "./flipMain";
import "./flip.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import img1 from "../assets/first.svg";
import img2 from "../assets/second.svg";
import img3 from "../assets/third.svg";
const FrontCard = () => (
  <div style={{ backgroundColor: "#070c1dE9" }}>
    <img src={img1} height="300" width="290"></img>
  </div>
);
const FrontCard2 = () => (
  <div style={{ backgroundColor: "#070c1dE9" }}>
    <img src={img2} height="300" width="290"></img>
  </div>
);
const FrontCard3 = () => (
  <div style={{ backgroundColor: "#070c1dE9" }}>
    <img src={img3} height="300" width="290"></img>
  </div>
);

const BackCard = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#000", pt: 15 }}>
        Winner
      </Typography>
      <Typography variant="h5" sx={{ color: "#000" }}>
        Rs. 21000
      </Typography>
    </>
  );
};
const BackCard1 = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#000", pt: 15 }}>
        First runner up
      </Typography>
      <Typography variant="h5" sx={{ color: "#000" }}>
        Rs.11000
      </Typography>
    </>
  );
};
const BackCard2 = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#000", pt: 15 }}>
        Second runner up
      </Typography>
      <Typography variant="h5" sx={{ color: "#000" }}>
        Rs.5100
      </Typography>
    </>
  );
};
const BackCard3 = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#000", pt: 15 }}>
        Winner
      </Typography>
      <Typography variant="h5" sx={{ color: "#000" }}>
        Rs. 11000
      </Typography>
    </>
  );
};
const BackCard4 = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#000", pt: 15 }}>
        First runner up
      </Typography>
      <Typography variant="h5" sx={{ color: "#000" }}>
        Rs.5100
      </Typography>
    </>
  );
};
const BackCard5 = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#000", pt: 15 }}>
        Second runner up
      </Typography>
      <Typography variant="h5" sx={{ color: "#000" }}>
        Rs.2100
      </Typography>
    </>
  );
};
const PrizeLayout = () => {
  return (
    <div style={{ background: "#070c1d" }}>
      <Typography
        variant="h2"
        sx={{ py: 10, color: "#FAFAFA" }}
        textAlign="center"
      >
        PRIZES
      </Typography>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ ml: { sm: 0, lg: 5 }, color: "#FAFAFA" }}
      >
        Corporate Prizes
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ py: 3 }} direction="row" spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={320}
                width={300}
                FrontCard={FrontCard}
                BackCard={BackCard}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard2}
                BackCard={BackCard1}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard3}
                BackCard={BackCard2}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ ml: { sm: 0, lg: 5 }, color: "#FAFAFA" }}
      >
        Student Prizes(Per Theme)
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ py: 3 }} direction="row" spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={320}
                width={300}
                FrontCard={FrontCard}
                BackCard={BackCard3}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard2}
                BackCard={BackCard4}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard3}
                BackCard={BackCard5}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default PrizeLayout;
