import PaidIcon from "@mui/icons-material/Paid";
import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import { motion } from "framer-motion";
import "./flip.css"
import {BsClock} from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'
import {FaFaceGrinHearts} from 'react-icons//fa6'
export default function StaticCard() {
	return (
		<>  <div id='about' className='con' >
      
        <div className="card cardtheme" style={{ width: "17rem", height: "20rem" }}>
          <div className="card-body d-flex flex-column align-items-center text-center cartcolor">
           <BsClock className="logo"/>
            <h1 className="card-title" style={{ fontWeight: "800" }}>24 HRS</h1>
          </div>
        </div>

		<div className="card cardtheme" style={{ width: "17rem", height: "20rem" }}>
          <div className="card-body d-flex flex-column align-items-center text-center cartcolor">
           <FaBookReader className="logo"/>
            <h1 className="card-title" style={{ fontWeight: "800" }}>16 THEMES</h1>
          </div>
        </div>

		<div className="card cardtheme" style={{fontSize:"1px", width: "17rem", height: "20rem" }}>
          <div className="card-body d-flex flex-column align-items-center text-center cartcolor">
           <FaFaceGrinHearts className="logo1"/>
            <h1 className="card-title" style={{fontWeight: "800",fontSize:"30px"}} >EXCITING SWAGS(for every participant)</h1>
          </div>
        </div>
      </div></>
	);
}
