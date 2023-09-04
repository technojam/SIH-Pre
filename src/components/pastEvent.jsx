import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Stack,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Container,
} from "@mui/material";
import { backgroundColor } from "./colors";

export default function Event(props) {
  var workshop1 = [
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex11_qSGun-0J7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081478180",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex12_XuG6o10VQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081470360",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex14_PCJmhqwhm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081469761",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex13_e1ZaIyvls.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081464079",
    },
  ];
  var workshop2 = [
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex22_hUL4vjyfM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081383177",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex23_hqWjUbmUZiut.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081385502",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex24_-1Z5zxvFR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081385063",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/dex2_wwzTZMe8X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081383698",
    },
  ];
  var workshop3 = [
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/nasa3_yJTiR1fDNVua.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081480546",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/nasa1_hEAFIKiB2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081471717",
    },
    {
      img: "https://ik.imagekit.io/73typ5rmngv/assets/nasa2_nUihDQAld.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645081463298",
    },
  ];

  return (
    <div id="events" style={{ background: "#070c1d", padding: "10px" }}>
      <Container maxWidth="xl">
        <Typography variant="h2" textAlign="center" sx={{ padding:"100px 50px 50px 10px", color: "#FAFAFA" }}>
          Past Events
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ py: 4 }}
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
                width: { lg: "25%", sm: "100%" },
                mt: 10,
                mx: { sm: 0, lg: 4 },

                background: "#FAFAFA",
                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={3}>
                <Carousel
                  interval={4000}
                  animation="slide"
                  indicators={false}
                  stopAutoPlayOnHover
                  swipe
                >
                  {workshop1.map((item, i) => (
                    <Item key={i} item={item.img} />
                  ))}
                </Carousel>

                <Typography textAlign="center" variant="h6">
                  Dexterix
                </Typography>
                <Typography
                  textAlign="center"
                  variant="subtitle2"
                  sx={{ p: 1, pb: 5 }}
                >
                  Organised by Galgotias university, the first iteration of the
                  Hackathon was received with high enthusiasm of the
                  participants from over 10+ colleges. It helped pave the way to
                  a better entrepreneurial environment.
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                width: { lg: "25%", sm: "100%" },
                mt: 10,
                mx: { sm: 0, lg: 4 },
                background: "#FAFAFA",
                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={3}>
                <Carousel
                  interval={4000}
                  animation="slide"
                  indicators={false}
                  stopAutoPlayOnHover
                  swipe
                >
                  {workshop2.map((item, i) => (
                    <Item key={i} item={item.img} />
                  ))}
                </Carousel>

                <Typography textAlign="center" variant="h6">
                  Dexterix 2.0
                </Typography>
                <Typography
                  textAlign="center"
                  variant="subtitle2"
                  sx={{
                    pb: 4,
                    minHeight:"160px"
                  }}
                >
                  The second iteration was no less, a greater success. It
                  involved participants from 25+ colleges with 700+ participants
                  and an even greater prize pool. The participants came up with
                  very competitive ideas and smart implementations.
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                width: { lg: "25%", sm: "100%" },

                mt: 10,
                mx: { sm: 0, lg: 4 },
                background: "#FAFAFA",
                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={3}>
                <Carousel
                  interval={4000}
                  animation="slide"
                  indicators={false}
                  stopAutoPlayOnHover
                  swipe
                >
                  {workshop3.map((item, i) => (
                    <Item key={i} item={item.img} />
                  ))}
                </Carousel>

                <Typography textAlign="center" variant="h6">
                  NASA International Space Apps Challenge 2019
                </Typography>
                <Typography
                  textAlign="center"
                  variant="subtitle2"
                  sx={{
                    pb: 4,
                    maxHeight:"130px"
                  }}
                >
                  NASA Space Apps Challenge, a part of NASA’s Earth Science
                  Division is one of the largest global hackathon, was organized
                  by Team TechnoJam in which participants from all over Delhi
                  had to compete in teams of 2-4 members to qualify for the
                  global round
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

function Item(props) {
  return (
    <Paper elevation={0}>
      <img src={props.item} height="350" width="400" />
    </Paper>
  );
}
