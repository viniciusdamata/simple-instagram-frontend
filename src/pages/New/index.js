import React, { Component } from "react";

class New extends Component {
  render() {
    return (
      <div>
        <div className="preview-image">
          <img src="" alt="" srcset=""/>
        </div>
        <input type="file" accept="image/*" capture="camera" name="novo post" ></input>
      </div>
    );
  }
}

export default New;
