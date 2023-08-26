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
            <Typography variant="subtitle1">How big can my team be?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
              The maximum team size allowed is 4-6 member 1 Girl Recommended
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
              No. A team of minimum 4 members is allowed.
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
              Dexterix 3.0 2022 will be a 24 hours hackathon which will stretch
              from 11th March to 12th March 2022 (overnight)
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
              Dexterix 3.0 will be conducted online by Galgotias University,
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
              You require school/college ID, laptops, phone, chargers,
              extensions.
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
              You must be a student from any University/College or Higher
              Secondary School in India.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
