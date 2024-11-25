import React from "react";

function Input({
  name,
  head,
  type = "text",
  value,
  onChange,
  className = "",
  place,
  ...props
}) {
  return (
    <div className="flex flex-col me-8">
      <label htmlFor={name} className="text-base font-semibold m-2">
        {head}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={place}
        className={`h-12 w-64 md:w-80 bg-black-box border-2 border-fbor rounded-md p-4 ${className}`}
      ></input>
    </div>
  );
}

export default Input;
