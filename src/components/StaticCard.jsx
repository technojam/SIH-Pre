import { PaymentsOutlined, Timer10Rounded, Timer3 } from "@mui/icons-material";
import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
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
                // background: "rgb(119,209,222)",
                // background: "linear-gradient(130deg, rgba(119,209,222,1) 0%, rgba(47,134,197,1) 25%, rgba(94,56,134,1) 50%, rgba(166,57,108,1) 75%, rgba(225,71,124,1) 100%)",
                borderRadius: "8px",
                // boxShadow: "0px 0px 10px #000000",
              }}
            >
              <AccessTimeIcon fontSize="large" sx={{ fontSize: "65px"}} />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000000"
              }}
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
                // background: "linear-gradient(180deg, #63f5bd, #00ffff)",
                background: "rgb(119,209,222)",
                background: "linear-gradient(130deg, rgba(119,209,222,1) 0%, rgba(47,134,197,1) 25%, rgba(94,56,134,1) 50%, rgba(166,57,108,1) 75%, rgba(225,71,124,1) 100%)",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <IntegrationInstructionsIcon
                fontSize="large"
                sx={{
                  fontSize: "65px"
              }}
              />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000000" }}
              >
                8 Themes
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
                // background: "linear-gradient(180deg, #63f5bd, #00ffff)",
                background: "rgb(119,209,222)",
                background: "linear-gradient(130deg, rgba(119,209,222,1) 0%, rgba(47,134,197,1) 25%, rgba(94,56,134,1) 50%, rgba(166,57,108,1) 75%, rgba(225,71,124,1) 100%)",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <PaymentsOutlined fontSize="large" sx={{ fontSize: "65px" }} />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000000" }}
              >
                Cash Price 2.5 Lakhs
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
                // background: "linear-gradient(180deg, #63f5bd, #00ffff)",
                background: "rgb(119,209,222)",
                background: "linear-gradient(130deg, rgba(119,209,222,1) 0%, rgba(47,134,197,1) 25%, rgba(94,56,134,1) 50%, rgba(166,57,108,1) 75%, rgba(225,71,124,1) 100%)",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px #000000",
              }}
            >
              <AccessibilityNewRoundedIcon
                fontSize="large"
                sx={{ fontSize: "65px"}}
              />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ color: "#000000" }}
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


