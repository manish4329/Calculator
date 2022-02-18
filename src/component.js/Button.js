import React, {useState} from "react";
import Display from "./Display";

export default function Button() {
    const[value, setValue] = useState("Enter");
    const[result, setResult]= useState("for Result press = ")

    const Clear= ()=>{
        setValue('');
        setResult('');
    }
    const Divide = ()=>{
      let numb= value+'/';
      setValue(numb)
    }
    const Back = ()=>{
      console.log()
    }
    const Percent = ()=>{
      let numb= value+'%';
      setValue(numb)
    }
    const Seven = ()=>{
      let numb= value+7;
      setValue(numb)
    }
    const Eight = ()=>{
      let numb= value+8;
      setValue(numb)
    }
    const Nine = ()=>{
      let numb= value+9;
      setValue(numb)
    }
    const Multiply = ()=>{
      let numb= value+'X';
      setValue(numb)
    }
    const Four = ()=>{
      let numb= value+4;
      setValue(numb)
    }
    const Five = ()=>{
      let numb= value+5;
      setValue(numb)
    }
    const Six = ()=>{
      let numb= value+6;
      setValue(numb)
    }
    const Minus = ()=>{
      let numb= value+'-';
      setValue(numb)
    }
    const One = ()=>{
      let numb= value+1;
      setValue(numb)
    }
    const Two = ()=>{
      let numb= value+2;
      setValue(numb)
    }
    const Three = ()=>{
      let numb= value+3;
      setValue(numb)
    }
    const Plus = ()=>{
      let numb= value+'+';
      setValue(numb)
    }
    const Double = ()=>{
      let numb= value+0+0;
      setValue(numb)
    }
    const Zero = ()=>{
      let numb= value+0;
      setValue(numb)
    }
    const Dot = ()=>{
      let numb= value+'.';
      setValue(numb)
    }
    const Equal = ()=>{
      console.log()
    }
    let myStyle={
        border:'solid',
    }

  return (
    <div>
      <Display data={value} result={result}/>
      <div className="container" />
      <div className="row row-cols-4" >
        <button className="col btn btn-primary" type="button" onClick={Clear} style={myStyle} >Clear
        </button>
        <button className=" col btn btn-primary" type="button" onClick={Percent} style={myStyle} >%
        </button>
        <button className="col btn btn-primary" type="button" onClick={Back} style={myStyle} >Back
        </button>
        <button className="col btn btn-primary" type="button" onclick={Divide} style={myStyle} >divide
        </button>
      </div>
      <div className="row row-cols-4">
        <button className="col btn btn-dark" type="button" onClick={Seven} style={myStyle} >7
        </button>
        <button className="col btn btn-dark" type="button" onClick={Eight} style={myStyle} >8
        </button>
        <button className="col btn btn-dark" type="button" onClick={Nine} style={myStyle} >9
        </button>
        <button className="col btn btn-primary" type="button" onClick={Multiply} style={myStyle} >X
        </button>
      </div>
      <div className="row row-cols-4">
        <button className="col btn btn-dark" type="button" onClick={Four} style={myStyle} >4
        </button>
        <button className="col btn btn-dark" type="button" onClick={Five} style={myStyle} >5
        </button>
        <button className="col btn btn-dark" type="button" onClick={Six} style={myStyle} >6
        </button>
        <button className="col btn btn-primary" type="button" onClick={Minus} style={myStyle} >-   
        </button>
      </div>
      <div className="row row-cols-4">
        <button className="col btn btn-dark" type="button" onClick={One} style={myStyle}>1
        </button>
        <button className="col btn btn-dark" type="button" onClick={Two} style={myStyle}>2
        </button>
        <button className="col btn btn-dark" type="button" onClick={Three} style={myStyle}>3
        </button>
        <button className="col btn btn-primary" type="button" onClick={Plus} style={myStyle}>+
        </button>
      </div>
      <div className="row row-cols-4">
        <button className="col btn btn-dark" type="button" onClick={Double} style={myStyle} >00
       </button>
        <button className="col btn btn-dark" type="button" onClick={Zero} style={myStyle} >0
        </button>
        <button className="col btn btn-primary" type="button" onClick={Dot} style={myStyle} >.
        </button>
        <button className="col btn btn-primary" type="button" onClick={Equal} style={myStyle} >=
        </button>
      </div>
    </div>
  );
}
