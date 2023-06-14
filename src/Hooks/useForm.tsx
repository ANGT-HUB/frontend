import { useState, ChangeEvent } from "react";
import { BaseUserInfo } from "../types/inputTypes";

const useForm = <T,>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { type, name } = e.target;

    const getValue = () => {
      if (type === "checkbox") {
        return (e.target as HTMLInputElement).checked;
      } else if (type === "select-multiple") {
        return Array.from((e.target as HTMLSelectElement).selectedOptions).map(
          (o) => o.value
        );
      }
      return (e.target as HTMLInputElement).value;
    };

    const value = getValue();

    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { onChange, values, setValues };
};

export default useForm;
