export type Donor = {
  id: string;
  name: string;
  amount: number;
  date: string;
};

export const donors: Donor[] = [
  { id: "d1", name: "Ritu Gurung",               amount: 2500, date: "2025-10-06" },
  { id: "d2", name: "Krishna (Saila) Gurung",    amount: 2500, date: "2025-10-06" },
  { id: "d3", name: "Sandesh Gurung",            amount: 2660, date: "2025-10-06" },
  { id: "d4", name: "Antim Gurung",              amount: 1510, date: "2025-10-06" },
  { id: "d5", name: "Sajan Gurung",              amount: 7025, date: "2025-10-06" },
];
