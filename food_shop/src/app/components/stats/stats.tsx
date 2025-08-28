import MiniStats from "../miniStats/miniStats";

import { CLASSNAME } from "./classname";
import { statsList } from "./list";

export default function Stats() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.CONTAINER}>
        {statsList.map((a, i) => (
          <MiniStats nums={a.nums} desc={a.desc} key={i} />
        ))}
      </div>
    </div>
  );
}
