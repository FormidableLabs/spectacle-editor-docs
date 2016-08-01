import React from "react";
import Radium from "radium";

// Settings
import settings from "../../../spectacle-editor-settings";

class Download extends React.Component {
  getStyles() {
    return {
      col: {
        flexBasis: "350px",
        margin: "1rem auto 2rem",
        textAlign: "center"
      },
      button: {
        backgroundColor: settings.darkBlue,
        border: "none",
        borderRadius: "4px",
        color: "#ffffff",
        display: "inline-block",
        lineHeight: 1,
        margin: "1rem 0.5rem 0",
        padding: "0.5rem 2rem",
        transition: "background-color ease-in 193ms, box-shadow ease-in 193ms",
        ":hover": {
          backgroundColor: settings.darkerBlue,
          boxShadow: `0px 2px 10px 0px rgba(22, 22, 22, 0.75)`,
          transition: "background-color ease-out 225ms, box-shadow ease-out 225ms"
        }
      },
      buttonText: {
        margin: 0
      },
      subHeading: {
        color: settings.highlightBlue,
        fontFamily: settings.sans,
        fontSize: "2rem",
        fontWeight: "100",
        margin: "1rem 0 0"
      },
      caption: {
        color: settings.lighterGray,
        fontSize: "0.85em",
        letterSpacing: "0.01em",
        margin: "0.5rem 0 0",
        textAlign: "center"
      },
      octicon: {
        marginRight: "0.5em",
        [`@media ${settings.mediaSizes.medium}`]: {
          fontSize: "24px"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <section style={{ marginTop: "5rem" }}>
        <h3
          style={{
            textAlign: "center"
          }}
        >
          Download
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "800px"
          }}
        >
          <div style={styles.col}>
            <p style={styles.subHeading}>Mac</p>
            <p style={styles.caption}>
              Requires 10.9 or newer
            </p>
            <a key="downloadMac" style={styles.button}>
              <p style={styles.buttonText}>
                <i
                  className="octicon octicon-desktop-download"
                  style={styles.octicon}
                />
                Download
              </p>
            </a>
          </div>
          <div style={styles.col}>
            <p style={styles.subHeading}>Windows</p>
            <p style={styles.caption}>
              Requires Windows 7 or newer
            </p>
            <a key="downloadWin" style={styles.button}>
              <p style={styles.buttonText}>
                <i
                  className="octicon octicon-desktop-download"
                  style={styles.octicon}
                />
                Download
              </p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Radium(Download);
