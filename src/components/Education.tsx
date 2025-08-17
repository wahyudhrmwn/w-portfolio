export default function Education() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education 1 - Master's */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">2018 - 2024</p>
              <h3 className="text-lg font-semibold text-gray-900">
                Bachelor's degree in Information Technology
              </h3>
              <p className="text-gray-600">Universitas Pamulang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
