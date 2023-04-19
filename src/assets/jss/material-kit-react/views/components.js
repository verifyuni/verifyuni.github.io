import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
   
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative", 
    marginBottom:"0px", 
    lineHeight:"1em"
  },
  subtitle: {
   
    fontSize: "1.313rem",
    margin: "0px 0 0",
    textAlign: "center"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-0px 0px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
