import React from "react";
import Radium from "radium";

// Settings
import settings from "../../../spectacle-editor-settings";

class Details extends React.Component {
  getStyles() {
    return {
      grid: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "2.5rem auto 0",
        maxWidth: "480px",
        padding: "0 0.5rem",
        [`@media ${settings.mediaSizes.medium}`]: {
          flexWrap: "nowrap",
          justifyContent: "space-between",
          maxWidth: "70rem"
        }
      },
      colText: {
        flex: "1 1 453px",
        margin: "0 0 3rem 0",
        order: "2",
        padding: "0 2rem"
      },
      colImg: {
        flex: "1 1 435px",
        order: "1",
        textAlign: "center"
      },
      subHeading: {
        color: settings.highlightBlue,
        fontFamily: settings.sans,
        fontWeight: "100",
        margin: "1rem 0"
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <section style={{ marginTop: "2.5rem" }}>
        <div style={styles.grid}>
          <div style={styles.colText}>
            <h3 style={styles.subHeading}>
              Drag & Drop
            </h3>
            <p>
              Create <a href="http://formidable.com/open-source/spectacle/" key="spectacle">Spectacle</a> based presentations using a drag & drop interface.
            </p>
          </div>
          <div style={styles.colImg}>
            <img
              alt=""
              src="./static/drag-drop.gif"
              width="480"
              height="auto"
              style={{
                borderRadius: "4px",
                border: `1px solid ${settings.darkBlue}`,
                boxShadow: `0px 2px 10px 0px rgba(22, 22, 22, 0.75)`
              }}
            />
          </div>
        </div>
        <div style={styles.grid}>
          <div style={styles.colText}>
            <h3 style={styles.subHeading}>
              Plot.ly Integration
            </h3>
            <p>
              Add your plot.ly charts seamlessly.
            </p>
          </div>
          <div style={styles.colImg}>
            <img
              alt=""
              src="./static/screenshot-chart.png"
              width="480"
              height="auto"
              style={{
                borderRadius: "4px",
                border: `1px solid ${settings.darkBlue}`,
                boxShadow: `0px 2px 10px 0px rgba(22, 22, 22, 0.75)`
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Radium(Details);
