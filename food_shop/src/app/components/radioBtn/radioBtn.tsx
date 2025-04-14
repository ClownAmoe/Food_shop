"use client";
import { useState } from "react";
import { Radio } from "./type";
import { CLASSNAME } from "./classname";

export default function RadioBtn({ role }: Radio) {
  const [selectedRole, setSelectedRole] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
  };
  return (
    <div>
      <input
        type="radio"
        id={role}
        name="role"
        value={role}
        onChange={handleChange}
        className={CLASSNAME.DEFAULT}
      />
      <label htmlFor={role} className={CLASSNAME.LABEL}>
        {role}
      </label>
    </div>
  );
}
