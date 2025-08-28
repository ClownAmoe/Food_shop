import { CLASSNAME } from "./classname";
import { MiniStatsProps } from "./type";

export default function MiniStats({ nums, desc }: MiniStatsProps) {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <h1 className={CLASSNAME.NUMBERS_TEXT}>{nums}+</h1>
      <p className={CLASSNAME.SECONDARY_TEXT}>{desc}</p>
    </div>
  );
}
