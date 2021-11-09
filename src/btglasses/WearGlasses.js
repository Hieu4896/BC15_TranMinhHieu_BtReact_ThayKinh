import React, { Component } from "react";

export default class WearGlasses extends Component {
  render() {
    let { state1 } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={state1.img}
          width="20%"
          style={{
            position: "relative",
          }}
        />
        <img
          src={state1.img2}
          width="10%"
          style={{ position: "absolute", bottom: "225px", left: "700px" }}
        />
      </div>
    );
  }
}
