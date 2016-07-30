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

class Home extends React.Component {

  render() {
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
            marginTop: "3rem",
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
            maxWidth: "320px",
            width: "100%"
          }}
        />
      <p>
        Create <a href="http://formidable.com/open-source/spectacle/">Spectacle</a> based presentations using a drag & drop interface.
      </p>
      <p>
        <img
          alt=""
          src="./static/drag-drop.gif"
          width="480"
          height="288"
        />
      </p>

        <p>Add your plot.ly charts with seamless plot.ly integration.</p>
        <p>[chart-screenshot.gif]</p>

        <h3>View sample presentations</h3>
        [Goldman Sachs]()
        [Red Hat]()
        [Bill & Melinda Gates]()

        <Download />
        <Footer>
          <span>& plot.ly</span>
        </Footer>
      </main>
    );
  }
}

export default Radium(Home);
