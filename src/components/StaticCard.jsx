import PaidIcon from '@mui/icons-material/Paid';
import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import { motion } from "framer-motion";
export default function StaticCard() {
  return (
    <motion.div style={{ background: "#070c1d", paddingTop: "5em" }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
                mx: 4,

                height: "370px",
                width: "300px",
                background: "linear-gradient(180deg, #63f5bd, #00ffff)", 
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <AccessTimeIcon fontSize="large" sx={{ fontSize: "65px" }} />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000" }}
              >
                24 Hrs
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "370px",
                width: "300px",
                my: 2,
                mx: 4,
                background: "linear-gradient(180deg, #63f5bd, #00ffff)",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <LocalLibraryIcon
                fontSize="large"
                sx={{ fontSize: "100px" }}
                paddingBottom="40px"
              />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000" }}
              >
                16 Themes
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "370px",
                width: "300px",
                my: 2,
                mx: 4,
                background: "linear-gradient(180deg, #63f5bd, #00ffff)",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <PaidIcon fontSize="large" sx={{ fontSize: "65px" }} />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000" }}
              >
                Cash Price 1 Lakh
                
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "370px",
                width: "300px",
                my: 2,
                mx: 4,
                background: "linear-gradient(180deg, #63f5bd, #00ffff)",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <AccessibilityNewRoundedIcon
                fontSize="large"
                sx={{ fontSize: "65px" }}
              />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000" }}
              >
                Free T-Shirts & Swags (For every participant)
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </motion.div>
  );
}
