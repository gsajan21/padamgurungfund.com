// src/pages/Home.tsx
import DonorTable from "../components/DonorTable";
import { donors } from "../data/donors";

function money(n: number) {
  return new Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
  }).format(n || 0);
}

export default function Home() {
  const total = donors.reduce((s, d) => s + d.amount, 0);

  return (
    <>
      {/* Header like before */}
      <header className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h1 className="h1">Padam Gurung Fund</h1>
          <p className="mt-2 text-white/90">Transparent, simple donor tracking.</p>
        </div>
      </header>

      {/* Main content with stats + table */}
      <main className="mx-auto max-w-5xl px-4 -mt-6 space-y-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card p-6">
            <div className="subtle">Total Raised</div>
            <div className="mt-1 text-3xl font-bold">{money(total)}</div>
          </div>
          <div className="card p-6">
            <div className="subtle">Total Donors</div>
            <div className="mt-1 text-3xl font-bold">{donors.length}</div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Donors</h2>
          <DonorTable donors={donors} />
        </section>
      </main>
    </>
  );
}
