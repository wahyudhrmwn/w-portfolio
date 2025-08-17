export default function Testimonials() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col justify-between">
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm absolutely floored by the level of care and attention to detail
            Eliana has put into this project and for one can guarantee that we
            will be a return customer.
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
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col justify-between">
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
  );
}
