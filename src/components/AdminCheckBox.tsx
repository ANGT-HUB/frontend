import React from "react";
import { CheckboxProps } from "../types/inputTypes";

const AdminCheckBox = ({
  label,
  type,
  value,
  name,
  onChange,
}: CheckboxProps) => {
  return (
    <div>
      <input
        type={type}
        id={name}
        checked={value}
        value={name}
        name={name}
        onChange={onChange}
      />

      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default AdminCheckBox;
// 07080261278
