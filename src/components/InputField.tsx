import React from "react";
import { Container, IconContainer, Input, Label } from "../Styles";
import { inputFieldProps } from "../types/inputTypes";

export default function InputField({
  type,
  name,
  value,
  label,
  autoComplete,
  placeholder,
  icon,
  onChange,
}: inputFieldProps) {
  return (
    <Container>
      <Input
        type={type}
        name={name}
        value={value}
        autoComplete={autoComplete}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Label htmlFor={name}>{label}</Label>
      <IconContainer>{icon}</IconContainer>
    </Container>
  );
}
