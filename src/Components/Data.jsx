import React from 'react';

function Data({numbers, handleBtn}) {
  return (

       <div className="grid grid-cols-4 sm:w-80 sm:gap-2">

        {numbers.map((item) => {
          return (
            <button key={item} className="text-white p-3 text-xl border-white border-[1px] bg-slate-900 rounded
            hover:bg-slate-950" onClick={()=>{
              handleBtn(item);
            }}>
              {item}
            </button>
          );
        })}
      </div>
    
  )
}

export default Data
