import { CLASSNAME } from "./classname";
import { linksListProps } from "./type";

export default function LinksList({ name, list }: linksListProps) {
  return (
    <div>
      <h1 className={CLASSNAME.HIGH_TITLE}>{name}</h1>
      <div className={CLASSNAME.LINKS_CONTAINER}>
        {list.map(({ name, link }, i) => (
          <a href={link} key={i} className={CLASSNAME.LINK_DECOR}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
