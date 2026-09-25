"use client";

import { Printer } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PrintButton({ slug }: { slug: string }) {
  return (
    <button
      onClick={() => {
        trackEvent("project_one_pager_print", { project: slug });
        window.print();
      }}
      className="print:hidden inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
    >
      <Printer size={14} />
      Save as PDF
    </button>
  );
}
