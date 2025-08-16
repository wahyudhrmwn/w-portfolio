"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Header Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
          <nav className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                preline
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Work
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </a>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Book a call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close X icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }`}
        >
          <div className="mt-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <nav className="py-2">
              <a
                href="#"
                className="block px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#"
                className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <div className="px-6 py-3">
                <button
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a call
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 space-y-12">
        {/* Profile Section */}
        <div className="flex items-start space-x-6">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img
              src="profil.jpeg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Wahyu Dharmawan
            </h1>
            <p className="text-lg text-gray-600 mb-6">Frontend Developer</p>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a Frontend Web Developer with over four years of experience at
            PT Bukit Makmur Mandiri Utama. I specialize in building user
            interfaces using Vue.js and TypeScript, as well as converting Figma
            designs into functional web pages. I am also skilled in integrating
            APIs, managing data, and performing testing and bug fixes.
            Additionally, I keep code up-to-date and document it clearly. With
            expertise in JavaScript, HTML5, CSS, Tailwind CSS, TypeScript, VueJS
            and NextJS, I am committed to delivering high-quality web solutions
            and enhancing user experiences.
          </p>
          {/* <p className="text-gray-700 leading-relaxed">
            Currently, I work remotely for Notion, where I design template UIs,
            convert them into HTML and CSS, and provide comprehensive support to
            our users. I am passionate about crafting elegant and functional
            designs that enhance user experiences.
          </p> */}
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a
              href="mailto:wahyu.dhrmwn08@gmail.com"
              className="text-blue-600 hover:underline"
            >
              wahyu.dhrmwn08@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <a
              href="https://instagram.com/wahyudhrmwn"
              className="text-blue-600 hover:underline"
            >
              @wahyudhrmwn
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <a
              href="https://linkedin.com/in/wahyu-dharmawan"
              className="text-blue-600 hover:underline"
            >
              Wahyu Dharmawan
            </a>
          </div>
        </div>

        {/* Skills Section */}
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
                    <img
                      src="/icon/next.png"
                      alt="Next.js"
                      className="w-4 h-4"
                    />
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
                    <img
                      src="/icon/bulma.png"
                      alt="Bulma"
                      className="w-4 h-4"
                    />
                    <span>Bulma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">
                Development Tools:
              </div>
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
                    <img
                      src="/icon/vscode.png"
                      alt="VS Code"
                      className="w-4 h-4"
                    />
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
              <div className="font-medium text-gray-700">
                Frontend Expertise:
              </div>
              <div className="md:col-span-3">
                <span className="text-gray-700">
                  Responsive Web Design, API Integration, Component Development,
                  Figma to Code Conversion, Testing & Bug Fixes, Code
                  Documentation
                </span>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">
                Professional Skills:
              </div>
              <div className="md:col-span-3">
                <span className="text-gray-700">
                  4 Years Frontend Experience, Team Collaboration,
                  Problem-solving, Attention to Detail, Project Management
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Work Experience
          </h2>

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
                  maintainable UI components using Vue.js. Type Safety : Write
                  code with TypeScript to ensure it is type-safe and error-free.
                  Implement Designs Slicing Designs : Convert designs from Figma
                  into functional web pages. Design Fidelity : Work with the
                  design team to ensure the UI matches the provided designs.
                  Integrate APIs API Calls : Connect the frontend with backend
                  services using APIs. Data Handling : Manage data from APIs and
                  ensure it is displayed correctly on the UI. Test and Debug:
                  Testing : Create and run tests to make sure everything works
                  as expected. Fix Bugs : Identify and resolve issues in the
                  code and UI. Maintain and Document Code Updates : Keep the
                  code up-to-date and improve it as needed. Documentation :
                  Write clear documentation for the code and components you
                  develop.
                </p>
                {/* <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1126&q=80"
                    alt="Studio by Mailchimp"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Studio by Mailchimp
                    </h4>
                    <p className="text-sm text-gray-600">
                      Produce professional, reliable streams easily leveraging
                      Mailchimp's innovative broadcast studio.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
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

            {/* Education 2 - Bachelor's */}
            {/* <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">2009 - 2012</p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Bachelor's degree in Computer Software Engineering
                  </h3>
                  <p className="text-gray-600">Harvard University</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-600 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Project 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-pink-400 to-red-600 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                  alt="Project 4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Project 5"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 6 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-teal-400 to-green-600 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Project 6"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm absolutely floored by the level of care and attention to
                detail Eliana has put into this project and for one can
                guarantee that we will be a return customer.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Josh Grazioso"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Josh Grazioso</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                To say that hiring Eliana has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Nicole Grazioso"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Nicole Grazioso</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Section */}
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

            {/* Article 2 */}
            <article className="border-b border-gray-100 pb-8">
              <p className="text-sm text-gray-600 mb-2">2024</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Enhancement in Customer Engagement
                </a>
              </h3>
              <p className="text-gray-700 mb-4">
                With the aim of optimizing customer interactions and boosting
                brand loyalty, the team at Preline leveraged Mailchimp's
                powerful tools and expertise to deliver exceptional results.
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

            {/* Article 3 */}
            <article className="pb-8">
              <p className="text-sm text-gray-600 mb-2">2023</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <a href="#" className="hover:text-blue-600 transition-colors">
                  How Google Assistant now helps you record stories for kids
                </a>
              </h3>
              <p className="text-gray-700 mb-4">
                Google is constantly updating its consumer AI, Google Assistant,
                with new features.
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

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Subscribe</h2>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium inline-flex items-center gap-2"
              >
                Join
                <svg
                  className="w-4 h-4"
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
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2025 Preline Labs.</p>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/wahyudhrmwn"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/wahyu-dharmawan"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <button
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
