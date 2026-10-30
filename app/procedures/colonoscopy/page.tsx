import { ProcedureDetail } from "@/components/procedure-detail";
import { buildMetadata } from "@/lib/metadata";
import { procedureDetails } from "@/lib/procedure-content";

export const metadata = buildMetadata(
  "Colonoscopy Melbourne | A/Prof Chamara Basnayake",
  procedureDetails.colonoscopy.description,
  "/procedures/colonoscopy",
  { exactTitle: true }
);

export default function ColonoscopyPage() {
  return <ProcedureDetail slug="colonoscopy" />;
}
