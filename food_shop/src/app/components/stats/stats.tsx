import MiniStats from "../miniStats/miniStats";
import { statsList } from "./list";

export default function Stats() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="bg-[#FC8A06] p-6 h-full rounded-lg flex flex-col md:flex-row justify-between w-[95%] items-center gap-8">
        {statsList.map((a, i) => (
          <MiniStats nums={a.nums} desc={a.desc} key={i} />
        ))}
      </div>
    </div>
  );
}
