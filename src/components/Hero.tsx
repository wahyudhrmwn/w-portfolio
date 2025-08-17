export default function Hero() {
  return (
    <div className="space-y-12">
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
          I am a Frontend Web Developer with over four years of experience at PT
          Bukit Makmur Mandiri Utama. I specialize in building user interfaces
          using Vue.js and TypeScript, as well as converting Figma designs into
          functional web pages. I am also skilled in integrating APIs, managing
          data, and performing testing and bug fixes. Additionally, I keep code
          up-to-date and document it clearly. With expertise in JavaScript,
          HTML5, CSS, Tailwind CSS, TypeScript, VueJS and NextJS, I am committed
          to delivering high-quality web solutions and enhancing user
          experiences.
        </p>
      </div>
    </div>
  );
}
