import PartnerCard from "../partnerCard/partnerCard";

export default function Partners() {
  return (
    <div className="w-[95%] h-fit mt-14 flex flex-col gap-4 md:flex-row">
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
