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
    fontFamily: settings.sans,
    fontSize: "18px",
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
    fontWeight: 300,
    letterSpacing: "0.015em",
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
    fontSize: "3.5rem"
  },
  h2: {
    fontSize: "2.5rem"
  },
  h3: {
    fontSize: "2rem"
  },
  "h4, h5, h6": {
    fontSize: "1.5rem"
  },
  svg: {
    fill: "currentColor"
  },
  "a, button": {
    cursor: "pointer"
  },
  "a": {
    borderBottom: `1px solid ${settings.blue}`,
    color: settings.white,
    fontWeight: 600,
    textDecoration: "none",
    transition: "border-color ease-in 193ms, color ease-in 193ms"
  },
  "a:visited": {
    color: settings.blue
  },
  "a:hover": {
    borderBottom: `1px solid ${settings.darkBlue}`,
    color: settings.blue,
    transition: "border-color ease-out 225ms, color ease-out 225ms"
  },
  mediaQueries: {
    [settings.mediaSizes.medium]: {
      p: {
        fontSize: "1.5rem"
      },
      li: {
        fontSize: "1.75rem"
      },
      "h1": {
        fontSize: "3.75rem"
      },
      "h2": {
        fontSize: "2.75rem"
      },
      "h3": {
        fontSize: "2.75rem"
      }
    }
  }
};
