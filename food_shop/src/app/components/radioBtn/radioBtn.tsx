import { Radio } from "./type";

import { CLASSNAME } from "./classname";

export default function RadioBtn({ role, onChange, checked }: Radio) {
  return (
    <div>
      <input
        type="radio"
        id={role}
        name={role}
        value={role}
        onChange={(e) => onChange(e.target.value)}
        className={CLASSNAME.DEFAULT}
        checked={checked}
      />
      <label htmlFor={role} className={CLASSNAME.LABEL}>
        {role}
      </label>
    </div>
  );
}
