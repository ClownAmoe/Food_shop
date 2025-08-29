import { dropdownProps } from "./type";

export default function Dropdown({ name, options }: dropdownProps) {
  return (
    <select name={name}>
      {options.map((a, i) => (
        <option value={a} key={i}>
          {a}
        </option>
      ))}
    </select>
  );
}
