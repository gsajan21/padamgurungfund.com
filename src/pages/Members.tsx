// src/pages/Members.tsx
export default function Members() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Members</h2>
      <div className="card p-6">
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <h1>निर्देशक बोर्ड</h1>
          <li>अधक्ष्य — (add name)</li>
          <li>उप-अधक्ष्य — (add name)</li>
          <li>सचिब — (add names)</li>
          <li>उप-सचिब — (add names)</li>
        </ul>
        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-4">
          <h1>सदस्यहरू</h1>
          <li>सदस्य — (add names)</li>
          <li>सदस्य — (add names)</li>
          <li>सदस्य — (add names)</li>
    
        </ul>
      </div>
    </main>
  );
}
