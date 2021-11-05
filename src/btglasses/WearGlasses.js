import React, { Component } from "react";

export default class WearGlasses extends Component {
  render() {
    let { state1 } = this.props;

    return (
      <div style={{ display: "flex" }}>
        <img src={state1.img} width="20%" style={{ position: "relative" }} />
        <img
          src={state1.img2}
          width="15%"
          style={{ position: "absolute", bottom: "100px", left: "35px" }}
        />
      </div>
    );
  }
}
