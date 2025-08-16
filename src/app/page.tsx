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
              src="https://images.unsplash.com/photo-1494790108755-2616b612b19c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Eliana Garcia
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Graphic Designer, Web designer/developer
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a seasoned graphic designer with over 14 years of experience in
            creating visually appealing and user-centric designs. My expertise
            spans across UI design, design systems, and custom illustrations,
            helping clients bring their digital visions to life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently, I work remotely for Notion, where I design template UIs,
            convert them into HTML and CSS, and provide comprehensive support to
            our users. I am passionate about crafting elegant and functional
            designs that enhance user experiences.
          </p>
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
              href="mailto:elianagarcia997@about.me"
              className="text-blue-600 hover:underline"
            >
              elianagarcia997@about.me
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <a
              href="https://twitter.com/elianagarcia997"
              className="text-blue-600 hover:underline"
            >
              @elianagarcia997
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.085 4.652-1.19 1.189-2.794 1.916-4.653 2.085-.047-.001-.094-.003-.141-.003s-.094.002-.141.003c-1.858-.169-3.462-.896-4.652-2.085C4.707 11.623 3.98 10.018 3.811 8.16c.001-.047.003-.094.003-.141s-.002-.094-.003-.141c.169-1.858.896-3.463 2.085-4.652C7.085 1.637 8.689.91 10.548.741c.047.001.094.003.141.003s.094-.002.141-.003c1.858.169 3.462.896 4.652 2.085 1.189 1.19 1.916 2.794 2.085 4.652-.001.047-.003.094-.003.141s.002.094.003.141z" />
            </svg>
            <a
              href="https://dribbble.com/elianagarcia997"
              className="text-blue-600 hover:underline"
            >
              @elianagarcia997
            </a>
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
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b19c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
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

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>

          <div className="space-y-6">
            {/* Design Tools */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">Design Tools:</div>
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.332 8.668a3 3 0 0 0 0-4.336l-1.332-1.332h-4v4l1.332 1.332a3 3 0 0 0 4.236 0l-.236-.664z" />
                  </svg>
                  <span>Figma,</span>
                  <svg
                    className="w-4 h-4 text-orange-500 ml-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 7.335c-.001-1.47-.001-2.94 0-4.41C24.001 1.316 22.685.001 21.076.001L2.924.001C1.316.001 0 1.316 0 2.924v18.15c0 1.609 1.316 2.925 2.924 2.925h18.15c1.609 0 2.925-1.316 2.925-2.925V7.335h.001z" />
                  </svg>
                  <span>Sketch,</span>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">Development:</div>
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 text-gray-700 flex-wrap">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                    <span>HTML,</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                    </svg>
                    <span>CSS,</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-cyan-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                    </svg>
                    <span>Tailwind CSS,</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.01 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z" />
                    </svg>
                    <span>React,</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
                    </svg>
                    <span>Vue,</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">Collaboration:</div>
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 text-gray-700 flex-wrap">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.459 4.208c0-.632.516-1.146 1.146-1.146h12.79c.63 0 1.146.516 1.146 1.146v15.584c0 .632-.516 1.146-1.146 1.146H5.605c-.63 0-1.146-.516-1.146-1.146V4.208z" />
                    </svg>
                    <span>Notion,</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Mailchimp,</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5.042 15.165a2.528 2.528 0 0 0-2.52 2.523A2.528 2.528 0 0 0 5.042 20.21a2.528 2.528 0 0 0 2.52-2.522 2.528 2.528 0 0 0-2.52-2.523z" />
                    </svg>
                    <span>Slack,</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">Design Expertise:</div>
              <div className="md:col-span-3">
                <span className="text-gray-700">
                  UI/UX Design, Design Systems, Custom Illustrations, Responsive
                  Design,
                </span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-medium text-gray-700">Soft Skills:</div>
              <div className="md:col-span-3">
                <span className="text-gray-700">
                  Strong communication, Problem-solving, Attention to detail,
                  Time management,
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
            {/* Experience 1 - Mailchimp */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Senior Software Engineer at Mailchimp
                    </h3>
                    <p className="text-sm text-gray-600">2021 - 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is an excellent company and they reward their employees.
                  It's becoming a big company but it's still private, so the
                  culture is as good as it gets at 1,000+ employees if you ask
                  me. Managers are still adapting to the growth I think, but
                  everyone has to. Great place to work.
                </p>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
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
                </div>
              </div>
            </div>

            {/* Experience 2 - Slack */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.042 15.165a2.528 2.528 0 0 0-2.52 2.523A2.528 2.528 0 0 0 5.042 20.21a2.528 2.528 0 0 0 2.52-2.522 2.528 2.528 0 0 0-2.52-2.523zM17.5 4.27c-2.121 0-4.108.983-5.185 2.615l-.069.105a9.769 9.769 0 0 1 1.518 1.31l.32-.497c.652-.984 1.739-1.573 2.929-1.573 1.38 0 2.572.79 3.003 1.993.431 1.203.109 2.545-.811 3.386L13.743 15.8c-.92.841-2.21.841-3.13 0s-.92-2.206 0-3.047l1.575-1.441a6.15 6.15 0 0 0-.787-1.028l-1.575 1.441c-1.841 1.681-1.841 4.413 0 6.094.92.841 2.12 1.262 3.32 1.262s2.4-.42 3.32-1.262L21.928 12.6c1.841-1.681 1.841-4.412 0-6.093-.92-.841-2.121-1.262-3.32-1.262z" />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Junior Software Engineer at Slack
                    </h3>
                    <p className="text-sm text-gray-600">2011 - 2021</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Work in Slack is one of the beautiful experience I can do in
                  my entire life. There are a lot of interesting thing to learn
                  and manager respect your time and your personality.
                </p>
              </div>
            </div>

            {/* Experience 3 - Freelance */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Freelance Graphic Designer
                    </h3>
                    <p className="text-sm text-gray-600">2010 - 2011</p>
                  </div>
                </div>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>
                    • Worked with a diverse range of clients, delivering
                    tailored design solutions.
                  </li>
                  <li>
                    • Developed and maintained strong client relationships
                    through effective communication and project management.
                  </li>
                  <li>
                    • Utilized tools such as Notion for project tracking,
                    Mailchimp for email marketing designs, Slack for team
                    collaboration, and GitHub for version control and project
                    sharing.
                  </li>
                </ul>
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
                  <p className="text-sm text-gray-600">2012 - 2013</p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Master's degree in Computer Software Engineering
                  </h3>
                  <p className="text-gray-600">The University of Manchester</p>
                </div>
              </div>
            </div>

            {/* Education 2 - Bachelor's */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
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
                href="https://twitter.com"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://dribbble.com"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Dribbble"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.085 4.652-1.19 1.189-2.794 1.916-4.653 2.085-.047-.001-.094-.003-.141-.003s-.094.002-.141.003c-1.858-.169-3.462-.896-4.652-2.085C4.707 11.623 3.98 10.018 3.811 8.16c.001-.047.003-.094.003-.141s-.002-.094-.003-.141c.169-1.858.896-3.463 2.085-4.652C7.085 1.637 8.689.91 10.548.741c.047.001.094.003.141.003s.094-.002.141-.003c1.858.169 3.462.896 4.652 2.085 1.189 1.19 1.916 2.794 2.085 4.652-.001.047-.003.094-.003.141s.002.094.003.141z" />
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
