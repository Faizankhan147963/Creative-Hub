import React from "react"
const Lets_Talk = () => {
  return (
    <div className="min-h-screen bg-white container mx-auto md:px-0 px-4 py-16">


      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm  tracking-wider mb-4 text-gray-600">LET'S TALK</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Send Us Your <span className="inline-block rounded-full bg-[#7FFF00] px-6 py-2">Feedback</span></h1>
        <p className="text-gray-600">
          Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet elementum diam. Etiam
          elementum euismod commodo.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 mb-20">
        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img
            src="https://img.freepik.com/premium-vector/vector-professional-icon-business-illustration-line-symbol-people-management-career-set-c_1013341-69875.jpg"
            alt="Thumbs up feedback"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">First & Last Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7BFF00] focus:ring-2 focus:ring-[#7BFF00] focus:ring-opacity-75"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                placeholder="name@example.com"
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7BFF00] focus:ring-2 focus:ring-[#7BFF00] focus:ring-opacity-75"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Subject</span>
              <input
                type="text"
                placeholder="Enter your subject"
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7BFF00] focus:ring-2 focus:ring-[#7BFF00] focus:ring-opacity-75"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Comment or Message *</span>
              <textarea
                rows={6}
                placeholder="Enter your comment"
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7BFF00] focus:ring-2 focus:ring-[#7BFF00] focus:ring-opacity-75"
              />
            </label>
          </div>

          <button className="px-8 py-4 bg-[#7BFF00] rounded-full font-bold hover:bg-[#6CE600] transition-colors cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#7BFF00] focus:ring-opacity-75">
            Send Message
          </button>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center mb-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Ready to Start?</h2>
          <p className="text-gray-600">
            Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo
            imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut
            efficitur.
          </p>
          <p className="font-medium">
            Limited Offer - all plans are <span className="font-bold">FREE</span> for 14 days!
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 text-center space-y-6">
          <div className="text-5xl font-bold">
            $29 <span className="text-2xl text-gray-600">per month</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center justify-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>Up to 5 Users</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>Full Statistic</span>
            </li>
          </ul>
          <button className="px-8 py-4 bg-[#7BFF00] rounded-full font-bold hover:bg-[#6CE600] transition-colors w-full">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Lets_Talk

