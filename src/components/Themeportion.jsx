import React from "react";
import { Divider, Grid, Stack, Typography, Box, Link } from "@mui/material";
import FlipCard from "./flipMain";
import "./flip.css";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import SettingsEthernetRoundedIcon from "@mui/icons-material/SettingsEthernetRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Drone from "../assets/drone-svgrepo-com (1).svg";

import { Divide } from "react-feather";
const FrontCard = () => (
  <>
  <span>
  <Box className ="box"
    sx={{
      height: "100%",
    }}
  >
    <SchoolIcon sx={{ fontSize: "100px", mt: 2}} />
    <Box className ="box" sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        EdTech
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Pioneering education
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard1 = () => (
  <>
  <span>
  <Box
    sx={{
      height: "100%",
    }}
  >
    <HealthAndSafetyIcon sx={{ fontSize: "100px", mt: 2}} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        Health Tech
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Health Care Solutions
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard2 = () => (
  <>
  <span>
  <Box
    sx={{
      height: "100%",
    }}
  >
    <MapsHomeWorkRoundedIcon sx={{ fontSize: "100px", mt: 2}} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        Sustainable Energy
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Energy Conservation
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard3 = () => (
  <>
  <span>
  <Box
    sx={{
      height: "100%",
    }}
  >
    <SettingsEthernetRoundedIcon sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        Fin Tech
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Financial Solutions
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard4 = () => (
  <>
  <span>
  <Box
    sx={{
      height: "100%",
    }}
  >
    <AddBusinessIcon sx={{ fontSize: "100px", mt: 2}} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        Tourism
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Tourism solution
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard5 = () => (
  <>
  <span>
  <Box
    sx={{
      // background: "rgb(119,209,222)",
      //           background: "linear-gradient(130deg, rgba(119,209,222,1) 0%, rgba(47,134,197,1) 25%, rgba(94,56,134,1) 50%, rgba(166,57,108,1) 75%, rgba(225,71,124,1) 100%)",
      // borderRadius: "6px",
      height: "100%",
    }}
  >
    <CarRentalRoundedIcon sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        Auto Tech
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Auto Tech
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard6 = () => (
  <>
  <span>
  <Box
    sx={{
      // background: "rgb(119,209,222)",
      //           background: "linear-gradient(130deg, rgba(119,209,222,1) 0%, rgba(47,134,197,1) 25%, rgba(94,56,134,1) 50%, rgba(166,57,108,1) 75%, rgba(225,71,124,1) 100%)",
      // borderRadius: "6px",
      height: "100%",
    }}
  >
    <QrCodeScannerRoundedIcon sx={{ fontSize: "100px", mt: 2 }} />
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" sx={{ color: "#000000" }}>
        General Tech
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        General Tech
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);
const FrontCard7 = () => (
  <>
  <span>
  <Box 
    sx={{
      // background:"white",
      // border: "black",
      // borderRadius: "10px",
      height: "100%",
    }}
  >
    <Box sx={{ py: 2 }}>
      <img src={Drone} height="100" width="200" />
      <Typography variant="h4" sx={{ color: "#000000" }}>
        UAV/Drone
      </Typography>
      <Typography variant="h5" sx={{ color: "#000000" }}>
        Remote Solutions
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#000000", my: 1 }}>
        Flip for Sub-themes
      </Typography>
    </Box>
  </Box>
  </span>
  </>
);

// const BackCard = () => {
//   return (
//     <>
//   <span>
//     <Box sx={{
//       height: "100%",}}>
//       <Typography variant="h4" sx={{ color: "#000000",py:2}}>
//         Sub-themes
//       </Typography>
//       <Divider />

//       <Box sx={{ py: 2 }}>
//         <Typography
//           variant="subtitle1"
//           textAlign="left"
//           sx={{ color: "#000000", px: 2, fontWeight: "500" }}
//         >
//           1) Ed. tech
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           textAlign="left"
//           sx={{ color: "#000000", px: 2, fontWeight: "500" }}
//         >
//           2) Smart Education
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           textAlign="left"
//           sx={{ color: "#000000", p: 2, fontWeight: "500" }}
//         >
//           For more information:
//         </Typography>
//         <Link>
//           <Typography variant="subtitle1" textAlign="left" sx={{ p: 2, pt: 0 }}>
//             <a href="https://www.sih.gov.in/sih2022#sih2020themes">
//               Click Here
//             </a>
//           </Typography>
//         </Link>
//       </Box>
//     </Box>
//     </span>
//     </>
//   );
  
// };
const BackCard1 = () => {
  return (
<>
  <span>
    <Box sx={{
      height: "100%",}}>


      <Typography variant="h4" sx={{ color: "#000000",py:2}}>
        Sub-themes
      </Typography>
      <Divider />

      <Box sx={{ py: 2 }}>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000000", px: 2, fontWeight: "500" }}
        >
          1) Health Tech
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000000", px: 2, fontWeight: "500" }}
        >
          2) Fitness
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000000", px: 2, fontWeight: "500" }}
        >
          3) Sports
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="left"
          sx={{ color: "#000000", p: 2, fontWeight: "500" }}
        >
          For more information:
        </Typography>
        <Link>
          <Typography variant="subtitle1" textAlign="left" sx={{ p: 2, pt: 0 }}>
            <a href="https://www.sih.gov.in/sih2022#sih2020themes">
              Click Here
            </a>
          </Typography>
        </Link>
      </Box>
    </Box>
  </span>
    </>
  );
};
const BackCard2 = () => {
  return (
    <>
  <span>
      <Box sx={{
      height: "100%",}}>

        <Typography variant="h4" sx={{ color: "#000000",py:2}}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            1) Sustainable Energy
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            2) Clean and Green Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            3) Renuable
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            4) Sustainable Energy
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            5) Disaster Management
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            6) Agriculture Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", pl: 2, fontWeight: "500" }}
          >
            For more information:
            <a href="https://www.sih.gov.in/sih2022#sih2020themes">
              Click Here
            </a>
          </Typography>
        </Box>
      </Box>
  </span>
      </>
  );
};
const BackCard3 = () => {
  return (
    <>
    <span>
      <Box sx={{
      height: "100%",}}>
        <Typography variant="h4" sx={{ color: "#000000",py:2}}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            1) Fin Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            2) Block Chain
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            3) Cyber Security
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", p: 2, fontWeight: "500" }}
          >
            For more information:
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2022#sih2020themes">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
  </span>
      </>
  );
};
const BackCard4 = () => {
  return (
    <>
  <span>
      <Box sx={{
      height: "100%",}}>
        <Typography variant="h4" sx={{ color: "#000000",py:2}}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            1) Tourism
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            2) Heritage
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            3) Culture
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", p: 2, fontWeight: "500" }}
          >
            For more information:
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2022#sih2020themes">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
  </span>
      </>
  );
};
const BackCard5 = () => {
  return (
    <>
  <span>
      <Box sx={{
      height: "100%",}}>

        <Typography variant="h4" sx={{ color: "#000000",py:2}}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            1) Auto Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            2) Transportation
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            3) Logistics
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            4) Smart Vechicle
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            5) Smart Automation
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", pl: 2, fontWeight: "500" }}
          >
            For more information:
          </Typography>
          <Link>
            <Typography variant="subtitle1" sx={{ pl: 2 }} textAlign="left">
              <a href="https://www.sih.gov.in/sih2022#sih2020themes">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
  </span>
      </>
  );
};
const BackCard6 = () => {
  return (
    <>
  <span>
      <Box sx={{
      height: "100%",}}>

        <Typography variant="h4" sx={{ color: "#000000",py:2}}>
          Sub-themes
        </Typography>
        <Divider />

        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            1) General Tech
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            2) Misc
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", p: 2, fontWeight: "500" }}
          >
            For more information:
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2022#sih2020themes">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
  </span>
      </>
  );
};
const BackCard7 = () => {
  return (
    <>
  <span>

      <Box sx={{
      height: "100%",}}>
        <Typography variant="h4" sx={{ color: "#000000",py:2}}>
          Sub-themes
        </Typography>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            1) UAC
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            2) Drones
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", px: 2, fontWeight: "500" }}
          >
            3) Robotics
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            sx={{ color: "#000000", p: 2, fontWeight: "500" }}
          >
            For more information:
          </Typography>
          <Link>
            <Typography
              variant="subtitle1"
              textAlign="left"
              sx={{ p: 2, pt: 0 }}
            >
              <a href="https://www.sih.gov.in/sih2022#sih2020themes">
                Click Here
              </a>
            </Typography>
          </Link>
        </Box>
      </Box>
  </span>
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
                // BackCard={BackCard}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard1}
                // BackCard={BackCard1}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard2}
                // BackCard={BackCard2}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard3}
                // BackCard={BackCard3}
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
                // BackCard={BackCard4}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard5}
                // BackCard={BackCard5}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard6}
                // BackCard={BackCard6}
              />
            </Box>
            <Box sx={{ my: 2, mx: 4 }}>
              <FlipCard
                height={300}
                width={400}
                FrontCard={FrontCard7}
                // BackCard={BackCard7}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Themeportion;
