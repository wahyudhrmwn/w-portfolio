export default function WorkExperience() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h2>

      <div className="space-y-8">
        {/* Experience 1 - Bukit Makmur Mandiri Utama */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
            <img
              src="/buma.jpg"
              alt="Bukit Makmur Mandiri Utama"
              className="w-12 h-12"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Frontend Developer at Bukit Makmur Mandiri Utama
                </h3>
                <p className="text-sm text-gray-600">2021 - current</p>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed mb-4">
              <div className="font-bold mt-4">Build User Interfaces</div>
              <div>
                Develop Components : Create reusable and maintainable UI
                components using Vue.js.
              </div>
              <div>
                Type Safety : Write code with TypeScript to ensure it is
                type-safe and error-free.
              </div>
              <div className="font-bold mt-4">Implement Designs</div>
              <div>
                Slicing Designs : Convert designs from Figma into functional web
                pages.
              </div>
              <div>
                Design Fidelity : Work with the design team to ensure the UI
                matches the provided designs.
              </div>
              <div className="font-bold mt-4">Integrate APIs</div>
              <div>
                API Calls : Connect the frontend with backend services using
                APIs.
              </div>
              <div>
                Data Handling : Manage data from APIs and ensure it is displayed
                correctly on the UI.
              </div>
              <div className="font-bold mt-4">Test and Debug</div>
              <div>
                Testing : Create and run tests to make sure everything works as
                expected.
              </div>
              <div>
                Fix Bugs : Identify and resolve issues in the code and UI.
              </div>
              <div className="font-bold mt-4">Maintain and Document</div>
              <div>
                Code Updates : Keep the code up-to-date and improve it as
                needed.
              </div>
              <div>
                Documentation : Write clear documentation for the code and
                components you develop.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
