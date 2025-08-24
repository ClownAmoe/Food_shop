import { CLASSNAME } from "./classname";
import { RestCardProps } from "./type";

export default function RestaurantCard({
  img,
  mainText,
  percent,
  role,
}: RestCardProps) {
  return (
    <div
      className={CLASSNAME.WRAPPER}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={CLASSNAME.CONTAINER}>
        <p className={CLASSNAME.DISCOUNT}>-{percent}</p>
        <div className={CLASSNAME.TEXT_WRAPPER}>
          <p className={CLASSNAME.ORANGE_TEXT}>Restaurant</p>
          <p className={CLASSNAME.TITLE}>{mainText}</p>
        </div>
      </div>
    </div>
  );
}
