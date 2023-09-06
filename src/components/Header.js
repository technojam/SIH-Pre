import React, { useState } from "react";
import { Grid } from "react-feather";
import styled from "styled-components";
import logo from "../assets/SIHP White Logo.png";
import {
  headerBG__color,
  backgroundColor,
  textColor,
  iconColor,
  secondaryBgColor,
} from "./colors";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { CancelOutlined } from "@mui/icons-material";
// import gu from "../assets/gu.png";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <HeaderContainer>
        <div>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="header__logo"
              style={{
                height: "80px",
              }}
            />
          </a>
          {/* <img
            src={gu}
            alt="logo"
            style={{
              height: "50px",
            }}
          /> */}
        </div>
        <nav>
          <div className="nav__left"></div>
          <div className="nav__right">
            <div className="mobile__nav__right">
              <MenuIcon
                className="header__btns"
                onClick={() => setToggleMenu((ps) => !ps)}
              />
            </div>
            <div className="non__mobile__nav__right">
              <a href="#about" className="header__nav__link">
                About
              </a>
              <a href="#timeline" className="header__nav__link">
                Timeline
              </a>
              <a href="#events" className="header__nav__link">
                Events
              </a>
              <a href="#prizes" className="header__nav__link">
                Prizes
              </a>
              <a href="#faq" className="header__nav__link">
                FAQ
              </a>
            </div>
          </div>
        </nav>
      </HeaderContainer>
      {toggleMenu ? (
        <MobileMenu>
          <div className="mm__bottom">
            <motion.div onClick={() => setToggleMenu((ps) => !ps)}>
              <CancelOutlined className="header__btns" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#about" className="header__nav__link">
                About
              </a>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#timeline" className="header__nav__link">
                Timeline
              </a>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#events" className="header__nav__link">
                Events
              </a>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#prizes" className="header__nav__link">
                Prizes
              </a>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="#faq" className="header__nav__link">
                FAQ
              </a>
            </motion.div>
          </div>
        </MobileMenu>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    > .mm__bottom {
      flex: 0.3;
      position: fixed;
      display: flex;
      flex-direction: column;
      top: 0;
      z-index: 100;
      background-color: #070c1d;
      color: ${iconColor};
      padding: 10px;
      width: 100%;
      height: 300px;
      justify-content: space-around;
      align-items: center;
    }
  }
  .header__nav__link {
    font-size: larger;
    margin: 1rem;
    text-decoration: none;
    color: #fff;
  }
  .header__nav__link:active {
    font-size: larger;
    margin: 1rem;
    text-decoration: none;
    color: #fff;
  }
`;

const HeaderContainer = styled.header`
  z-index: 100;
  position: sticky;
  top: 0;
  display: flex;
  padding: 1rem;
  background-color: ${headerBG__color};
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  .header__nav__link {
    font-size: larger;
    margin: 1rem;
    text-decoration: none;
    color: #fff;
  }
  .header__nav__link:active {
    font-size: larger;
    margin: 1rem;
    text-decoration: none;
    color: #fff;
  }
  .non__mobile__nav__right {
    display: none;
  }
  .mobile__nav__right {
    display: flex;
  }
  .header__btns {
    margin-left: 0.6rem;
    cursor: pointer;
    color: ${iconColor};
  }
  .header__logo {
    margin-right: 0.2rem;
    border-radius: 5px;
    height:100px;
    padding: 0.6rem;
  }
  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    > .nav__left {
      display: flex;
      align-items: center;
    }
    > .nav__right {
      display: flex;
    }
  }
  @media screen and (min-width: 576px) {
    .header__logo {
      height: auto;
      margin-right: 0.2rem;

      border-radius: 5px;
      object-fit: contain;
    }
    .mobile__nav__right {
      display: none;
    }
    .non__mobile__nav__right {
      display: flex;
      align-items: center;
    }
  }
`;
