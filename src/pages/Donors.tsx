import React from "react";
import DonorTable from "../components/DonorTable";
import { donors } from "../data/donors";

function money(n: number) {
  return new Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
  }).format(n || 0);
}

export default function Donors() {
  const total = donors.reduce((s, d) => s + d.amount, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card p-6">
          <div className="subtle">Total Raised</div>
          <div className="mt-1 text-3xl font-bold">{money(total)}</div>
        </div>
        <div className="card p-6">
          <div className="subtle">Total Donors</div>
          <div className="mt-1 text-3xl font-bold">{donors.length}</div>
        </div>
      </div>
      <DonorTable donors={donors} />
    </main>
  );
}
