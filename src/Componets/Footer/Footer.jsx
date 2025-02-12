import React from "react"
const Footer = () => {
  const services = [
    "Managed IT",
    "IT Support",
    "IT Consultancy",
    "Cloud Computing",
    "Cyber Security",
    "Custom Software",
  ]

  const latestPosts = [
    {
      date: "May 8, 2020",
      title: "Make the decision to move forward. Commit your decision to paper.",
    },
    {
      date: "May 8, 2020",
      title: "So why do we do it? For the most part, we don't do it intentionally or with malice.",
    },
  ]

  return (
    <div className=" bg-gray-100 ">
     

      {/* Footer Content */}
      <footer className="border-t border-gray-200 ">
        <div className="mx-auto container  py-12   px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-black" />
                <span className="text-xl font-bold">TECH CAREER</span>
              </div>
              <p className="text-gray-600">
                One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                replacing them with beliefs that will help them to accomplish their desires.
              </p>
              <div className="space-y-1 text-gray-600">
                <p>Mon-Fri: 9:00 am - 07:30 pm</p>
                <p>Sat: 09:00 am - 01:00 pm</p>
              </div>
              <div className="flex gap-4">
                {["facebook", "twitter", "linkedin", "pinterest", "instagram"].map((social) => (
                  <a key={social} href={`#${social}`} className="text-gray-400 transition-colors hover:text-black">
                    <span className="sr-only">{social}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === "facebook" && (
                        <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1.1-1.3H18V0h-3.8C10.6 0 9 1.6 9 4.6V8z" />
                      )}
                      {/* Add other social icons paths here */}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
  <p className="font-medium">Address</p>
  <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
</div>

                </div>
                <div className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">faizankhan@techcareer.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Call Now</p>
                    <p className="text-gray-600">+91 80000 52438</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">IT Service</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-600 hover:text-black">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Latest Posts</h3>
              <div className="space-y-4">
                {latestPosts.map((post, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-black">{post.date}</p>
                    <a href="#" className="block text-gray-600 hover:text-black">
                      {post.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
            <div className="flex flex-wrap items-center gap-4">
              <button className="text-gray-600 hover:text-black">Subscribe</button>
              <button className="text-gray-600 hover:text-black">View on Google Map</button>
            </div>
            <p className="text-gray-600">
              Copyright © 2020. All Rights Reserved. TECH CAREER by{" "}
              <a href="#" className="text-black hover:underline">
                Faizan Khan
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

