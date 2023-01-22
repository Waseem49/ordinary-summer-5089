import { Img } from "@chakra-ui/react";
import { fontSize } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="conatiner">
        <div className="image_video"></div>
        <div
          className="extre_40"
          style={{
            display: "flex",
            backgroundColor: "black",
            color: "white",
            padding: "10px 1rem 10px ",
            height: "fit-Content",
          }}>
          <div style={{ width: "78%" }}>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem 0 1rem 4rem",
                gap: "",
              }}>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  textAlign: "left",
                  marginTop: "-10px",
                  padding: "0",
                }}>
                EXTRA 40% OFF FOR
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "43px",
                  marginTop: "-10px",
                  textAlign: "left",
                  margin: "0",
                  padding: "0",
                }}>
                Up to 60% Off Clearance
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}>
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "wheat",
                textAlign: "left",
                margin: "0",
                padding: "0",
              }}>
              Online & in most <span>Exclusins & Details</span>
            </h6>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "left",
              }}>
              <span>WOMEN</span> <span>MEN</span>
            </h4>
          </div>
        </div>
        <div className="collections">
          <div>
            <img
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03.jpg"
              alt=""
            />
            <h3>WOMENS'S JEANS</h3>
          </div>
          <div>
            <img
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-02.jpg"
              alt=""
            />
            <h3>MEN'S SUITS</h3>
          </div>
          <div>
            <img
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-03.jpg"
              alt=""
            />
            <h3>WOMEN'S TOP</h3>
          </div>
          <div>
            <img
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-04.jpg"
              alt=""
            />
            <h3>MEN'S SHIRTS</h3>
          </div>
          <div>
            <img
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-05.jpg"
              alt=""
            />
            <h3>WOMEN'S DRESSES</h3>
          </div>
          <div>
            <img
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-06.jpg"
              alt=""
            />
            <h3>MEN'S JEANS</h3>
          </div>
        </div>
        <div className="express_icons">
          <span
            style={{
              fontWeight: "bolder",
              fontSize: "30px",
            }}>
            EXPRESS ICONS
          </span>
          <div className="express">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "27px",
                  color: "white",
                }}>
                Portofino Shirts
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "27px",
                  color: "white",
                }}>
                Body Contour
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "27px",
                  color: "white",
                }}>
                The Editor Pant
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "27px",
                  color: "white",
                }}>
                1MX Shirts
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "27px",
                  color: "white",
                }}>
                Modern Tech
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "27px",
                  color: "white",
                }}>
                Merino Sweaters
              </h1>
            </div>
          </div>
        </div>
        <div className="our_community">
          <span>OUR COMMUNITY</span>
          <div>
            <div>
              <img src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39.jpg" />
              <h2>Style. Inspire. Earn</h2>
              <p>BECOME A STYLE EDITOR</p>
            </div>
            <div>
              <img
                src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39-13.jpg"
                alt=""
              />
              <h2>Styling Community</h2>
              <p>SHOP THE LOOKS</p>
            </div>
            <div>
              <img
                src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/0120-digital-22726-community-section-update/tan-dt.jpg"
                alt=""
              />
              <h2>Dream Big With Tan France</h2>
              <p>SUPPORT OUR CAUSE</p>
            </div>
            <div>
              <img
                src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39-15.jpg"
                alt=""
              />
              <h2>EXPRESS INSIDER</h2>
              <p>JOIN FOR FREE</p>
            </div>
          </div>
        </div>
        <div className="express_you">
          <span style={{ fontSize: "25px", fontWeight: "700" }}>#EXPRESS</span>
          <span style={{ fontSize: "25px" }}>YOU</span>
          <div>
            <div>
              <img
                src="https://edge.curalate.com/v1/img/zW0eCYL0hASKk8XjSq7e_APaHRsRcuSMnHFLv43RaZI=/sc/450x450?spatialTags=0.5688073635101318:0.3054331839084625,0.4834219515323639:0.7606343626976013&typ=webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://edge.curalate.com/v1/img/BQ4hMTg3ziTLHRbURDrWssZ4HP5VSmD3RxgnbgQSHFU=/sc/450x450?spatialTags=0.6343693137168884:0.21732746064662933&typ=webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://edge.curalate.com/v1/img/FytH9WQwQCljm02VttrMTdWeOgx1qDCWtyBqBhwIEjA=/sc/450x450?spatialTags=0.7064220309257507:0.5301027894020081,0.564338207244873:0.7970588207244873&typ=webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://edge.curalate.com/v1/img/VF71F4mMA_mq614qB9Gr6xsa7gitJsx8F6ndegJiNWg=/sc/450x450?spatialTags=0.5431087017059326:0.5993523597717285,0.5107437372207642:0.2738009989261627,0.5798612833023071:0.29332074522972107&typ=webp"
                alt=""
              />
            </div>
          </div>
          <button
            style={{
              border: "1px solid black",
              padding: ".6rem 1rem",
              fontSize: "16px",
            }}>
            SHOP MORE LOOKS
          </button>
        </div>
        <div className="shop_the"></div>
        <div className="lableswelove"></div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
