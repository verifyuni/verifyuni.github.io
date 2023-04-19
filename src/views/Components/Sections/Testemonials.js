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
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <div className={classes.title}>
                            <h2 className={classes.title}>Testimonials</h2>
                            </div>
                <GridContainer>
                    <GridItem xs={10} sm={5} md={12} className={classes.marginAuto}>
                        <Card carousel >
                            <Carousel {...settings}>
                            <div>
                                    <img src={image} alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <div className={classes.typo}>
                                            <div className={classes.note}></div>
                                            <Quote
                                                text="Ritu had taken my son under her wings, pulled him up, demanded from him, and helped him realize his potential. Without her, this journey would not have taken flight, caught speed, or reached its destination. This is a story of their partnership. Having moved to the US five years ago, we knew little about the college application process or the institution and their specializations or their rankings. She has helped us understand it, helped him understand himself better, and guided him through it all - starting from his subject selections in high school, drawing a list of ‘compatible’ institutions, helping organize his information for the various forms, helping him express and articulate his story though his essays, to turning in the applications! She was always there. She and her team have put in their all to see him make it to the institutes that topped his list. This story has a happy ending. We are indebted to her! Kudos to VerifyUni!"
                                                author="Madhavi Phadnis (Parent) - California, USA"
                                                
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image}
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                    <div className={classes.typo}>
                                            <div className={classes.note}></div>
                                            <Quote
                                                text="My Counsellors were friendly, warm, and open-minded about my academics and extracurriculars; they were able to establish a rapport from the very beginning and therefore could ease me into the process without much difficulty. They were communicative and influenced me to reciprocate, and guided me effectively through a process I was otherwise unfamiliar with."
                                                author="Sreya Sengupta - Bangalore, India"
                                            />
                                        </div>
                                       
                                    </div>
                                </div>
                                <div>
                                    <img src={image} alt="" className="slick-image" />
                                    <div className="slick-caption">
                                    <div className={classes.typo}>
                                            <div className={classes.note}></div>
                                            <Quote
                                                text="We are extremely satisfied with verifyuni. Ours was a very peculiar case and we were looking for someone for whom our daughter would not be just another client. Ritu and Veena were there to guide and support every step of the way. We consulted many consultants and spoke to various agencies and finally decided on verifyuni for their personal touch and honest approach. They have put in the same amount of hard work that my daughter put and that’s saying something. She got accepted to so many good universities and we owe it to VerifyUni. I would strongly recommend them to every parent who is looking for an exceptional team to help their child get into a good university."
                                                author="Shreya Dev - Seattle, USA"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <img src={image} alt="" className="slick-image" />
                                    <div className="slick-caption">
                                    <div className={classes.typo}>
                                            <div className={classes.note}></div>
                                            <Quote style={{ fontSize: "10px"}}
                                                text="Our experience with VerifyUni team was extremely positive every step of the way. We had limited background in this process and relied on them heavily quite comprehensively. Having reviewed Nikki's grades and interests, Ritu and Veena were very open and practical about discussing our options, this played a huge part in applying for right universities. They were able to provide invaluable feedback on all aspects, whether the college would be a good fit personality wise, the academic rigor in various colleges, essay requirements and overall whether it would be a good fit for Nikki or not. We were able to rely on them entirely and take decisions on which colleges to shortlist for application, while having a good mix of reach, target and safety schools. Their support throughout the essay process was invaluable - they were extremely patient and were always available to brainstorm, always gave good and honest feedback and areas to improve, and worked with us till essays were of the highest standard."
                                                author="Nivedita Bhat - California, USA"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <img src={image} alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <div className={classes.typo}>
                                            <div className={classes.note}></div>
                                            <Quote
                                                text="I can not thank VerifyUni enough. I was pretty late in starting my application process and contacted VerifyUni, even though I was late, I got in a number of universities across the world, some of them very prestigious. It's all because of the time spent with Veena and Ritu ma'am, who helped me throughout the process of my application and still do. I am glad that I went to VerifyUni and nowhere else. It was an amazing experience and I strongly suggest VerifyUni to anyone who's looking to apply to any country. "
                                                author="Viraj Jaisingh - Jaipur, India"
                                            />
                                        </div>
                                        
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
