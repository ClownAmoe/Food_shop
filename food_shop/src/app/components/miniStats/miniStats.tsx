import { MiniStatsProps } from "./type";

export default function MiniStats({ nums, desc }: MiniStatsProps) {
  return (
    <div className="flex flex-col items-center justify-center px-10 text-white border-r-white border-b-1 md:border-b-0 md:border-r-1 last:border-r-0">
      <h1 className="text-6xl">{nums}+</h1>
      <p className="text-2xl">{desc}</p>
    </div>
  );
}
