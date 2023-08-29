import React from "react";
import { Divider, Grid, Stack, Typography, Box, Link } from "@mui/material";
import FlipCard from "./flipMain";
import "./flip.css";
import HealthAndSafetyIcon from "@mui/icons-material/DirectionsRun";
import SchoolIcon from "@mui/icons-material/DevicesOther";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/Agriculture";
import Medtech from '@mui/icons-material/Biotech';
import Agriculture from '@mui/icons-material/DinnerDining';
import Smart from '@mui/icons-material/BluetoothDrive';
import Transportation from '@mui/icons-material/LocalShipping';
import Robotics from '@mui/icons-material/SmartToy';
import Clean from '@mui/icons-material/Yard';
import Tourism from '@mui/icons-material/AirplaneTicket';
import Renewable from '@mui/icons-material/Bolt';
import Blockchain from '@mui/icons-material/Https';
import Education from '@mui/icons-material/CastForEducation';
import Disaster from '@mui/icons-material/Public';
import Toys from '@mui/icons-material/Toys';
import Anything from '@mui/icons-material/HighlightAlt';

import { Divide } from "react-feather";

const FrontCard = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <SchoolIcon sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Smart Automation
      </Typography>
      <Typography variant="h6" sx={{ color: "#000"}}>
        Increase the Efficiency
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard1 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <HealthAndSafetyIcon sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Fitness & Sports
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Health Care Solutions
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard2 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <MapsHomeWorkRoundedIcon sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Heritage & Culture
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
         The Golden Bird
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard3 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Medtech sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Healthcare
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Utilization of biological Systems
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard4 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Agriculture sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Food Tech
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Rural Development & Agriculture
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard5 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Smart sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Smart Vehicles
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Intelligent Devices
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard6 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Transportation sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000" }}>
        Transportation
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Growing pressures on the resources
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard7 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Robotics sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Robotics/Drone
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Remote Solutions
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard8 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Clean sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Green Technology
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Improve sanitization System
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard9 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Tourism sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Tourism
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Tourism Industries like hotels
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard10 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Renewable sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Renewable Energy
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        sustainable sources
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard11 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Blockchain sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Blockchain/Cyber
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Digital Info that powers
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard12 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Education sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Smart Education
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Remote Solutions
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard13 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Disaster sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Disaster Management
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Ideas for risk mitigation
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard14 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Toys sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Toys
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Creative Mind
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const FrontCard15 = () => (
  <Box
    sx={{
      background: "linear-gradient(180deg, #13b3be,#85fcfc)",
      borderRadius: "6px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
    <Anything sx={{ fontSize: "100px", mt: 2 }} />
      <Typography variant="h4" sx={{ color: "#000" }}>
        Miscellaneous
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Ideas in teritary sectors
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
);
const BackCard1 = () => {
  return (
    <Box sx={{}}>
      <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
        Sub-themes
      </Typography>
      <Divider />

      <Box sx={{ py: 2 }}>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", px: 2, fontWeight: "500" }}
        >
          1) Meantal Health
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", px: 2, fontWeight: "500" }}
        >
          2) Physical Health
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", p: 2, fontWeight: "500" }}
        >
          Read the Problem Statements:
        </Typography>
        <Link style={{textDecorationLine:'none'}}>
          <Typography variant="subtitle1" textAlign="left" sx={{ p: 2, pt: 0 }}>
            <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=NA==&category=QWxs&organization=QWxs&organization_type=QWxs" target="_blank">
              Click Here
            </a>
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
const BackCard = () => {
  return (
    <Box sx={{}}>
      <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
        Sub-themes
      </Typography>
      <Divider />

      <Box sx={{ py: 2 }}>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", px: 2, fontWeight: "500" }}
        >
          1) Fixed Automation 
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", px: 2, fontWeight: "500" }}
        >
          2) Programmable Automation
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", px: 2, fontWeight: "500" }}
        >
          3) Flexible Automation
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", px: 2, fontWeight: "500" }}
        >
          4) Integrated Automation
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", p: 2, fontWeight: "500" }}
        >
          Read the Problem Statements:
        </Typography>
        <Link>
          <Typography variant="subtitle1" textAlign="left" sx={{ p: 2, pt: 0 }}>
            <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTA=&category=QWxs&organization=QWxs&organization_type=QWxs" target="_blank">
              Click Here
            </a>
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
const BackCard2 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Rich Cultural Heritage
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) One District One Product
          </Typography>
          
          <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000", p: 2, fontWeight: "500" }}
        >
          Read the Problem Statements:
        </Typography>
        <Link>
          <Typography variant="subtitle1" textAlign="left" sx={{ p: 2, pt: 0 }}>
            <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=NQ==&category=QWxs&organization=QWxs&organization_type=QWxs" target="_blank">
              Click Here
            </a>
          </Typography>
        </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard3 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) MED Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) BIO Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            3) HEALTH Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=Ng==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard4 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Agriculture
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Food Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            3) Rural Development
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MQ==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard5 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) RTOS
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Support System for Dragline
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            3) Monitoring through AI
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            5) Smart Automation
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", pl: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography variant="subtitle1" sx={{ pl: 2 }} textAlign="left">
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTE=&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard6 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Transportaion
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Logistics
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTM=&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard7 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Robotics
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Drones
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=OQ==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard8 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Waste Segregation
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Digital Technology
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=Mw==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard9 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Tourism industries
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Misc
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTI=&category=QWxs&organization=QWxs&organization_type=QWxshttps://www.sih.gov.in/sih2023PS?technology_bucket=Mw==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard10 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Generative Design
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Sustainable ideation
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=OA==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard11 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Block chain
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Cyber security
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=Mg==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard12 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Legal Awareness
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Dropout Analysis
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            3) Verification System
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTU=&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard13 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Forecasts
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Threat zone detection
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            3) AI-ML zone
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            3) Misc
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTQ=&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard14 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Toys
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Games
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=MTY=&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};
const BackCard15 = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h4" sx={{ color: "#000", my: 2 }}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            1) Hospitality
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Financial Services
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", px: 2, fontWeight: "500" }}
          >
            2) Entertainment and Retail
          </Typography>
          
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000", p: 2, fontWeight: "500" }}
          >
            Read the Problem Statements::
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2023PS?technology_bucket=Nw==&category=QWxs&organization=QWxs&organization_type=QWxs">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};



const Themeportion = () => {
  return (
    <div style={{ background: "#070c1d" }}>
      <Typography
        variant="h2"
        sx={{ py: 10, color: "#FAFAFA" }}
        textAlign="center"
      >
        THEMES
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ py: 1 }} direction="row" spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={320}
                width={300}
                FrontCard={FrontCard}
                BackCard={BackCard}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard1}
                BackCard={BackCard1}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard2}
                BackCard={BackCard2}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard3}
                BackCard={BackCard3}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ py: 1 }} direction="row" spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 1, mx: 4 }}>
              <FlipCard
                height={320}
                width={300}
                FrontCard={FrontCard4}
                BackCard={BackCard4}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard5}
                BackCard={BackCard5}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard6}
                BackCard={BackCard6}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard7}
                BackCard={BackCard7}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ py: 1 }} direction="row" spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 1, mx: 4 }}>
              <FlipCard
                height={320}
                width={300}
                FrontCard={FrontCard8}
                BackCard={BackCard8}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard9}
                BackCard={BackCard9}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard10}
                BackCard={BackCard10}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard11}
                BackCard={BackCard11}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ py: 1 }} direction="row" spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 1, mx: 4 }}>
              <FlipCard
                height={320}
                width={300}
                FrontCard={FrontCard12}
                BackCard={BackCard12}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard13}
                BackCard={BackCard13}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard14}
                BackCard={BackCard14}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard15}
                BackCard={BackCard15}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Themeportion;
