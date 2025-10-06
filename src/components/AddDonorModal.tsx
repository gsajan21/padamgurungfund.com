import React, { useState } from "react";
import type { Donor } from "./DonorTable";

type Props = {
  setShowForm: (v: boolean) => void;
  setDonors: React.Dispatch<React.SetStateAction<Donor[]>>;
  onAdded?: (name: string) => void; // for toast
};

export default function AddDonorModal({ setShowForm, setDonors, onAdded }: Props) {
  const [form, setForm] = useState({ name: "", amount: "", date: new Date().toISOString().slice(0, 10) });
  const [error, setError] = useState("");

  function addDonor(e: React.FormEvent) {
    e.preventDefault();
    const name = form.name.trim();
    const amount = Number(form.amount);
    if (!name) return setError("Please enter donor name.");
    if (amount <= 0) return setError("Amount must be positive.");
    const newDonor: Donor = { id: crypto.randomUUID(), name, amount, date: form.date };
    setDonors(prev => [...prev, newDonor]);
    setShowForm(false);
    onAdded?.(name);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setShowForm(false)}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={addDonor}
        className="w-full max-w-md card p-6 transition"
      >
        <h2 className="text-lg font-semibold mb-4">Add Donor</h2>

        <div className="space-y-3">
          <input
            className="input"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="number"
            step="0.01"
            className="input"
            placeholder="Amount (USD)"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <input
            type="date"
            className="input"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={() => setShowForm(false)} className="btn btn-ghost">Cancel</button>
          <button type="submit" className="btn btn-primary btn-pill">Save Donor</button>
        </div>
      </form>
    </div>
  );
}
