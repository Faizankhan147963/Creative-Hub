import React from "react"
import { useState } from "react"

const Our_Work = () => {
  const [activeTab, setActiveTab] = useState("Popular")

  const tabs = ["Popular", "Web Development", "Ecommerce Development", "Marketing", "Design", "Digital Transformation"]

  const services = [
    {
      title: "E-commerce Web Development",
      image: "https://media.licdn.com/dms/image/v2/D5612AQF8GGlQaYG9Vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686137572046?e=2147483647&v=beta&t=UQPHh_ywy3TqW8jBb_S6S_b_Dxb7GswZf9VsUzWmNnw",
      tools: ["Adobe XD", "Figma", "Sketch", "Balsamiq", "Iore"],
      features: [
        "Online Store Development",
        "Auction & Bidding Platform",
        "Multi-Vendor Platform",
        "E-Commerce POS System",
        "Supply Chain Automation",
      ],
      buttonStyle: "dark",
    },
    {
      title: "Magento Web Development",
      image: "https://pharaohsoft.com/wp-content/uploads/2022/11/Magento-web-development-company-e1669027028167.jpeg",
      tools: ["After Effect", "Blender", "Premier", "Premiere Pro"],
      features: [
        "Extension Development",
        "Responsive Magento Theme",
        "Customization Services",
        "Module Development",
        "Payment And Shipping Integration",
      ],
      buttonStyle: "light",
    },
    {
      title: "Shopify E-commerce Development",
      image: "https://envisionecommerce.com/wp-content/uploads/2022/09/shopify-for-ecommerce-store-development.jpg",
      tools: ["Slack", "WordPress", "Monday", "Analytics", "Analytics"],
      features: [
        "Shopify eCommerce & Custom Shopify",
        "Store Setup & Configuration",
        "Plug-In & Module Management",
        "Theme Design and Development",
        "Setup & Product Import",
      ],
      buttonStyle: "light",
    },
  ]

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen bg-gray-100  py-16  container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">Good Work, Good People</h2>
          <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
            We Deliver In All
            <br />
            <span className="inline-block rounded-full bg-[#7FFF00] px-6 py-2">Directions</span>
          </h1>
          <p className="mx-auto mb-8 max-w-6xl text-gray-600">
            We specialize in delivering top-notch digital solutions to help businesses grow and succeed.
          </p>
        </div>
        {/* Tabs Navigation */}
        <div className="text-center w-full">
  <div className="mb-8 overflow-x-auto flex justify-center">
    <div className="flex min-w-max gap-2 rounded-full bg-white p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-colors ${
            activeTab === tab ? "bg-[#7FFF00] text-black" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
</div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden rounded-3xl bg-white">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>

                {/* Tools */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.tools.map((tool, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="mb-3 font-semibold">We Provide</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-black">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team and CTA */}
                <div className="flex items-center justify-between">

                  <button
                    className={`flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-transform  ${service.buttonStyle === "dark" ? "bg-black text-white" : "border-2 border-black"
                      }`}
                  >
                    Get Details
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Our_Work

