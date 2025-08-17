export default function Skills() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>

      <div className="space-y-6">
        {/* Design Tools */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">Design Tools:</div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-gray-700">
              <img src="/icon/figma.png" alt="Figma" className="w-4 h-4" />
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">
            Frontend Technologies:
          </div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-gray-700 flex-wrap">
              <div className="flex items-center gap-1">
                <img
                  src="/icon/javascript.png"
                  alt="JavaScript"
                  className="w-4 h-4"
                />
                <span>JavaScript,</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/icon/typescript.png"
                  alt="TypeScript"
                  className="w-4 h-4"
                />
                <span>TypeScript,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/vue.png" alt="Vue.js" className="w-4 h-4" />
                <span>Vue.js,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/next.png" alt="Next.js" className="w-4 h-4" />
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Styling & UI */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">Styling & UI:</div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-gray-700 flex-wrap">
              <div className="flex items-center gap-1">
                <img src="/icon/html.png" alt="HTML5" className="w-4 h-4" />
                <span>HTML5,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/css.png" alt="CSS3" className="w-4 h-4" />
                <span>CSS3,</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/icon/tailwindcss.png"
                  alt="Tailwind CSS"
                  className="w-4 h-4"
                />
                <span>Tailwind CSS,</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/icon/prelineui.jpg"
                  alt="Preline UI"
                  className="w-4 h-4"
                />
                <span>Preline UI,</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/icon/shadcn.png"
                  alt="Shadcn UI"
                  className="w-4 h-4"
                />
                <span>Shadcn UI,</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/icon/daisyui.jpg"
                  alt="Daisy UI"
                  className="w-4 h-4"
                />
                <span>Daisy UI,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/bulma.png" alt="Bulma" className="w-4 h-4" />
                <span>Bulma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Tools */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">Development Tools:</div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-gray-700 flex-wrap">
              <div className="flex items-center gap-1">
                <img
                  src="/icon/cursorai.webp"
                  alt="Cursor AI"
                  className="w-4 h-4"
                />
                <span>Cursor AI,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/vscode.png" alt="VS Code" className="w-4 h-4" />
                <span>VS Code,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/git.png" alt="Git" className="w-4 h-4" />
                <span>Git,</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icon/npm.png" alt="npm" className="w-4 h-4" />
                <span>npm/yarn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">Frontend Expertise:</div>
          <div className="md:col-span-3">
            <span className="text-gray-700">
              Responsive Web Design, API Integration, Component Development,
              Figma to Code Conversion, Testing & Bug Fixes, Code Documentation
            </span>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">Professional Skills:</div>
          <div className="md:col-span-3">
            <span className="text-gray-700">
              4 Years Frontend Experience, Team Collaboration, Problem-solving,
              Attention to Detail, Project Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
