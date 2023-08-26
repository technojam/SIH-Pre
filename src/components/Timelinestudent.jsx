import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Container, Stack, Typography } from "@mui/material";
import {
  AccountCircle,
  CardGiftcard,
  DirectionsRun,
  Home,
  Settings,
} from "@mui/icons-material";

export default function Timelinestudent() {
  return (
    <Container>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            10 AM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <Home />{" "}
              <Typography variant="subtitle1"> Event Commencement</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            10 AM-1 PM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <CardGiftcard />{" "}
              <Typography variant="subtitle1"> Participants Code</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            1 PM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <AccountCircle />{" "}
              <Typography variant="subtitle1">
                {" "}
                First Evaluation Round
              </Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            3 PM-5 PM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <DirectionsRun />{" "}
              <Typography variant="subtitle1">Code Code Code</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            6 PM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <AccountCircle />{" "}
              <Typography variant="subtitle1">
                {" "}
                Second Evaluation Round
              </Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            10 PM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <Settings />{" "}
              <Typography variant="subtitle1"> Day Wrap Up</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            DAY-2 9 AM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
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
              <DirectionsRun />{" "}
              <Typography variant="subtitle1">
                {" "}
                Third Evaluation Round
              </Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "white" }}>
            12 PM
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ height: { xs: "20vh", lg: "7vh" } }}>
            <TimelineDot sx={{ mt: { xs: 4, lg: 0 } }} />
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
              <Settings />{" "}
              <Typography variant="subtitle1"> Dexterix Wrap Up</Typography>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
