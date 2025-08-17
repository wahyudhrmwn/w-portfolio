export default function Articles() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles</h2>

      <div className="space-y-8">
        {/* Article 1 */}
        <article className="border-b border-gray-100 pb-8">
          <p className="text-sm text-gray-600 mb-2">2024</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            <a href="#" className="hover:text-blue-600 transition-colors">
              The complete guide to OKRs
            </a>
          </h3>
          <p className="text-gray-700 mb-4">
            How to make objectives and key results work for your company.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1 group"
          >
            Continue reading
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </article>
      </div>
    </div>
  );
}
