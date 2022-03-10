import React, {useState} from "react";
import Display from "./Display";

export default function Button({btns}) {
  const [data, setData]=useState("Enter the Value");
  const [result, setResult]= useState("result");
  const [previousOperator, setPreviousOperator]= useState(null);
  const executeOperation=(op1, op2, numb)=>{
    switch (numb) {
      case "+":
       return op1+op2;
      case "-":
        return op1-op2;
      case "X":
        return op1*op2;
      case "divide":
        return op1/op2;
      case"%":
      return op1%op2;
    
      default:
        return numb;
    }
  }
  const onBtnClick=(number)=>{
     if(isNaN(number)){
       onOperationClick(number);
      }
      else{
        number=data+number;
        setData(number);
      }
  }
  const onOperationClick=(numb)=>{
   if(numb==="C"){
     setData('');
     setResult('');
   }
   else{
    if(!previousOperator){
      setPreviousOperator(numb);
      setData(data+numb);
    }
    else{
      const operands= data.split(previousOperator);
      const op1=Number(operands[0]);
      const op2=Number(operands[1]);
 
      const operation=executeOperation(op1, op2, previousOperator);
      setResult(operation);
      setData(operation+numb);
    }
   }
  }
  return(
    <div>
      <Display data={data} result={result}/>
      <div className="container">
        {
          btns.map((btn,_)=>
            btn.map((value,i)=>
            {return(
            <button type="button" className="btn col-sm-3 btn-dark" key={i} onClick={() => onBtnClick(value)}>{value}</button>
            )})  
          )
        }
      </div>
    </div>
    )
  }
