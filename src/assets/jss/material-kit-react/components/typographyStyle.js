import { VerticalAlignCenter } from "@material-ui/icons";
import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px"
  },
  defaultHeaderMargins: {
    // marginTop: "20px",
    // marginBottom: "10px"
  },
  quote: {
    // padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    // borderLeft: "5px solid #eee"
    verticalAlign: "middle",
  },
  quoteText: {
    // margin: "0 0 0px",
    // fontStyle: "italic",
    fontSize: "13px",
    fontWeight: 500,
    textAlign: "left",
    verticalAlign: "middle",
    lineHeight: "1.4",
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    fontStyle: "italic",
    lineHeight: "1.42857143",
    color: "#0000FF",
    textAlign: "left"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: primaryColor
  },
  infoText: {
    color: infoColor
  },
  successText: {
    color: successColor
  },
  warningText: {
    color: warningColor
  },
  dangerText: {
    color: dangerColor
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};

export default typographyStyle;
