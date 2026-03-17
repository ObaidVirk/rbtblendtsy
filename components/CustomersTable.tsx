import { mockCustomers } from "@/lib/mockData";

export default function CustomersTable() {
  const statusColors: Record<string, string> = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-600",
    Trial: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-finGray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-finGray-100 flex items-center justify-between">
        <h3 className="font-bold text-finBlue">Customers</h3>
        <button className="text-xs font-semibold text-finPurple hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-finGray-50">
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider hidden md:table-cell">
                Type
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider hidden lg:table-cell">
                Country
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-finGray-50">
            {mockCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-finGray-50/50 transition-colors duration-150 group"
              >
                <td className="px-6 py-3.5 text-finGray-400 font-mono text-xs">
                  {customer.id}
                </td>
                <td className="px-6 py-3.5">
                  <div>
                    <p className="font-semibold text-finBlue text-sm group-hover:text-finPurple transition-colors">
                      {customer.name}
                    </p>
                    <p className="text-xs text-finGray-400">Since {customer.since}</p>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-finGray-500 hidden md:table-cell text-xs">
                  {customer.type}
                </td>
                <td className="px-6 py-3.5 text-finGray-500 hidden lg:table-cell text-xs">
                  {customer.country}
                </td>
                <td className="px-6 py-3.5 font-semibold text-finBlue text-sm">
                  {customer.revenue}
                </td>
                <td className="px-6 py-3.5">
                  <span
                    className={`tag text-xs ${
                      statusColors[customer.status] || "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {customer.status}
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
