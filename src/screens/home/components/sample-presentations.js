import React from "react";
import Radium from "radium";

class SamplePresentations extends React.Component {
  getStyles() {
    return {
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
      <div style={{ marginTop: "5rem" }}>
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
              href="http://help.plot.ly/sample-presentations/"
              key="sample-1"
              target="_blank"
            >
              Sample 1
            </a>
          </li>
          <li style={styles.listItem}>
            <a
              href="http://help.plot.ly/sample-presentations/"
              key="sample-2"
              target="_blank"
            >
              Sample 2
            </a>
          </li>
          <li style={styles.listItem}>
            <a
              href="http://help.plot.ly/sample-presentations/"
              key="sample-3"
              target="_blank"
            >
              Sample 3
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium(SamplePresentations);
