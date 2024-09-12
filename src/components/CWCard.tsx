import { ReactNode } from "react";

export default function CWCard({ children }: { children: ReactNode }) {
  return (
    <div
      // className="rounded-3xl overflow-hidden shadow-xl border-red-900"
    >
      { children }
    </div>
  );
}