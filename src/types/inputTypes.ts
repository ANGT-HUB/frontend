import { MouseEventHandler } from "react";
import { IconType } from "react-icons/";

export interface inputFieldProps {
  label?: string;
  type: string;
  name: string;
  value: string | number;
  autoComplete?: string;
  required: boolean;
  placeholder: string;
  icon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type BaseUserInfo = {
  email: string;
  firstName: string;
  lastName: string;
  program: string;
  phoneNumber: string;
  agreement: boolean;
  country: string;
};

export type CheckboxProps = {
  value: boolean;
  name: string;
  type: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type AdminSelectProps<T> = {
  label?: string;
  name: string;
  value: string | number;
  required: boolean;
  optionsData: T[];
  placeholder: string;
  icon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type AdminButtonProps = {
  type?: string;
  size?: number;
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  isDisable?: string;
};

export type AdminImageProps = {
  source: string;
  altText: string;
};
