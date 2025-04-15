"use client";

import { useRef } from "react";
import FPE from "@/components/fpe";
import html2canvas from "html2canvas-pro";
import { toast } from "sonner";
import flightPlans from "@/data/flightPlans.json" assert { type: "json" };
import { useParams } from "next/navigation";

export default function Home() {
  const fpeRef = useRef<HTMLDivElement>(null);

  const params = useParams();
  const selectedId = parseInt(params.id as string, 10);
  const plan = flightPlans.find((p) => p.id === selectedId);

  const handleScreenshot = async () => {
    if (!fpeRef.current) return;

    const canvas = await html2canvas(fpeRef.current);
    canvas.toBlob((blob) => {
      if (blob) {
        navigator.clipboard
          .write([new ClipboardItem({ "image/png": blob })])
          .catch((err: unknown) => {
            toast.error("Failed to copy screenshot");
            console.error("Failed to copy screenshot: ", err);
          });
        toast.success("Screenshot copied to clipboard!");
      }
    });
  };

  if (!plan) {
    return (
      <main className="p-6 flex flex-col items-center justify-center text-center text-gray-600">
        <h1 className="text-2xl font-semibold mb-2 text-red-600">
          Flight Plan Not Found
        </h1>
        <p className="mb-4 max-w-md">
          Sorry, we couldn’t find a flight plan with ID{" "}
          <strong>{params.id}</strong>.
        </p>
        <p className="text-sm text-gray-400">
          Please select a valid plan from the sidebar.
        </p>
      </main>
    );
  }

  return (
    <main className="p-6 overflow-y-auto">
      <div className="mb-4">
        <button
          onClick={() => {
            handleScreenshot().catch(() => {
              toast.error("Failed to copy screenshot");
            });
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Copy Screenshot
        </button>
      </div>
      <div>
        <FPE plan={plan} ref={fpeRef} />
      </div>
    </main>
  );
}
