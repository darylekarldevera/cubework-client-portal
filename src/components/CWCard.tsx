import { ReactNode } from "react";

export default function CWCard({ children }: { children: ReactNode }) {
  return (
    <div>
      { children }
    </div>
  );
}
