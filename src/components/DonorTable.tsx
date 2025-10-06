
export type Donor = {
  id: string;
  name: string;
  amount: number;
  date: string;
};

type Props = {
  donors: Donor[];
  formatCurrency: (n: number) => string;
};

export default function DonorTable({ donors, formatCurrency }: Props) {
  return (
    <section className="card overflow-hidden">
      <div className="px-6 pt-5 pb-4 border-b border-slate-200/70">
        <h3 className="font-semibold">Donor List</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 font-medium">Donor</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {donors.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-10 text-center text-slate-500">
                  No donors yet.
                </td>
              </tr>
            ) : (
              donors.map((d, i) => (
                <tr key={d.id} className="table-row">
                  <td className="px-6 py-3 font-medium">{d.name}</td>
                  <td className="px-6 py-3">{formatCurrency(d.amount)}</td>
                  <td className="px-6 py-3 tabular-nums">{d.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
