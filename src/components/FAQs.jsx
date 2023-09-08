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
              What is a hackathon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
            A hackathon is best described as an “invention marathon”.
            Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere.
            You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.
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
              What if I don't know how to code
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
            Not a problem! It’s entirely irrelevant what your experience is going into a hackathon,
             as long as you’re willing to learn and have fun.
             There will be plenty of mentors and fellow hackers to help you out.
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
            <Typography variant="subtitle1">
              What if I don't have a Team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
            No worries! We've a good discord community, you may look around there for the same , 
            <a href="https://discord.gg/gupvGF8a">Team TechnoJam's Discord </a>You can find your team members there.
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
              Will I annoy people if I ask them questions ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#fff", background: "#070c1d" }}>
            <Typography variant="subtitle2">
            No! Hackathons are all about learning and sharing knowledge.
             Asking questions is a great way to learn new things and meet new people. 
            Don’t be afraid to ask questions, no matter how simple you think they are.
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
