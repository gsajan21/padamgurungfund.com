
type Props = {
  total: number;
  donorCount: number;
  formatCurrency: (n: number) => string;
};

export default function StatsCards({ total, donorCount, formatCurrency }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="card p-6 transition hover:shadow-md">
        <div className="subtle">Total Raised</div>
        <div className="mt-1 text-3xl font-bold tracking-tight">{formatCurrency(total)}</div>
      </div>
      <div className="card p-6 transition hover:shadow-md">
        <div className="subtle">Total Donors</div>
        <div className="mt-1 text-3xl font-bold tracking-tight">{donorCount}</div>
      </div>
    </div>
  );
}
