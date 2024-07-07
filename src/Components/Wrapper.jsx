import InputField from './InputField';
import Data from './Data';
import  { useState } from "react";

function Wrapper() {
    let numbers = [ "AC", "(", ")","/","7", "8","9", "*", "6","5","4","-","1","2","3","+","%", "0", ".", "="];

    let [val,setVal]=useState("");
    let handleBtn=(buttonText)=>{
    if(buttonText === 'AC'){
      setVal("");
    } else if (buttonText === '='){
    const res = eval(val);
    setVal(res);
    } else {
      const newVal = val +buttonText;
      setVal(newVal);
    }
  }

  return (
    <div className="sm:grid sm:justify-items-center max-[640px]:mx-3">
      <InputField val={val}/>
      <Data numbers={numbers} handleBtn={handleBtn}/>
    </div>
  )
}

export default Wrapper;
