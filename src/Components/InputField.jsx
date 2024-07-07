import React from 'react';


function InputField({val}) {
  return (
    
       <div className="md:w-80 flex justify-center p-5">
        <input type="text" readOnly value={val} 
        className="text-slate-900 font-semibold text-xl bg-gray-200 p-3 pr-8
       border-slate-400 border-[2px] focus:outline-none focus:rounded"/>
      </div>


  )
}

export default InputField
