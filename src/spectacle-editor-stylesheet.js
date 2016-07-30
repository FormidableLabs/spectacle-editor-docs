// -------------------------------
// SPECTACLE EDITOR THEME
// -------------------------------
// settings
import settings from "./spectacle-editor-settings";

// For both akkurat & sharp sans no2 bold:
// MozOsxFontSmoothing: "grayscale",
// WebkitFontSmoothing: "antialiased"

// Stylesheet
export default {
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%"
  },
  body: {
    background: settings.darkestBlue,
    boxSizing: "border-box",
    color: settings.white,
    fontFamily: settings.serif,
    fontSize: "16px",
    lineHeight: 1.4
  },
  "h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dd, p, figure, pre, table, fieldset, hr": {
    marginTop: "1.25rem",
    marginBottom: 0
  },
  "ul ul": {
    marginTop: "0"
  },
  "h1, h2, h3, h4, h5, h6, hgroup": {
    fontFamily: settings.sansSerif,
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased"
  },
  p: {
    fontSize: "1rem",
    lineHeight: 1.5
  },
  "p > code, li > code, h1 > code, h2 > code, h3 > code, h4 > code, h5 > code, h6 > code": {
    padding: "0px 5px",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    margin: "0px",
    fontSize: "85%",
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: "3px"
  },
  li: {
    fontSize: "1rem",
    lineHeight: 1.8
  },
  img: {
    maxWidth: "100%"
  },
  h1: {
    fontSize: "3rem"
  },
  h2: {
    fontSize: "2rem"
  },
  h3: {
    fontSize: "1.5rem"
  },
  h4: {
    fontSize: "1.3125rem"
  },
  svg: {
    fill: "currentColor"
  },
  mediaQueries: {
    [settings.mediaSizes.medium]: {
      p: {
        fontSize: "1.2rem"
      },
      li: {
        fontSize: "1.2rem"
      },
      "h1": {
        fontSize: "3.75rem"
      },
      "h2": {
        fontSize: "2.75rem"
      },
      "h3": {
        fontSize: "2rem"
      },
      "h4, h5, h6": {
        fontSize: "1.5rem"
      }
    }
  }
};
