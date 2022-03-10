import React from "react";

export default function Display({data,result}) {

  let myStyle = {
    border: "solid",
  };
  return (
    <div className="mb-3" style={myStyle}>
      <textarea
        className="form-control"
        value={data}
        id="myBox"
        rows="2"
        readOnly
      ></textarea>
      <textarea
        className="form-control"
        value={result}
        id="myBox"
        rows="1"
        readOnly
      ></textarea>
    </div>
  );
}
