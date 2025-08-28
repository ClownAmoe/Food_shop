import PartnerCard from "../partnerCard/partnerCard";

import { CLASSNAME } from "./classname";

export default function Partners() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <PartnerCard
        src="/partner/partner1.png"
        topic="Partner with us"
        desc="Signup as a business"
        profit="Earn more with lower fees"
      />
      <PartnerCard
        src="/partner/partner2.png"
        topic="Ride with us"
        desc="Signup as a rider"
        profit="Avail exclusive perks"
      />
    </div>
  );
}
