import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";

export default function Rules() {
  return (
    <Box
      sx={{
        backgroundColor: "#070c1d",
        padding: "5%",
        textAlign:"left"
      }}
    >
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ py: 5, color: "#FAFAFA" }}
          textAlign="center"
          gutterBottom
        >
          RULES
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5}}>
          1. All the Registered Teams are categorized in the 16 vertical domains
          mentioned in the SIH Website.
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          2. Students shall select the problem statements from Smart India
          Hackathon (SIH) 2023 website, i.e., https://sih.gov.in/sih2023PS
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          3. The titles in the SIH 2023 are not limited, you can come up with an
          innovative problem and provide a solution to it.
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          4. Each team should be of 6 students (1 girl is compulsary for
          each team) and even Ph.D. and M.Tech students can Participate in
          Smart India Hackathon
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          5. Multi-Disciplinary participations: Members from different branches
          will be encouraged to form a team.
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          6. As the software edition of the hackathon is digital product
          development competition, the majority of the team members MUST be well
          versed with programming skills.
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          7. For the hardware edition, we encourage multi-disciplinary teams
          which means your team should have a good mix of Mechanical Engineers,
          Electronic Engineers, Product Designers and Programmers, etc.
        </Typography>
        {/* <Typography variant="h5" sx={{ color: "#fff", pt: 5 }}>
          8. The Dexterix 3.0 International Technical Hackathon is conducted in
          the Hybrid Mode (Online and Offline).
        </Typography> */}
      </Box>
    </Box>
  );
}
