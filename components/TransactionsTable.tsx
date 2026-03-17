import { mockTransactions } from "@/lib/mockData";

export default function TransactionsTable() {
  const statusColors: Record<string, string> = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-finGray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-finGray-100 flex items-center justify-between">
        <h3 className="font-bold text-finBlue">Recent Transactions</h3>
        <button className="text-xs font-semibold text-finPurple hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-finGray-50">
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Txn ID
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider hidden md:table-cell">
                Client
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider hidden lg:table-cell">
                Date
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-finGray-50">
            {mockTransactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-finGray-50/50 transition-colors duration-150">
                <td className="px-6 py-3.5 font-mono text-xs text-finGray-600">{txn.id}</td>
                <td className="px-6 py-3.5 font-medium text-finBlue text-sm hidden md:table-cell">
                  {txn.client}
                </td>
                <td className="px-6 py-3.5 text-finGray-500 text-xs">{txn.type}</td>
                <td className="px-6 py-3.5 font-bold text-finBlue text-sm">{txn.amount}</td>
                <td className="px-6 py-3.5 text-finGray-400 text-xs hidden lg:table-cell">
                  {txn.date}
                </td>
                <td className="px-6 py-3.5">
                  <span
                    className={`tag text-xs ${
                      statusColors[txn.status] || "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
