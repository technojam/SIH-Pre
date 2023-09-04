import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {
  AccountCircle,
  CardGiftcard,
  DirectionsRun,
  Home,
  Settings,
} from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";

export default function Timelinepre() {
  return (
    <div id="timeline" className="timeline">
      <h1 className="tmhead">TIMELINE</h1>
    <Container maxWidth="lg">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
           5 SEP
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ mt: { xs: 4, lg: 0 } }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                bgcolor: "#85fcfc",
                borderRadius: { xs: 5, lg: 10 },
                fontSize: "2em",
                color: "#000",
                p: { xs: 0.5, lg: 2 },
              }}
            >
              <Home />{" "}
              <Typography variant="subtitle1"> Registration Start</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            02 MAR
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
            <TimelineDot sx={{ mt: { xs: 4, lg: 0 } }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Stack
              direction="row-reverse"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                bgcolor: "#85fcfc",
                borderRadius: { xs: 5, lg: 10 },
                fontSize: "2em",
                color: "#000",
                p: { xs: 0.5, lg: 2 },
              }}
            >
              <CardGiftcard />
              <Typography variant="subtitle1">Info Session</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            03 MAR
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ mt: { xs: 4, lg: 0 } }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                bgcolor: "#85fcfc",
                borderRadius: { xs: 5, lg: 10 },
                fontSize: "2em",
                color: "#000",
                p: { xs: 0.5, lg: 2 },
              }}
            >
              <AccountCircle />
              <Typography variant="subtitle1">Workshop Series Start</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            09 MAR
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ mt: { xs: 4, lg: 0 } }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack
              direction="row-reverse"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                bgcolor: "#85fcfc",
                borderRadius: { xs: 5, lg: 10 },
                fontSize: "2em",
                color: "#000",
                p: { xs: 0.5, lg: 2 },
              }}
            >
              <DirectionsRun />
              <Typography variant="subtitle1">Workshop Series End</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            10 MAR
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
            <TimelineDot sx={{ mt: { xs: 4, lg: 0 } }} />
          </TimelineSeparator>
          <TimelineContent>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                bgcolor: "#85fcfc",
                borderRadius: { xs: 5, lg: 10 },
                fontSize: "2em",
                color: "#000",
                p: { xs: 0.5, lg: 2 },
              }}
            >
              <Settings />
              <Typography variant="subtitle1">Registration Close</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container></div>
  );
}
