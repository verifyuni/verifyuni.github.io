import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SocialResp() {
    const classes = useStyles();
    return (
        
        <div>
            <div className={classes.sections}>
                <div className={classes.container}>
            
                <div className={classes.title}>
                            <h2 className={classes.title}>Social Responsibility</h2>
                </div>
                    Our team’s constant endeavor is to give back to society. To that end, we work in a pro bono capacity to counsel and mentor underprivileged  students and enable them to pursue their higher education and career aspirations. Some of the organizations we have contributed our time and resources to include:

                    <div>
                    <ol>
                    <li>Association for Promoting Social Action (APSA), Bangalore, India</li>
                    <li>Aspire For Her (AFH), Mumbai, India</li>
                    <li>Freedom Employability Academy (FEA) India Org, New Delhi, India</li>
                    <li>Shanti Bhavan, Bangalore, India</li>
                    <li>Windsor Fellowship, London, UK</li>
                    <li>YMCA, California, USA</li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>

    )

}