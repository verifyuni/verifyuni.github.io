import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Acceptances() {
    const classes = useStyles();
    return (
        
        <div>
            <div className={classes.sections}>
                <div className={classes.container}>
            
                    <h2 className={classes.title}>Offers & Acceptances</h2>
                    <h3> Undergraduate </h3>
                    <h3>USA</h3>

                    <div style = {{display: "flex"}}>
                        <div style={{flex:1}}>
                            <li>Arizona State University</li>
                            <li>Barnard College</li>
                            <li>Beloit College</li>
                            <li>Boston University</li>
                            <li>California Polytechnic State University, San Luis Obsipo</li>
                            <li>California Polytechnic State University, Pomona</li>
                            <li> Carleton College</li>
                            <li>Case Western Reserve University</li>
                            <li>Georgia Institute of Technology</li>
                            <li> Hamilton College</li>
                            <li>Loyola Marymount University</li>
                            <li>Maryland Institute College of Art</li>
                            <li>Massachusetts College of Art and Design</li>
                            <li>Minneapolis College of Art and Design</li>
                            <li>New Jersey Institute of Technology</li>
                            <li>Northeastern University</li>
                            <li>Purdue University - West Lafayette</li>
                            <li>Rice University</li>
                            <li>Santa Clara University</li>
                            <li>Savannah College of Art and Design</li>
                            <li>Swarthmore College</li>
                            <li>University of Arizona</li>
                            <li>University of Buffalo</li>
                            <li>University of California, Berkeley</li>
                        </div>

                        <div style={{flex:1}}>
                            <li>University of California, Davis</li>
                            <li>University of California, Irvine</li>
                            <li>University of California, Los Angeles</li>
                            <li>University of California, San Diego</li>
                            <li>University of California, Santa Barbara</li>
                            <li>University of California, Santa Cruz</li>   
                            <li>University of Colorado Boulder</li>
                            <li>University of Florida</li>
                            <li>University of Illinois, Chicago</li>
                            <li>University of Illinois, Urbana-Champaign</li>
                            <li>University of Chicago</li>
                            <li>University of Madison</li>
                            <li>University of Maryland, College Park</li>
                            <li>University of Michigan</li>
                            <li>University of Pittsburgh</li>
                            <li>University of Southern California</li>
                            <li>University of Texas at Austin</li>
                            <li>University of Washington</li>
                            <li>University of Wisconsin-Madison</li>
                            <li>University of the Pacific, Stockton</li>
                            <li>The Pennsylvania State University</li>
                            <li>The Ohio State University</li>
                            <li> Williams College</li>
                        </div>
                    </div>

                    <br></br>
                    <h3>United Kingdom</h3>

                    <div style = {{display: "flex"}}>
                        <div style={{flex:1}}>
                        <li>City, University of London</li>
                        <li>King's College London</li>
                        <li>Newcastle University</li>
                        <li>Lancaster University</li>
                        <li>Queen Mary University of London</li>
                        <li>University of Bath</li>
                        <li>University of Essex</li>
                        </div>

                        <div style={{flex:1}}>
                            <li>University of Exeter</li>
                            <li>University of Leeds</li>
                            <li>University of Southampton</li>
                            <li>University of Nottingham</li>
                            <li>University of Warwick</li>
                            <li>The University of Edinburgh</li>
                        </div>
                    </div>

                    <br></br>
                    <h3>Australia</h3>
                    <li>Monash University</li>

                    <br></br>
                    <h3>Canada</h3>
                    <div>
                        <li>McGill University</li>
                        <li>University of British Columbia</li>
                        <li>University of Toronto</li>
                    </div>

                    <br></br>
                    <h3>Postgraduate</h3>
                    <div>
                        <li>Boston University</li>
                        <li>Drexel University</li>
                        <li>University of Michigan</li>
                        <li>University of Southern California</li>
                        <li>University of Washington</li>
                        <li>University of California Los Angeles</li>
                    </div>
                </div>
            </div>
        </div >

    )

}