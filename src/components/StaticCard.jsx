import { PaymentsOutlined, Timer10Rounded, Timer3 } from "@mui/icons-material";
import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import { motion } from "framer-motion";
import  { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
//--
class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '250px',
      width: '250px',
      paddingTop: '60px',
      textAlign: 'center',
      background: 'linear-gradient(180deg, #63f5bd, #00ffff)',
     
      color: '#000',
      fontSize: '20px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <motion.div style={{ background: "#070c1d", paddingTop: "10em",paddingBottom:"7em" }}>
      <Container style={{position:"absolute"}}  maxWidth="xl">
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
        <div style={ MyCarousel.CARD_STYLE }>
        <AccessTimeIcon fontSize="large" sx={{ fontSize: "65px" }} />
        <br/><h3>24 Hrs</h3>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <IntegrationInstructionsIcon
                fontSize="large"
                sx={{ fontSize: "65px" }}
              /><br/><h3>16 Themes</h3>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <PaymentsOutlined fontSize="large" sx={{ fontSize: "65px" }} />
        <br/><h3>Winning Team:<br/> 1 lac</h3>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <AccessibilityNewRoundedIcon
                fontSize="large"
                sx={{ fontSize: "65px" }}
              /><br/><h3>Free T-Shirts & Swags</h3>
        </div>
      </ReactCardCarousel>
      </Container>
    </motion.div>
    );
  }
}

export default MyCarousel;
