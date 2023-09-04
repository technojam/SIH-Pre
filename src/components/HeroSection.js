import React from "react";
import styled from "styled-components";
import ParticleX from "./ParticlesX";
import Typewriter from "typewriter-effect";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";
import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../assets/SIHP White Logo.png";



const styles = {
  root: {
    fontFamily: "sans-serif",
    height: "50%",
    background: "#070c1d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

function HeroSection() {
  return (
    <HeroSectionContainer>
      <div style={styles.root}>
        {/* <ParticleX /> */}
        <div className="heroSectionTop">
          <div className="heroSectionLeft">
            <Box sx={{ mx: 5 }}>
              <div>
                <h5 style={{ fontSize: "1.5rem", paddingBottom: "5px" }}>
                  Organised by, <br /> School of Computing Science and
                  Engineering
                </h5>
                <h5 style={{ fontSize: "1.5rem", paddingBottom: "5px" }}>
                  and TeamTechnoJam, GUSC
                </h5>
                <h5 style={{ fontSize: "1.5rem", paddingBottom: "5px" }}>
                  Galgotias University, Greater Noida
                </h5>
                <h5 style={{ fontSize: "1.5rem", paddingBottom: "5px" }}>
                  <Typewriter
                    //delay={500}
                    options={{
                      strings: ["Sep 26-27, 2023"],
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Sep 26-27, 2023")
                        .callFunction(() => { })
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                </h5>
                <button className="register__btn">
                  <a
                    href="https://forms.gle/NbYFVYTyzcYcWFWm9"
                    style={{ textDecoration: "none" }}
                  >
                    Register
                  </a>
                </button>
                <div className="social__media__icons">
                  <a
                    href="https://www.linkedin.com/company/technojam/"
                    style={{ marginRight: "1rem" }}
                  >
                    <Linkedin color="#fff" />
                  </a>
                  <a
                    href="https://www.facebook.com/teamtechnojam/"
                    style={{ marginRight: "1rem" }}
                  >
                    <Facebook color="#fff" />
                  </a>
                  <a
                    href="https://www.instagram.com/teamtechnojam/"
                    style={{ marginRight: "1rem" }}
                  >
                    <Instagram color="#fff" />
                  </a>
                  <a
                    href="https://twitter.com/technojam_gu"
                    style={{ marginRight: "1rem" }}
                  >
                    <Twitter color="#fff" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCGkFbl5SfsI8rhNGqo9rJDA"
                    style={{ marginRight: "1rem" }}
                  >
                    <Youtube color="#fff" />
                  </a>
                </div>
              </div>
            </Box>
          </div>
          <div className="heroSectionRight">
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mx: 5, mb: { xs: 5 } }}
            >
              {/* <div style={{ display: "flex" }}>
                <img
                  src="https://technojam.github.io/dexterix3/assets/logo_footer_acm.png"
                  className="dexterix__logo1"
                  alt=""
                  style={{ objectFit: "contain", height: "80px" }}
                />
                <img
                  src="https://technojam.github.io/dexterix3/assets/TJ_logo.png"
                  className="dexterix__logo1"
                  alt=""
                  style={{ objectFit: "contain", height: "80px" }}
                />
                <img
                  src={codechef}
                  className="dexterix__logo1"
                  alt=""
                  style={{ objectFit: "contain", height: "80px" }}
                />
              </div> */}
              <div>
                <img
                  src={logo}
                  className="dexterix__logo"
                  height="250"
                  width="600"
                  alt=""
                />
                {/* <p style={{ textAlign: "center" }}>
                  International Hybrid Hackathon
                </p> */}
              </div>
              {/* <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={sih}
                  className="dexterix__logo2"
                  alt=""
                  style={{
                    height: "80px",
                    marginTop: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </div> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  pr: 5,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", p: 5 }}>
                  For problem statements
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    height: "40px",
                    backgroundImage:
                      "linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)",

                    color: "white",
                  }}
                >
                  <a
                    href="#themes"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Click here
                  </a>
                </Button>
              </Box>
            </Stack>
          </div>
        </div>
      </div>
    </HeroSectionContainer>
  );
}

export default HeroSection;

const HeroSectionContainer = styled.div`
  background-color: #070c1d;
  .register__btn {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin: 1rem 0;
    cursor: pointer;
    border-radius: 5px;
    background-color: #3770ff;
    > a {
      color: #fff;
    }
  }
  .register__btn:hover {
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    transform: scale(1.2);
  }
  .social__media__icons {
    display: flex;
    width: 80%;
    justify-content: flex-start;
    margin: 0.4rem 0;
  }
  .heroSectionTop {
    display: flex;
    color: #fff;
    width: 100%;
    height: "70%";
    justify-content: space-between;
    top: 25%;
  }
  .heroSectionLeft {
    margin-left: 2rem;
  }
  .heroSectionRight {
    margin: 0.6rem;
  }
  .heroSectionBottom {
    position: absolute;
    bottom: 10%;
  }
  .mobile__cntDwntimer {
    display: none;
  }

  @media (max-width: 768px) {
    .eventStartsinHeading {
      display: none;
    }
    .heroSectionTop {
      flex-direction: column;
    }
    .heroSectionBottom {
      position: absolute;
      bottom: 0%;
      display: none;
    }
    .dexterix__logo {
      /* display: none; */
      width: 200px;
      height: auto;
      object-fit: contain;
      margin: auto;
      display: block;
    }
    .dexterix__logo1 {
      /* display: none; */
      width: 100px;
      height: auto;
      object-fit: contain;

      display: block;
    }
    .dexterix__logo2 {
      /* display: none; */
      width: 150px;
      height: auto;
      object-fit: contain;
      margin-right: 250px;

      display: block;
    }
    .mobile__cntDwntimer {
      display: block;
    }
  }
`;
