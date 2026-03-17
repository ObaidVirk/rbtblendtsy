import { mockProducts } from "@/lib/mockData";

export default function ProductsTable() {
  const statusColors: Record<string, string> = {
    "Generally Available": "bg-green-100 text-green-700",
    Beta: "bg-yellow-100 text-yellow-700",
    "Coming Soon": "bg-gray-100 text-gray-500",
  };

  return (
    <div className="bg-white rounded-2xl border border-finGray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-finGray-100 flex items-center justify-between">
        <h3 className="font-bold text-finBlue">Financial Products</h3>
        <button className="text-xs font-semibold text-finPurple hover:underline">Manage</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-finGray-50">
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider hidden md:table-cell">
                Category
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Clients
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider hidden lg:table-cell">
                Version
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-finGray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-finGray-50">
            {mockProducts.map((product) => (
              <tr key={product.id} className="hover:bg-finGray-50/50 transition-colors duration-150">
                <td className="px-6 py-3.5">
                  <div>
                    <p className="font-semibold text-finBlue text-sm">{product.name}</p>
                    <p className="text-xs text-finGray-400">{product.license}</p>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-finGray-500 text-xs hidden md:table-cell">
                  {product.category}
                </td>
                <td className="px-6 py-3.5 font-semibold text-finBlue">
                  {product.clients.toLocaleString()}
                </td>
                <td className="px-6 py-3.5 font-mono text-xs text-finGray-500 hidden lg:table-cell">
                  {product.version}
                </td>
                <td className="px-6 py-3.5">
                  <span
                    className={`tag text-xs ${
                      statusColors[product.status] || "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {product.status}
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
