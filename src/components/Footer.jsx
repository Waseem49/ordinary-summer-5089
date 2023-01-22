import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { padding } from "@mui/system";

const Footer = () => {
  const sizeofIcon = {
    width: "15%",
    height: "10%",
  };
  return (
    <>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "2rem",
          padding: "0 2rem",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "20%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}>
            <img
              style={{ width: "8rem", height: "fit-content" }}
              src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png"
              alt=""
            />
            <img
              style={{
                width: "9.2rem",
                height: "fit-content",
              }}
              src="https://th.bing.com/th/id/R.ce4ec1e19b57c8b9d10c9a5fadaeec08?rik=PLr5U89Cei7%2fgg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-_aWT6CWgvy4%2fU5c5H8BsosI%2fAAAAAAAADgk%2fw3nRit3rwtk%2fs1600%2fandroid_badge2.png&ehk=%2fHA%2fl216C9hPc0KujP3jtgIR1NgOmmc2M96bVCTSKf8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}>
            <h3 style={{ fontWeight: "bold" }}>SIGN UP FROM ALERTS</h3>
            <h3 style={{ fontWeight: "bold" }}>SIGN UP FOR EMAIL</h3>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}>
            <InstagramIcon style={sizeofIcon} />
            <PinterestIcon style={sizeofIcon} />
            <TwitterIcon style={sizeofIcon} />
            <YouTubeIcon style={sizeofIcon} />
            <FacebookOutlinedIcon style={sizeofIcon} />
          </div>
        </div>
        <div>
          <ul>
            <h3 style={{ fontWeight: "bold" }}>Store Locator</h3>
            <li>Find Store</li>
            <li>Factory OutLet</li>
            <h3 style={{ fontWeight: "bold" }}>Express Inssider</h3>
            <li>Reward</li>
            <li>Frequently Ask Question</li>
            <li>Terms and Condition</li>
            <h3 style={{ fontWeight: "bold" }}>Express Credit Card</h3>
            <li>Benifits</li>
            <li>Apply</li>
            <li>View Account</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3 style={{ fontWeight: "bold" }}>Gift Cards</h3>
            <li>Buy Gift Card</li>
            <li>Check Your Balance</li>
            <h3 style={{ fontWeight: "bold" }}>About Express</h3>
            <li>Overview</li>
            <li>Invester Relations</li>
            <li>ESG</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3 style={{ fontWeight: "bold" }}>Populars Pages</h3>
            <p>Women's Clothing</p>
            <il>Mens's Clothing</il>
            <li>Mens's Jeans</li>
            <li>Women's Jeans</li>
            <li>Very Merry Velvet</li>
            <li>Womens Dresses</li>
            <li>Women's Top</li>
            <li>Women's Sweaters</li>
            <li>Men's Swites</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3 style={{ fontWeight: "bold" }}>Customer Service</h3>
            <li>Contect Us</li>
            <li>Help</li>
            <li>Express Coupens</li>
            <li>Shipping Policy</li>
            <li>Student Discount</li>
            <li>Feedback</li>
            <li>Express Marketplace</li>
            <li>Google Ad Price Policy</li>
          </ul>
        </div>
      </div>
      <p style={{ padding: "1rem 0 2rem 0" }}>
        Terms & Conditions | Accessibility | About Ads | Privacy Policy | Do Not
        Sell | My Personal Information | Site Map | © 2023 Express. All rights
        reserved
      </p>
    </>
  );
};

export default Footer;
