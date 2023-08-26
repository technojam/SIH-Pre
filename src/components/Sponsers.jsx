import { Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import matic from "../assets/matic.png";
import fold from "../assets/fold.svg";
import block from "../assets/block.png";
import CNLOGO from "../assets/CNLOGO.svg";
import index from "../assets/index.png";

import red from "../assets/redfm.png";
import taskasde from "../assets/taskade.png";
import acm from "../assets/acm.png";
import codechef from "../assets/codechef.png";

export default function () {
  return (
    <div style={{ background: "#070c1d" }} id="sponsors">
      <Container>
        <Typography
          textAlign="center"
          sx={{
            borderBottom: "2px solid #FAFAFA",
            pb: 3,
            color: "#FAFAFA",
          }}
          variant="h2"
        >
          Sponsors
        </Typography>
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ color: "#FAFAFA", py: 5 }}
        >
          Media Partners
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <img src={red} height="100" width="300" />
        </Stack>
        <Divider sx={{ background: "grey", mt: 5 }} />

        <Typography
          textAlign="center"
          variant="h4"
          sx={{ color: "#FAFAFA", pt: 5 }}
        >
          Beta Sponsors
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <img src={taskasde} height="100" width="300" />
          <img src={acm} height="150" width="300" />
        </Stack>
        <Divider sx={{ background: "grey" }} />

        <Typography
          textAlign="center"
          variant="h4"
          sx={{ color: "#FAFAFA", py: 5 }}
        >
          Coding Partners
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <img src={codechef} height="90" width="300" />
        </Stack>
        <Divider sx={{ background: "grey", mt: 5 }} />
      </Container>
    </div>
  );
}
