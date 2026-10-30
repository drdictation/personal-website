import { ProcedureDetail } from "@/components/procedure-detail";
import { buildMetadata } from "@/lib/metadata";
import { procedureDetails } from "@/lib/procedure-content";

export const metadata = buildMetadata(
  "Gastroscopy Melbourne | A/Prof Chamara Basnayake",
  procedureDetails.gastroscopy.description,
  "/procedures/gastroscopy",
  { exactTitle: true }
);

export default function GastroscopyPage() {
  return <ProcedureDetail slug="gastroscopy" />;
}
