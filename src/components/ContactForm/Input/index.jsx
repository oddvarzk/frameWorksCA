import React from "react";

export const Input = React.forwardRef(({ label, type, id, placeholder, ...rest }, ref) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        ref={ref}
        id={id}
        type={type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
});

export default Input;
