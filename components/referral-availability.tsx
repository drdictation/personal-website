import { referralPolicy } from "@/lib/site-content";

export function ReferralAvailability() {
  return (
    <section className="shell section practice-note" aria-labelledby="referral-availability">
      <h2 id="referral-availability">{referralPolicy.title}</h2>
      <p>{referralPolicy.practice}</p>
      <p>{referralPolicy.capacity} {referralPolicy.secondOpinions} {referralPolicy.interstate}</p>
    </section>
  );
}
