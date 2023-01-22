import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Link } from "react-router-dom";

import { Fade, Box, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";


const Header = () => {
  const sizeofIcon = {
    width: "30px",
    height: "32px",
  };
  const { isOpen, onToggle } = useDisclosure();
  const listStyleType = {
    listStyleType: "none",
  };
  const onToggl = {
    visibility: "hidden",
    isOpen: "false",
  };
  const { isVisible, setisVisible } = useState(false);
  const showhide = () => {
    setisVisible(true);
  };
  return (
    <>
      <div className="navbar">
        <div className="header">
          <div></div>
          <div className="logo_center">
            <Link to="/">
              <img
                className="logo"
                src="https://farm66.staticflickr.com/65535/52634926412_c6d4ee7c3b_m.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="header_right_side">
            <SearchIcon style={sizeofIcon} />
            <Link to="/signup">
              <PersonOutlineIcon style={sizeofIcon} />
            </Link>
            <Link to="/checkout">
              <WorkOutlineIcon style={sizeofIcon} />
            </Link>
          </div>
        </div>
        <div className="header_list">
          <ul>
            <li>
              <h5 onMouseOver={onToggle} onMouseOut={onToggl}>
                WOMEN
              </h5>
            </li>
            <li>
              <h5 onMouseOver={showhide} onMouseLeave={isVisible}>
                MEN
              </h5>
            </li>
            <li>
              <h5>JEANS</h5>
            </li>
            <li>
              <h5>NEW</h5>
            </li>
            <li>
              <h5>STYLE TRIAL RENTAL</h5>
            </li>
            <li>
              <h5>COMMUNITY</h5>
            </li>
            <li>
              <h5>LABELS WE LOVE</h5>
            </li>
          </ul>
        </div>
      </div>

      <Fade in={isOpen}>
        <Box w="100%" color="black" mt="0" shadow="md" h="fit-content" >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "fit-content",
            }}>
            <div>
              <ul>
                <h3 style={{ fontWeight: "bold" }}>CLOTHING</h3>
                <li style={listStyleType}>Tops</li>
                <li style={listStyleType}>Sweaters</li>
                <li style={listStyleType}>Dresses</li>
                <li style={listStyleType}>Jumpsuites</li>
                <li style={listStyleType}>Jeans</li>
                <li style={listStyleType}>Pants</li>
                <li style={listStyleType}>Jackets</li>
                <li style={listStyleType}>Skirts</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3 style={{ fontWeight: "bold" }}>NEW & NOW</h3>
                <li style={listStyleType}>New Arrivels</li>
                <li style={listStyleType}>Outfits Inspo</li>
                <li style={listStyleType}>Realexed Jeans</li>
                <li style={listStyleType}>Active by lables</li>
                <h3 style={{ fontWeight: "bold" }}>TOP SHOP</h3>
                <li style={listStyleType}>All Tops</li>
                <li style={listStyleType}>Icons:Protofino</li>
                <li style={listStyleType}>Shists & Blouse</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3 style={{ fontWeight: "bold" }}>DRESS SHOP</h3>
                <li style={listStyleType}>All Dresses</li>
                <li style={listStyleType}>Sweaters Dresses</li>
                <li style={listStyleType}>Black Dresses</li>
                <li style={listStyleType}>Jumpsuites & Rompers</li>
                <h3 style={{ fontWeight: "bold" }}>ACCESSORIES & SHOES</h3>
                <li style={listStyleType}>Shoes</li>
                <li style={listStyleType}>Jewelry</li>
                <li style={listStyleType}>Sunglasses</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3 style={{ fontWeight: "bold" }}>LABLES WE LOVE</h3>
                <li style={listStyleType}>New Arrivels</li>
                <li style={listStyleType}>Pre-Owend Luxury</li>
                <li style={listStyleType}>Desigenr Shop</li>
                <h3 style={{ fontWeight: "bold" }}>Styling Comminity</h3>
                <li style={listStyleType}>Styling Tips & Trickes</li>
                <li style={listStyleType}>Become A Style Editor</li>
                <li style={listStyleType}>Shop the Feed</li>
                <li style={listStyleType}>#BlueOcean_You</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                style={{
                  width: "50%",
                  height: "fit-content",
                }}
                src="https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/1227-digital-20752-dg-visual-card/w-nav-01.jpg"
                alt=""
              />
            </div>
          </div>
        </Box>
      </Fade>
    </>
  );
};

export default Header;
