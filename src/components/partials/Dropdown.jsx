import React from "react";

function Dropdown({ title, options,func }) {
  // console.log(options)
  return (
    <div className="select ">
      <select
      onChange={func}
        className="bg-zinc-600 rounded-md text-center px-2 py-1 outline-none cursor-pointer"
        defaultValue=''
        name="format"
        id="format"
       >    
       
      <option value='' disabled hidden >
          {title}
        </option>

        {options.map((o, i) => (
          <option key={i} value={o}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
