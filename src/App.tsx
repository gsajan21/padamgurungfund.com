import { useEffect, useMemo, useState } from "react";
import DonorTable from "./components/DonorTable";
import type { Donor } from "./components/DonorTable";
import AddDonorModal from "./components/AddDonorModal";
import StatsCards from "./components/StatsCards";
import "./styles/index.css";

const STORAGE_KEY = "pgf_donors_v1";

const seedDonors: Donor[] = [
  { id: "d1", name: "Prem Gurung", amount: 200, date: "2025-09-15" },
  { id: "d2", name: "Gaurab Gurung", amount: 150, date: "2025-09-20" },
  { id: "d3", name: "Gopini Gurung", amount: 300, date: "2025-10-01" },
];

function money(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n || 0);
}

export default function App() {
  const [donors, setDonors] = useState<Donor[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : seedDonors;
  });
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "name" | "amount">("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(donors));
  }, [donors]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const dir = sortDir === "asc" ? 1 : -1;
    return donors
      .filter((d) => !q || d.name.toLowerCase().includes(q))
      .sort((a, b) => {
        if (sortBy === "amount") return (a.amount - b.amount) * dir;
        if (sortBy === "name") return a.name.localeCompare(b.name) * dir;
        return (new Date(a.date).getTime() - new Date(b.date).getTime()) * dir;
      });
  }, [donors, query, sortBy, sortDir]);

  const total = donors.reduce((s, d) => s + d.amount, 0);

  function downloadCSV() {
    const csv = [["Name", "Amount", "Date"], ...donors.map((d) => [d.name, d.amount, d.date])]
      .map((r) => r.join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "padamgurungfund_donors.csv";
    a.click();
  }

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2000);
  }

  return (
    <div className="min-h-screen">
      {/* Brand header */}
      <div className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h1 className="h1">Padam Gurung Fund</h1>
          <p className="mt-2 text-white/90">Transparent, simple donor tracking.</p>
          <div className="mt-4 flex gap-2">
            <button onClick={downloadCSV} className="btn btn-outline-light">
              Export CSV
            </button>
            <button onClick={() => setShowForm(true)} className="btn btn-primary btn-pill">
              Add Donor
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 -mt-6 space-y-6">
        <StatsCards total={total} donorCount={donors.length} formatCurrency={money} />

        {/* Controls */}
        <div className="card p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <input
              className="input md:w-80"
              placeholder="Search donors…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <span className="subtle">Sort by</span>
              {(["date", "name", "amount"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    if (sortBy === f) setSortDir(sortDir === "asc" ? "desc" : "asc");
                    else setSortBy(f);
                  }}
                  className={`btn ${sortBy === f ? "btn-primary" : "btn-ghost"}`}
                >
                  {f[0].toUpperCase() + f.slice(1)} {sortBy === f ? (sortDir === "asc" ? "▲" : "▼") : ""}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DonorTable donors={filtered} formatCurrency={money} />
      </main>

      {showForm && (
        <AddDonorModal
          setShowForm={setShowForm}
          setDonors={setDonors}
          onAdded={(name) => showToast(`Added donor: ${name}`)}
        />
      )}

      <footer className="mx-auto max-w-5xl px-4 py-12 subtle">
        © {new Date().getFullYear()} Padam Gurung Fund
      </footer>

      {/* Toast */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
