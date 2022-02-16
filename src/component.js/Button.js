import React from "react";

export default function Button() {
    let myStyle={
        border:'solid',
    }
  return (
    <div>
      <div className="container" />
      <div className="row row-cols-4" >
        <div className="col btn btn-primary" type="button" style={myStyle} >Clear
        </div>
        <div className=" col btn btn-primary" type="button" style={myStyle} >%
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle} >Back
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle} >Divide
        </div>
      </div>
      <div className="row row-cols-4">
        <div className="col btn btn-dark" type="button" style={myStyle} >7
        </div>
        <div className="col btn btn-dark" type="button" style={myStyle} >8
        </div>
        <div className="col btn btn-dark" type="button" style={myStyle} >9
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle} >X
        </div>
      </div>
      <div className="row row-cols-4">
        <div className="col btn btn-dark" type="button" style={myStyle} >4
        </div>
        <div className="col btn btn-dark" type="button" style={myStyle} >5
        </div>
        <div className="col btn btn-dark" type="button" style={myStyle} >6
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle} >-   
        </div>
      </div>
      <div className="row row-cols-4">
        <div className="col btn btn-dark" type="button" style={myStyle}>1
        </div>
        <div className="col btn btn-dark" type="button" style={myStyle}>2
        </div>
        <div className="col btn btn-dark" type="button" style={myStyle}>3
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle}>+
        </div>
      </div>
      <div className="row row-cols-4">
        <div className="col btn btn-dark" type="button" style={myStyle} >00
       </div>
        <div className="col btn btn-dark" style={myStyle} >0
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle} >.
        </div>
        <div className="col btn btn-primary" type="button" style={myStyle} >=
        </div>
      </div>
    </div>
  );
}
