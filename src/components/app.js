import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// base stylesheet
import stylesheet from "../spectacle-editor-stylesheet";

class App extends React.Component {
  render() {
    /*eslint-disable no-undef */
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot
        radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}
      >
        <Style rules={stylesheet} />
        {this.props.children}
      </StyleRoot>
    );
    /*eslint-enable no-undef */
  }
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.node,
    React.PropTypes.element
  ])
};

export default Radium(App);
