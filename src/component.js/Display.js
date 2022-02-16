import React from "react";

export default function Display() {
    let myStyle={
        border: 'solid'
    }
  return (
    <div>
      <div className="mb-3" style={myStyle} >
        <textarea className="form-control" id="myBox" rows="6"></textarea>
      </div>
    </div>
  );
}
