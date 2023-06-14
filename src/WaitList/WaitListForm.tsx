import React from "react";
import InputField from "../components/InputField";
import useForm from "../Hooks/useForm";
import { BaseUserInfo } from "../types/inputTypes";
import { FaEnvelope, FaUser, FaPhoneAlt } from "react-icons/fa";
import AdminSelect from "../components/AdminSelect";
import AdminDropDown from "../components/AdminDropDown";
import { ProgrammeData } from "../StaticData/Programmes";
import { BaseDataType } from "../types/StaticDataTypes";
import AdminButton from "../components/AdminButton";
import { CountriesData } from "../StaticData/Countries";
import AdminCheckBox from "../components/AdminCheckBox";

export default function WaitListForm() {
  const initialState: BaseUserInfo = {
    email: "",
    firstName: "",
    lastName: "",
    program: "",
    phoneNumber: "",
    agreement: false,
    country: "",
  };
  const { onChange, values, setValues } = useForm<BaseUserInfo>(initialState);
  const {
    email,
    firstName,
    lastName,
    program,
    phoneNumber,
    agreement,
    country,
  } = values;
  return (
    <form>
      <InputField
        type="email"
        name="email"
        value={email}
        label="Email"
        placeholder={" "}
        required={true}
        autoComplete={"true"}
        icon={<FaEnvelope />}
        onChange={onChange}
      />
      <AdminSelect<BaseDataType>
        name={"program"}
        label={"program"}
        value={program}
        placeholder={"Programmes"}
        optionsData={ProgrammeData}
        required={true}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="firstName"
        value={firstName}
        label="First Name"
        placeholder={" "}
        icon={<FaUser />}
        required={true}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="lastName"
        value={lastName}
        label="Last Name"
        placeholder={" "}
        icon={<FaUser />}
        required={true}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        label="Phone Number"
        placeholder={" "}
        icon={<FaPhoneAlt />}
        required={true}
        onChange={onChange}
      />
      <AdminSelect<BaseDataType>
        name={"country"}
        label={"country"}
        value={country}
        placeholder={"Country"}
        optionsData={CountriesData}
        required={true}
        onChange={onChange}
      />
      <AdminCheckBox
        label={"By signing up, I understand and agree to ANG-HUB"}
        type={"checkbox"}
        value={agreement}
        name={"agreement"}
        onChange={onChange}
      />
      {/* <input type="checkbox" checked={agreement} value={"agreement"} name={"agreement"} onChange={onChange}/> */}
      {/* <AdminDropDown programme={ProgrammeData} /> */}
      <AdminButton type="submit" />
    </form>
  );
}
