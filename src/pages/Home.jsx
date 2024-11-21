

import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdOutlineArrowRight } from "react-icons/md";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";
import { GoDotFill, GoDot } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
// Import all images
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.jpg";
import gzi from "../assets/gzi.png";
import recruiters from "../assets/recruiters.png";
import onf from "../assets/ONF.jpg";
import dawn from "../assets/dawn.png";
import logo from "../assets/logo.png";
import rewiring from "../assets/shakinghands.png";
import getintouch from "../assets/getintouch.jpg";
// Import components
import Footer from "../components/Footer";
import ResourceDropDown from "../components/ResourceDropDown";
import ContactForm from "../components/ContactForm";
import { slides } from "../components/slides";
import { solutionCards } from "../components/solutionCards";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isResourceHovered, setIsResourceHovered] = useState(false);
    const resourceDropdownRef = useRef(null);

    const handleResourceMouseEnter = () => {
        setIsResourceHovered(true);
    };

    const handleResourceMouseLeave = () => {
        setIsResourceHovered(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <div className="min-h-screen font-poppins">
            {/* Mobile Header */}
            <header className="lg:hidden bg-white shadow-md p-4 fixed top-0 w-full z-50">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-950 hover:text-blue-800 transition-colors">
                        <RxHamburgerMenu />
                    </button>
                </div>
                {menuOpen && (
                    <nav className="mt-4 animate-slideDown">
                        <a href="#" className="block py-3 px-4 hover:bg-gray-50 transition-colors text-blue-950">
                            ABOUT US
                        </a>
                        <a href="#" className="block py-3 px-4 hover:bg-gray-50 transition-colors text-blue-950">
                            SAP
                        </a>
                        <a href="#" className="block py-3 px-4 hover:bg-gray-50 transition-colors text-blue-950">
                            MICROSOFT
                        </a>
                        <a href="#" className="block py-3 px-4 hover:bg-gray-50 transition-colors text-blue-950">
                            RESOURCES
                        </a>
                        <a href="#" className="block py-3 px-4 hover:bg-gray-50 transition-colors text-blue-950">
                            CAREER
                        </a>
                    </nav>
                )}
            </header>

            <main className="pt-16 lg:pt-0">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[80vh] lg:h-[90vh]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Desktop Navigation */}
                            <div className="hidden lg:block absolute inset-x-0 top-0 z-50 text-white">
                                <div className="container mx-auto px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-x-6 justify-end text-sm">
                                                <a href="#" className="hover:text-gray-200 transition-colors">
                                                    Careers
                                                </a>
                                                <span className="h-4 w-px bg-white/60"></span>
                                                <a href="#" className="hover:text-gray-200 transition-colors">
                                                    Contact Support
                                                </a>
                                                <span className="h-4 w-px bg-white/60"></span>
                                                <a href="#" className="hover:text-gray-200 transition-colors">
                                                    Remote Login
                                                </a>
                                                <button className="bg-blue-950 hover:bg-blue-900 transition-colors px-4 py-2 rounded-md">
                                                    Contact Us
                                                </button>
                                            </div>
                                            <div className="flex gap-x-8 text-sm font-medium">
                                                <NavItem text="ABOUT US" hasDropdown />
                                                <NavItem text="SAP" />
                                                <NavItem text="MICROSOFT" hasDropdown />
                                                <div
                                                    className="relative"
                                                    onMouseEnter={handleResourceMouseEnter}
                                                    onMouseLeave={handleResourceMouseLeave}
                                                    ref={resourceDropdownRef}
                                                >
                                                    <p className="flex items-center gap-x-2 cursor-pointer">
                                                        RESOURCES {isResourceHovered ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                    </p>
                                                    {isResourceHovered && (
                                                        <div className="absolute top-full left-0 p-4 shadow-md z-50">
                                                            <ResourceDropDown />
                                                        </div>
                                                    )}
                                                </div>
                                                <NavItem text="CAREER" hasDropdown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Content */}
                            <div className="absolute inset-0 bg-black/50 flex items-center">
                                <div className="container mx-auto px-6">
                                    <div className="max-w-3xl space-y-6">
                                        <h1 className="font-roboto-slab text-3xl md:text-5xl lg:text-6xl text-white font-bold">{slide.title}</h1>
                                        {slide.subtitle && (
                                            <p className="text-xl md:text-3xl lg:text-4xl text-white font-semibold">{slide.subtitle}</p>
                                        )}
                                        <p className="text-lg md:text-xl text-white/90">{slide.text}</p>
                                        <button className="bg-blue-950 hover:bg-blue-900 transition-colors rounded-lg flex items-center gap-x-2 text-white px-6 py-3 text-sm md:text-base font-medium">
                                            {slide.button}
                                            <IoArrowForwardOutline className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Slider Controls */}
                    <SliderControls
                        prevSlide={prevSlide}
                        nextSlide={nextSlide}
                        currentSlide={currentSlide}
                        totalSlides={slides.length}
                        goToSlide={goToSlide}
                    />
                </section>

                {/* Solutions Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center gap-x-4 mb-12">
                            <div className="w-1 h-12 bg-blue-950"></div>
                            <h2 className="font-roboto-slab text-2xl md:text-3xl font-medium">Solutions built for you</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutionCards.map((card, index) => (
                                <SolutionCard key={index} {...card} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted Clients Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">Trusted support for our clients</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-x-24">
                            <img src={gzi} alt="GZI" className="h-16 object-contain" />
                            <img src={recruiters} alt="Recruiters" className="h-16 object-contain" />
                            <img src={onf} alt="ONF" className="h-16 object-contain" />
                            <img src={dawn} alt="Dawn" className="h-16 object-contain" />
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-black py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-center text-white font-semibold text-3xl mb-16">What our Customers say</h2>
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <TestimonialCard
                                role="Head Manager, Skyline Systems"
                                quote="Automation has never been easier. EDTAA's only IAUTO have made our processes so much smoother and efficient."
                                showPause
                            />
                            <TestimonialCard
                                role="Department Manager, FusionCore"
                                quote="We've always struggled migrating to the cloud, but EDTAA's Migration team made it most 30-min clarity call only. It's been a game-changer for us all at FusionCore."
                                showArrows
                            />
                        </div>
                    </div>
                </section>

                {/* AI Section */}
                <section className="bg-black py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2 space-y-6">
                                <h2 className="text-white text-4xl md:text-5xl font-semibold">Rewiring and helping businesses with Intelligent AI</h2>
                                <p className="text-lg text-white/90">
                                    To innovate and compete, enterprises must strategically rewire the business for an AI-enabled future.
                                </p>
                                <button className="bg-blue-900 hover:bg-blue-800 text-white flex items-center gap-x-2 px-6 py-3 rounded-2xl transition-colors">
                                    Get details <MdOutlineArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="md:w-1/2">
                                <img src={rewiring} alt="AI Transformation" className="w-full max-w-2xl h-auto rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-gray-100 py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-blue-950 text-lg font-light">GET IN TOUCH</p>
                                    <h2 className="font-roboto-slab text-3xl md:text-4xl font-bold mt-2">We'd love to hear from you</h2>
                                </div>
                                <p className="text-gray-700 text-lg">
                                    Have a question? Interested in partnering with us? Let's get the conversation started! Tell us a bit about how we
                                    can help below and we'll be in touch!
                                </p>
                                <ContactForm />
                            </div>
                            <div className="hidden lg:block">
                                <img
                                    src={getintouch}
                                    alt="Get in touch illustration"
                                    className="w-full max-w-2xl h-auto rounded-xl object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

// Helper Components
const NavItem = ({ text, hasDropdown }) => (
    <div className="relative group">
        <button className="flex items-center gap-x-1 hover:text-gray-200 transition-colors">
            {text}
            {hasDropdown && <IoIosArrowDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />}
        </button>
    </div>
);

const SolutionCard = ({ title, description, linkText }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
        <h3 className="font-roboto-slab text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all">
            {linkText}
            <MdOutlineKeyboardArrowRight className="w-5 h-5" />
        </button>
    </div>
);

const TestimonialCard = ({ role, quote, showPause, showArrows }) => (
    <div className="space-y-6">
        <p className="text-lg text-gray-300">{role}</p>
        <p className="font-roboto-slab text-2xl md:text-3xl text-white">{quote}</p>
        {showPause && (
            <div className="bg-gray-600 flex justify-center items-center w-[35px] h-[35px]">
                <TbPlayerPauseFilled className="w-6 h-6 text-white" />
            </div>
        )}
        {showArrows && (
            <div className="flex gap-x-2">
                <button className="bg-gray-600 flex justify-center items-center w-[35px] h-[35px]">
                    <IoArrowBackSharp className="w-6 h-6 text-white" />
                </button>
                <button className="bg-gray-600 flex justify-center items-center w-[35px] h-[35px]">
                    <IoArrowForwardOutline className="w-6 h-6 text-white" />
                </button>
            </div>
        )}
    </div>
);

const SliderControls = ({ prevSlide, nextSlide, currentSlide, totalSlides, goToSlide }) => (
    <>
        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 rounded-full z-50 transition-colors"
        >
            <FaChevronLeft className="w-4 h-4" />
        </button>
        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 rounded-full z-50 transition-colors"
        >
            <FaChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-x-2 z-50">
            {[...Array(totalSlides)].map((_, index) => (
                <button key={index} onClick={() => goToSlide(index)} className="focus:outline-none">
                    {index === currentSlide ? (
                        <GoDotFill className="w-5 h-5 text-white" />
                    ) : (
                        <GoDot className="w-5 h-5 text-white opacity-50 hover:opacity-100 transition-opacity" />
                    )}
                </button>
            ))}
        </div>
    </>
);

export default Home;