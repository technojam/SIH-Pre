import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";

export default function FAQs() {
  return (
    <Box sx={{ width: "100%", background: "#070c1d" }} id="faq">
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ color: "white", pt: 2 }}
      >
        FAQs
      </Typography>
      <Container sx={{ p: { xs: 5, lg: 10 } }}>
        <Accordion
          sx={{ background: "#070c1d", borderBottom: "1px solid #FAFAFA" }}
        >
          <AccordionSummary
            sx={{ color: "#fff", background: "#070c1d" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">
              How big can my team be?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
              Team should comprise of 6 members including the team leader 
              Furthermore, it's mandatory to have at least one female member on your team.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ background: "#070c1d", borderBottom: "1px solid #FAFAFA" }}
        >
          <AccordionSummary
            sx={{ color: "#fff", background: "#070c1d" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">
              Can I come individually?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
              No. A team of only 6 members is allowed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ background: "#070c1d", borderBottom: "1px solid #FAFAFA" }}
        >
          <AccordionSummary
            sx={{ color: "#fff", background: "#070c1d" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">When?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
              Smart India Hackathon Pre-Qualifiers 2023 will be a 24 hours hackathon which will stretch
              from 26th September to 27th September 2023 (overnight)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ background: "#070c1d", borderBottom: "1px solid #FAFAFA" }}
        >
          <AccordionSummary
            sx={{ color: "#fff", background: "#070c1d" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">Where?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
            Smart India Hackathon Pre-Qualifiers 2023 will be conducted offline by Galgotias University,
              Greater Noida
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ background: "#070c1d", borderBottom: "1px solid #FAFAFA" }}
        >
          <AccordionSummary
            sx={{ color: "#fff", background: "#070c1d" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">
              What do I need to be ready with for the event?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
            To embark on this coding adventure, make sure you've got your college ID (it's your passport to tech stardom!),
             your trusty laptop, phone, chargers (because even tech wizards need to recharge), 
             and don't forget those power-hungry extensions. Ready to rock the digital runway! 🚀💻📱🔌
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ background: "#070c1d", borderBottom: "1px solid #FAFAFA" }}
        >
          <AccordionSummary
            sx={{ color: "#fff", background: "#070c1d" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#FAFAFA" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">
              What is the eligibility criteria?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
              All team members should be from Galgotias University; no inter-college teams are allowed.
               However, members from different departments/branches are encouraged to form a team.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
