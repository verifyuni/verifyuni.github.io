import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Quote from "components/Typography/Quote.js";


import image from "assets/img/whitebg.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function Testemonials() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <div className={classes.title}>
                            <h2 className={classes.title}>Testemonials</h2>
                            </div>
                <GridContainer>
                
                    <GridItem xs={1} sm={1} md={8} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>
                                <div>
                                    <img src={image} alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <div className={classes.typo}>
                                            <div className={classes.note}>Quote</div>
                                            <Quote
                                                text="I can not thank VerifyUni enough. I was pretty late in starting my application process and contacted VerifyUni, even though I was late, I got in a number of universities across the world, some of them very prestigious. It's all because of the time spent with Veena and Ritu ma'am, who helped me throughout the process of ny application and still do. I am glad that I went to VerifyUni and nowhere else. It was an amazing experience and I strongly suggest VerifyUni to anyone who's looking to apply to any country."
                                                // author=" Kanye West, Musician"
                                            />
                                        </div>
                                        <h4>
                                            <FormatQuoteIcon className="slick-icons" />
                                            Viraj Jaisingh
                    </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image}
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <FormatQuoteIcon className="slick-icons" />
                                            Kate Arrow - HKU
                    </h4>
                                    </div>
                                </div>
                                <div>
                                    <img src={image} alt="Third slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <FormatQuoteIcon className="slick-icons" />
                                            Bob Young - NTU
                    </h4>
                                    </div>
                                </div>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
