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
                <p className="text-sm text-gray-600">2021 - present</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build User Interfaces Develop Components : Create reusable and
              maintainable UI components using Vue.js. Type Safety : Write code
              with TypeScript to ensure it is type-safe and error-free.
              Implement Designs Slicing Designs : Convert designs from Figma
              into functional web pages. Design Fidelity : Work with the design
              team to ensure the UI matches the provided designs. Integrate APIs
              API Calls : Connect the frontend with backend services using APIs.
              Data Handling : Manage data from APIs and ensure it is displayed
              correctly on the UI. Test and Debug: Testing : Create and run
              tests to make sure everything works as expected. Fix Bugs :
              Identify and resolve issues in the code and UI. Maintain and
              Document Code Updates : Keep the code up-to-date and improve it as
              needed. Documentation : Write clear documentation for the code and
              components you develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
