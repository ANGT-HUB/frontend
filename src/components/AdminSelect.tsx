import React from "react";
import { Container, Label, Option, Select } from "../Styles";
import { AdminSelectProps } from "../types/inputTypes";
import { BaseDataType } from "../types/StaticDataTypes";

const AdminSelect = <T extends BaseDataType>({
  name,
  label,
  value,
  required,
  placeholder,
  optionsData,
  onChange,
}: AdminSelectProps<T>) => {
  return (
    <Container>
      <Select
        name={name}
        onChange={onChange}
        id={name}
        value={value}
        placeholder={placeholder}
      >
        {/* <Option>Select Options</Option> */}
        {optionsData &&
          optionsData.map((p) => (
            <Option key={p.code} value={p.name}>
              {p.name}
            </Option>
          ))}
      </Select>
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
};
export default AdminSelect;
