import { machineContent } from "@/lib/machine-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(machineContent(true), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
