import React from "react";
import { Button } from "../Styles";

const AdminButton: React.FC<{ type?: "button" | "submit" | "reset" }> = ({
  type,
}) => {
  return <Button type={type}>Submit</Button>;
};

export default AdminButton;
