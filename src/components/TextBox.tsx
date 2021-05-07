import React, { useEffect, useState } from "react";

type Props = {
  label?: string;
  type: "text" | "password" | "email";
  textChange: (value: string) => void;
  placeholder?: string;
};
const TextBox: React.FC<Props> = ({ label, type, textChange, placeholder }) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    textChange(value);
  }, [value]);

  return (
    <div className="form-group my-4">
      {label ? <label>{label}</label> : null}
      <input
        type={type}
        className="form-control"
        value={value}
        placeholder={placeholder}
        onBlur={() => setTouched(true)}
        onChange={(e) => setValue(e.target.value)}
      />
      {touched && value.trim() === "" ? (
        <small className="text-danger">This field is required</small>
      ) : null}
    </div>
  );
};
export default TextBox;
