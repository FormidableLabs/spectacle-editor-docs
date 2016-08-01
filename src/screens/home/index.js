import React from "react";
import Radium from "radium";

// Settings
import { Footer } from "formidable-landers";
import FORMIDABLELOGO from "../../../static/logo-formidable.svg";
import PLOTLYLOGO from "../../../static/logo-plotly.svg";
import LOGO from "../../../static/logo.svg";
import settings from "../../spectacle-editor-settings";

// Child Components
import Download from "./components/download";
import Details from "./components/details";

class Home extends React.Component {
  getStyles() {
    return {
      link: {
        borderBottom: `1px solid ${settings.blue}`,
        color: settings.white,
        fontWeight: 300,
        textDecoration: "none",
        transition: "border-color ease-in 193ms, color ease-in 193ms",
        ":hover": {
          borderBottom: `1px solid ${settings.darkBlue}`,
          color: settings.blue,
          transition: "border-color ease-out 225ms, color ease-out 225ms"
        }
      },
      list: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        listStyle: "none",
        margin: "3rem auto 10rem",
        maxWidth: "900px",
        padding: 0
      },
      listItem: {
        flexBasis: "auto"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <main
        style={{
          background: `linear-gradient(180deg, ${settings.darkCharcoal}, ${settings.darkestBlue})`
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            margin: "0 auto",
            minHeight: "10vh",
            maxWidth: "480px"
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: FORMIDABLELOGO }}
            style={{
              width: "100%",
              maxWidth: "33%"
            }}
          />
          <div
            style={{
              color: settings.blue,
              fontFamily: settings.monospace,
              fontSize: "1rem",
              margin: `0 0 15px ${settings.gutter}px`
            }}
          >
            +
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: PLOTLYLOGO }}
            style={{
              width: "100%",
              maxWidth: "33%"
            }}
          />
        </div>
        <p
          style={{
            color: settings.blue,
            fontFamily: settings.monospace,
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            margin: "0 auto",
            maxWidth: "480px",
            padding: "0 0 0 20px",
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          present
        </p>
        <h1
          style={{
            marginTop: "4rem",
            textAlign: "center"
          }}
        >
          Spectacle Editor
        </h1>
        <h2
          style={{
            color: settings.highlightBlue,
            fontFamily: settings.sans,
            fontWeight: "100",
            marginTop: "0.25rem",
            textAlign: "center"
          }}
        >
          The world’s first open-source presentations editor.
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: LOGO }}
          style={{
            margin: "2rem auto 0",
            maxWidth: "240px",
            width: "100%"
          }}
        />
        <p style={{textAlign: "center"}}>
          <a
            href="https://github.com/FormidableLabs/spectacle-editor"
            key="linkGithub"
            style={{
              backgroundColor: settings.black,
              border: "none",
              borderRadius: "4px",
              color: "#ffffff",
              display: "inline-block",
              fontSize: "1.2rem",
              lineHeight: 1,
              margin: "1rem auto 0",
              padding: "0.75rem 1rem",
              textDecoration: "none",
              transition: "box-shadow ease-in 193ms",
              ":hover": {
                boxShadow: `0px 2px 10px 0px rgba(22, 22, 22, 0.75)`,
                transition: "box-shadow ease-in 193ms"
              }
            }}
            target="_blank"
          >
            <i
              className="octicon octicon-mark-github"
              style={{
                marginRight: "0.5em",
                fontSize: "inherit"
              }}
            /> View on GitHub
          </a>
        </p>
        <Details />
        <Download />
        <h3
          style={{
            marginTop: "5rem",
            textAlign: "center"
          }}
        >
          View sample presentations
        </h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a
              href="http://help.plot.ly/sample-presentations/goldman/"
              key="sampleGoldman"
              target="_blank"
            >
              Goldman Sachs
            </a>
          </li>
          <li style={styles.listItem}>
            <a
              href="http://verazab.github.io/presentations/redhat/"
              key="sampleRedHat"
              target="_blank"
            >
              Red Hat
            </a>
          </li>
          <li style={styles.listItem}>
            <a
              href="http://help.plot.ly/sample-presentations/gates/"
              key="sampleGates"
              target="_blank"
            >
              Bill & Melinda Gates
            </a>
          </li>
        </ul>

        <Footer
          background={`linear-gradient(0deg, ${settings.black}, ${settings.darkCharcoal})`}
          logoColor="white"
        />
      </main>
    );
  }
}

export default Radium(Home);
