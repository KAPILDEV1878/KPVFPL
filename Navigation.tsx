'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'prosperity-roadmap', label: 'Prosperity Roadmap' },
    { id: 'who-we-serve', label: 'Who We Serve' },
    { id: 'financity-standard', label: 'The FINANCITY Standard' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand - Improved Alignment */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <img 
              src="https://static.readdy.ai/image/a4bce69f5119c600272f7cca5447e2ab/ce41f9e817ce621b5370451f15824822.png" 
              alt="FINANCITY Logo" 
              className="h-8 sm:h-10 w-auto"
            />
            <div className="flex flex-col">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A1931] font-serif leading-tight">
                FINANCITY
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#FFD700] leading-tight -mt-1">
                Portfolio Landmark
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`font-medium transition-colors whitespace-nowrap cursor-pointer text-sm xl:text-base ${
                  activeSection === section.id
                    ? 'text-[#0A1931] border-b-2 border-[#FFD700] pb-1'
                    : 'text-gray-600 hover:text-[#0A1931]'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0A1931] cursor-pointer"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer ${
                    activeSection === section.id
                      ? 'text-[#0A1931] bg-[#FFD700]/10 border-l-4 border-[#FFD700]'
                      : 'text-gray-600 hover:text-[#0A1931] hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}