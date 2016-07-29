import React from "react";
import Radium from "radium";

// Settings
import { Header, Footer } from "formidable-landers";

// Child Components
import Download from "./components/download";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Download />
        <Footer />
      </main>
    );
  }
}

export default Radium(Home);
