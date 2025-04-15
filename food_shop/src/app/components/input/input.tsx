import { CLASSNAME } from "./classname";
import { inputProps } from "./type";
export default function Input({
  change,
  placeholder,
  type,
  variant,
}: inputProps) {
  let classname = variant === "Search" ? CLASSNAME.SEARCH : CLASSNAME.LOGIN;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classname}
      onChange={change}
    />
  );
}
