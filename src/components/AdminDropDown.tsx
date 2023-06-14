import React from "react";
import { ProgrammeDataType } from "../types/StaticDataTypes";
import "../App.css";

const AdminDropDown: React.FC<{ programme: ProgrammeDataType[] }> = ({
  programme,
}) => {
  return (
    <div className="container">
      <h2>Video Category</h2>
      <div className="select-box">
        <div className="options-container">
          {programme &&
            programme.map((p) => (
              <div key={p.tag} className="option">
                <input
                  type="radio"
                  className="radio"
                  id={p.tag}
                  name={p.name}
                />
                <label htmlFor={p.tag}>{p.title}</label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default AdminDropDown;
