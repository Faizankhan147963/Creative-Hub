import React, { useEffect, useRef } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useLocomotiveScroll from "../../useLocomotiveScroll";
import favicon from '../../assets/faivon.png'
import { AiOutlinePhone, AiOutlineRight } from "react-icons/ai";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeTab, setActiveTab] = useState("web-development");
    const menuRef = useRef(null);

    // Function to handle menu click (Toggles dropdown only)
    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };

    }, []);


    return (
        <header className=" z-50 sticky top-0">
            <nav className="bg-black border-b  ">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0" style={{ userSelect: "none" }}>
                            <Link to="/" className="flex items-center">
                                <span className="text-3xl font-bold text-white">TECH</span>
                                <span className="bg-[#7FFF00] text-black px-2 mx-1 text-2xl font-bold">CAREER</span>
                            </Link>
                        </div>

                        {/* Main Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            {/* How it works */}
                            <div
                                className="relative"
                            >
                                <Link to={'/'} className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#7FFF00] py-2">
                                    <span>Home</span>

                                </Link>
                            </div>

                            {/* Top locations */}
                            <div ref={menuRef} className="relative">
                                {/* Our Services Dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#7FFF00] py-2"
                                        onMouseEnter={() => handleMenuClick("services")}
                                    >
                                        <span>Our Services</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {activeMenu === "services" && (
                                        <div className="absolute top-full -left-54 w-screen max-w-6xl bg-black shadow-lg border rounded-b-4xl mt-4">
                                            <h1 className="ml-7 mt-5 text-3xl font-bold text-white mb-3">
                                                <Typewriter
                                                    words={["Services   "]}
                                                    typeSpeed={100} // Typing Speed
                                                    cursor
                                                    cursorStyle="|"
                                                    delaySpeed={1000} // Delay before stopping
                                                    loop={1} // Type only once
                                                />
                                            </h1>
                                            <div className="flex">

                                                {/* Sidebar Tabs */}
                                                <div className="w-72 p-4">
                                                    {[
                                                        { key: "web-development", label: "Web Development" },
                                                        { key: "web-design", label: "Web Design (UI/UX)" },
                                                        { key: "app-development", label: "App Development" },
                                                        { key: "app-design", label: "App Design" },
                                                        { key: "seo-marketing", label: "SEO & Marketing" },
                                                    ].map(({ key, label }) => (
                                                        <button
                                                            key={key}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveTab(key);
                                                                // Remove this: setActiveMenu(null); // This was closing the menu
                                                            }}
                                                            className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-2 rounded-full border border-gray-600 hover:text-black mb-1 transition duration-300 ${activeTab === key
                                                                    ? "bg-[#7FFF00] border font-bold text-black"
                                                                    : "hover:bg-gray-100 text-white"
                                                                }`}
                                                        >
                                                            {label}
                                                            <AiOutlineRight
                                                                className={`ml-2 transition-transform duration-300 ${activeTab === key ? "text-black font-bold" : "text-gray-400"
                                                                    }`}
                                                            />
                                                        </button>
                                                    ))}
                                                </div>;

                                                {/* Dynamic Content Display */}
                                                <div className="flex-1 p-8 -mt-3">
                                                    {activeTab === "web-development" && (
                                                        <div>
                                                            <h3 className="text-lg font-semibold mb-4 underline text-white">
                                                                Web Development Services
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="text-sm text-gray-400">Frontend Development (React, Vue, Angular)</a>
                                                                <a href="#" className="text-sm text-gray-400">Backend Development (Node.js, Laravel)</a>
                                                                <a href="#" className="text-sm text-gray-400">Full-Stack Development</a>
                                                                <a href="#" className="text-sm text-gray-400">E-Commerce Development (Shopify)</a>
                                                                <a href="#" className="text-sm text-gray-400">Custom Web Applications</a>
                                                                <a href="#" className="text-sm text-gray-400">Content Management Systems (WordPress)</a>
                                                                <a href="#" className="text-sm text-gray-400">API Development & Integration</a>
                                                                <a href="#" className="text-sm text-gray-400">Progressive Web Apps (PWAs)</a>
                                                                <a href="#" className="text-sm text-gray-400">UI/UX & Responsive Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Website Maintenance & Optimization</a>
                                                            </div>
                                                        </div>
                                                    )}


                                                    {activeTab === "web-design" && (
                                                        <div>
                                                            <h3 className="text-lg font-semibold mb-4 underline text-white">
                                                                Web & UI/UX Design
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="text-sm text-gray-400">UI/UX Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Website Wireframing & Prototyping</a>
                                                                <a href="#" className="text-sm text-gray-400">Landing Page Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Responsive Web Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Mobile App UI Design</a>
                                                                <a href="#" className="text-sm text-gray-400">E-Commerce Website Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Dark & Light Mode UI Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Branding & Visual Identity</a>
                                                                <a href="#" className="text-sm text-gray-400">Web Animations & Micro-Interactions</a>
                                                                <a href="#" className="text-sm text-gray-400">Dashboard & Admin Panel UI Design</a>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === "app-development" && (
                                                        <div>
                                                            <h3 className="text-lg font-semibold mb-4 underline text-white">
                                                                App Development
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="text-sm text-gray-400">iOS App Development</a>
                                                                <a href="#" className="text-sm text-gray-400">Android App Development</a>
                                                                <a href="#" className="text-sm text-gray-400">Cross-Platform Apps (React Native, Flutter)</a>
                                                                <a href="#" className="text-sm text-gray-400">Progressive Web Apps (PWAs)</a>
                                                                <a href="#" className="text-sm text-gray-400">Wearable & IoT App Development</a>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === "app-design" && (
                                                        <div>
                                                            <h3 className="text-lg font-semibold mb-4 underline text-white">
                                                                App Design
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="text-sm text-gray-400">Mobile UI/UX Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Prototype & Wireframe Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Interactive Mockups</a>
                                                                <a href="#" className="text-sm text-gray-400">Gesture-Based UI Design</a>
                                                                <a href="#" className="text-sm text-gray-400">Dark & Light Mode UI</a>
                                                                <a href="#" className="text-sm text-gray-400">Icon & Illustration Design</a>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {activeTab === "seo-marketing" && (
                                                        <div>
                                                            <h3 className="text-lg font-semibold mb-4 underline text-white">
                                                                SEO & Digital Marketing
                                                            </h3>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="text-sm text-gray-400">SEO Optimization</a>
                                                                <a href="#" className="text-sm text-gray-400">Content Marketing</a>
                                                                <a href="#" className="text-sm text-gray-400">PPC Advertising (Google Ads, Facebook Ads)</a>
                                                                <a href="#" className="text-sm text-gray-400">Social Media Marketing</a>
                                                                <a href="#" className="text-sm text-gray-400">Email Marketing & Automation</a>
                                                                <a href="#" className="text-sm text-gray-400">Local SEO & Google My Business</a>
                                                                <a href="#" className="text-sm text-gray-400">Affiliate Marketing</a>
                                                                <a href="#" className="text-sm text-gray-400">Conversion Rate Optimization (CRO)</a>
                                                                <a href="#" className="text-sm text-gray-400">Influencer Marketing</a>
                                                                <a href="#" className="text-sm text-gray-400">Reputation Management</a>
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Company */}
                            <div className="relative" ref={menuRef}>
                                <button
                                    className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#7FFF00] py-2"
                                    onMouseEnter={() => handleMenuClick("company")}
                                >
                                    <span>Company</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>


                                {activeMenu === "company" && (
                                    <div className="absolute top-full -left-94 w-screen max-w-6xl bg-black shadow-lg border rounded-b-4xl mt-4 transition-all">
                                        <h1 className="ml-7 mt-5 text-3xl font-bold text-white">
                                            <Typewriter
                                                words={["Company"]}
                                                typeSpeed={100}
                                                cursor
                                                cursorStyle="|"
                                                delaySpeed={1000}
                                                loop={1}
                                            />
                                        </h1>

                                        <div className="grid grid-cols-3 gap-8 p-8">
                                            <div>
                                                <h3 className="font-semibold mb-2 text-white">Who We Are</h3>
                                                <p className="text-sm text-gray-400 mb-2">
                                                    Innovating the future with cutting-edge IT solutions.
                                                </p>
                                                <a href="#" className="text-white text-sm hover:underline">
                                                    Learn more →
                                                </a>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2 text-white">Join Our Team</h3>
                                                <p className="text-sm text-gray-400 mb-2">
                                                    Explore exciting career opportunities in the tech world.
                                                </p>
                                                <a href="#" className="text-white text-sm hover:underline">
                                                    Learn more →
                                                </a>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2 text-white">Tech Insights</h3>
                                                <p className="text-sm text-gray-400 mb-2">
                                                    Stay updated with the latest trends and innovations in IT.
                                                </p>
                                                <a href="#" className="text-white text-sm hover:underline">
                                                    Learn more →
                                                </a>
                                            </div>
                                        </div>

                                        {/* Social Links Section */}
                                        <div className="grid grid-cols-3 gap-8 p-8 bg-gray-100 rounded-b-4xl">
                                            <a
                                                href="https://www.linkedin.com/in/yourprofile"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-black font-semibold"
                                            >
                                                <FaLinkedin size={24} />
                                                <span>techcareer</span>
                                            </a>
                                            <a
                                                href="mailto:your.email@example.com"
                                                className="flex items-center gap-2 text-black font-semibold"
                                            >
                                                <FaEnvelope size={24} />
                                                <span>info@techcareer.com</span>
                                            </a>
                                            <a
                                                href="https://wa.me/yourwhatsappnumber"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-black font-semibold"
                                            >
                                                <FaWhatsapp size={24} />
                                                <span>WhatsApp</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Software solutions */}
                            <div className="relative ">
                                <button
                                    className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#7FFF00] py-2"
                                    onMouseEnter={() => handleMenuClick("software-solutions")}
                                >
                                    <span>Software Solutions</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {activeMenu === "software-solutions" && (
                                    <div className="absolute top-full -left-128 w-screen max-w-6xl bg-black shadow-lg border rounded-b-4xl mt-4">
                                        <h1 className="ml-7 mt-5 text-3xl font-bold text-white">

                                            <Typewriter
                                                words={["Software Solutions"]}
                                                typeSpeed={100} // Typing Speed
                                                cursor
                                                cursorStyle="|"
                                                delaySpeed={1000} // Delay before stopping
                                                loop={1} // Type only once
                                            />
                                        </h1>
                                        <div className="grid grid-cols-3 gap-8 p-8">
                                            <div>
                                                <h3 className="font-semibold mb-2 text-white">Cloud Solutions</h3>
                                                <p className="text-sm text-gray-400  mb-2">
                                                    Scale your business with secure and efficient cloud computing services.
                                                </p>
                                                <a href="#" className="text-white text-sm hover:underline">
                                                    Learn more →
                                                </a>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2 text-white">Cybersecurity</h3>
                                                <p className="text-sm text-gray-400  mb-2">
                                                    Protect your digital assets with our advanced security solutions.
                                                </p>
                                                <a href="#" className="text-white  text-sm hover:underline">
                                                    Learn more →
                                                </a>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2 text-white">AI & Data Analytics</h3>
                                                <p className="text-sm text-gray-400 mb-2">
                                                    Unlock insights and drive growth with powerful AI-driven analytics.
                                                </p>
                                                <a href="#" className="text-white  text-sm hover:underline">
                                                    Learn more →
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>

                            <Link href="#" className="text-sm font-medium text-white hover:text-[#7FFF00]">
                                Help & Support
                            </Link>
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-4">


                            <Link
                                to={'/contact'}
                                className="text-sm font-medium px-4 py-2 bg-[#7BFF00] hover:text-black hover:bg-white text-gray-700 rounded-full flex items-center space-x-2 transition-all duration-300"
                            >
                                <AiOutlinePhone className="text-lg rotate-90" /> {/* Contact Icon */}
                                <span className="font-bold">Contact With Us</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button className="text-white hover:text-[#7FFF00]">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

