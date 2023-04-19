import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ContactUs from "./Sections/ContactUs.js";
import Services from "./Sections/Services.js";

import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);


export default function College(props) {
    const classes = useStyles();
    const { ...rest } = props;
  
    var mob = false; 
    if (window.innerWidth<960)
      mob= true;
    return (
      <div>
        <Header
          brand="Contact Us"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
       <Parallax image={require("assets/img/bg4-dark.jpg")} style={{height:"30vh"}}>
      <div className={classes.container} style={{justifyContent:"center", height:"30vh"}}>
          <GridContainer style={{textAlign:"center"}}>
            <GridItem>
              <div className={classes.brand}>
                {mob?<h3 className={classes.subtitle} style={{ marginTop:"15vh",fontSize:"30px", fontWeight: "300"}}> 
                College Guidance for High School Students</h3>
                :
                <h3 className={classes.subtitle} style={{ marginTop:"15vh",fontSize:"50px", fontWeight: "400"}}> 
                College Guidance for High School Students</h3>}
              
                
              </div>
            </GridItem>
          </GridContainer>
      </div>
      </Parallax>
        <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
       <Services/>
       <ContactUs/>
       
        </div>
        </div>
        
      
       
     
      </div>
     
    );
  }
  