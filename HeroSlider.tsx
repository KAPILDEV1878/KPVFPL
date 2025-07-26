
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  title: string;
  tagline: string;
  cta: string;
  description: string;
  ctaAction: string;
  image: string;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Your Roadmap to Financial Prosperity",
      tagline: "Cutting-edge financial solutions for sustainable growth",
      cta: "Start Your Journey",
      description: "Portfolio-based consulting that scales startups, stabilizes finances, and amplifies growth for entrepreneurs, MSMEs, and modern professionals.",
      ctaAction: "prosperity-roadmap",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20business%20executive%20in%20premium%20navy%20blue%20suit%20standing%20confidently%20in%20modern%20glass%20corporate%20office%20with%20city%20skyline%20background%2C%20clean%20minimalist%20workspace%20with%20financial%20charts%20and%20growth%20graphs%20visible%2C%20natural%20lighting%20creating%20sophisticated%20atmosphere%2C%20well-groomed%20businessman%20with%20confident%20posture%20representing%20financial%20success%20and%20prosperity%2C%20high-end%20corporate%20environment%20with%20marble%20surfaces%20and%20contemporary%20furniture&width=1920&height=1080&seq=hero-brand-v4&orientation=landscape"
    },
    {
      title: "Business Compliance Made Simple",
      tagline: "Stay compliant, stay competitive with expert guidance",
      cta: "Ensure Compliance",
      description: "Comprehensive business compliance solutions to keep your venture legally sound and operationally efficient.",
      ctaAction: "compliance-popup",
      image: "https://readdy.ai/api/search-image?query=Well-groomed%20Indian%20business%20compliance%20officer%20in%20formal%20business%20attire%20reviewing%20regulatory%20documents%20and%20legal%20certificates%20in%20pristine%20corporate%20office%2C%20organized%20mahogany%20desk%20with%20official%20documentation%20folders%20and%20compliance%20checklists%2C%20professional%20workspace%20with%20law%20books%20and%20regulatory%20guidelines%2C%20clean%20corporate%20environment%20with%20natural%20lighting%20emphasizing%20attention%20to%20detail%20and%20legal%20precision&width=1920&height=1080&seq=hero-compliance-v4&orientation=landscape"
    },
    {
      title: "Smart Accountancy Solutions",
      tagline: "Intelligent financial management for modern businesses",
      cta: "Optimize Finances",
      description: "Advanced accounting solutions powered by smart technology to streamline your financial operations.",
      ctaAction: "accountancy-popup",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20chartered%20accountant%20in%20crisp%20white%20shirt%20and%20dark%20blazer%20working%20with%20advanced%20financial%20software%20on%20dual%20monitors%2C%20modern%20accounting%20office%20with%20organized%20ledger%20books%20and%20financial%20statements%2C%20calculator%20and%20accounting%20tools%20on%20clean%20desk%2C%20contemporary%20workspace%20with%20professional%20lighting%20showcasing%20precision%20and%20expertise%20in%20financial%20management&width=1920&height=1080&seq=hero-accounting-v4&orientation=landscape"
    },
    {
      title: "Strategic Tax Optimization",
      tagline: "Maximize savings, minimize tax burden legally",
      cta: "Reduce Tax Burden",
      description: "Strategic tax planning and optimization to maximize your savings while ensuring full compliance.",
      ctaAction: "tax-popup",
      image: "https://readdy.ai/api/search-image?query=Experienced%20Indian%20tax%20consultant%20in%20professional%20business%20suit%20analyzing%20tax%20planning%20strategies%20with%20calculator%20and%20ITR%20forms%2C%20modern%20office%20desk%20with%20tax%20documents%20and%20savings%20calculation%20sheets%2C%20organized%20workspace%20with%20tax%20code%20books%20and%20financial%20planning%20materials%2C%20clean%20corporate%20environment%20with%20professional%20lighting%20emphasizing%20strategic%20planning%20and%20legal%20tax%20optimization&width=1920&height=1080&seq=hero-tax-v4&orientation=landscape"
    },
    {
      title: "Intelligent Financial Planning",
      tagline: "Future-ready financial strategies for sustained growth",
      cta: "Plan Your Future",
      description: "AI-powered financial planning that adapts to your goals and market conditions for sustainable growth.",
      ctaAction: "planning-popup",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20financial%20planner%20in%20elegant%20business%20attire%20creating%20comprehensive%20investment%20portfolio%20with%20multiple%20charts%20and%20graphs%2C%20modern%20office%20with%20large%20display%20screens%20showing%20market%20analysis%20and%20wealth%20management%20strategies%2C%20organized%20workspace%20with%20financial%20planning%20documents%20and%20goal%20tracking%20materials%2C%20sophisticated%20corporate%20environment%20with%20natural%20lighting%20emphasizing%20strategic%20thinking%20and%20future%20planning&width=1920&height=1080&seq=hero-planning-v4&orientation=landscape"
    },
    {
      title: "Funding Readiness Support",
      tagline: "Prepare for investment success with expert guidance",
      cta: "Get Investment Ready",
      description: "Comprehensive preparation for funding rounds with investor-ready documentation and pitch strategies.",
      ctaAction: "funding-popup",
      image: "https://readdy.ai/api/search-image?query=Confident%20Indian%20entrepreneurs%20in%20premium%20business%20attire%20presenting%20funding%20proposal%20in%20modern%20conference%20room%20with%20investor%20pitch%20materials%2C%20sleek%20boardroom%20with%20large%20presentation%20screen%20displaying%20business%20growth%20charts%20and%20financial%20projections%2C%20professional%20meeting%20environment%20with%20polished%20table%20and%20contemporary%20chairs%2C%20corporate%20setting%20emphasizing%20investment%20readiness%20and%20business%20success&width=1920&height=1080&seq=hero-funding-v4&orientation=landscape"
    },
    {
      title: "360° Portfolio Prosperity",
      tagline: "Complete financial ecosystem for maximum growth",
      cta: "Unlock Prosperity",
      description: "Holistic portfolio management that integrates all financial aspects for maximum prosperity potential.",
      ctaAction: "portfolio-popup",
      image: "https://readdy.ai/api/search-image?query=Senior%20Indian%20business%20analyst%20in%20sophisticated%20corporate%20attire%20reviewing%20comprehensive%20portfolio%20dashboard%20with%20multiple%20financial%20metrics%20on%20large%20curved%20monitors%2C%20premium%20executive%20office%20with%20panoramic%20city%20view%2C%20organized%20workspace%20with%20strategic%20planning%20documents%20and%20performance%20analysis%20reports%2C%20luxurious%20corporate%20environment%20with%20modern%20furniture%20and%20professional%20lighting%20showcasing%20360-degree%20business%20excellence&width=1920&height=1080&seq=hero-portfolio-v4&orientation=landscape"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 second interval

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCTAClick = (action: string) => {
    if (action === "prosperity-roadmap") {
      document.getElementById('prosperity-roadmap')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Trigger respective popup in prosperity roadmap
      const serviceId = action.replace('-popup', '');
      const serviceMap: { [key: string]: number } = {
        'compliance': 1,
        'accountancy': 2,
        'tax': 3,
        'planning': 4,
        'funding': 5,
        'portfolio': 6
      };
      
      const serviceNumber = serviceMap[serviceId];
      if (serviceNumber) {
        document.getElementById('prosperity-roadmap')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('openServicePopup', { detail: { serviceId: serviceNumber } }));
        }, 500);
      }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Smooth Transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          />
        ))}
      </div>
      
      {/* Subtle Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
      
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo and Brand Section - Consistent Across All Slides */}
            <div className="flex items-center justify-center mb-8 sm:mb-12 lg:mb-16">
              <img 
                src="https://static.readdy.ai/image/a4bce69f5119c600272f7cca5447e2ab/ce41f9e817ce621b5370451f15824822.png" 
                alt="FINANCITY Portfolio Landmark Logo" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto mr-3 sm:mr-4"
              />
              <div className="text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif leading-tight drop-shadow-lg">
                  FINANCITY Portfolio Landmark
                </div>
              </div>
            </div>
            
            {/* Slide Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif leading-tight px-4 drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium px-4 max-w-4xl mx-auto drop-shadow-md">
                {slides[currentSlide].tagline}
              </p>
              
              <div className="pt-4 sm:pt-6 lg:pt-8">
                <button 
                  onClick={() => handleCTAClick(slides[currentSlide].ctaAction)}
                  className="bg-[#FFD700] text-[#0A1931] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-base sm:text-lg lg:text-xl hover:bg-yellow-400 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {slides[currentSlide].cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20 shadow-lg hover:shadow-xl"
      >
        <i className="ri-arrow-left-line text-white text-xl sm:text-2xl lg:text-3xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20 shadow-lg hover:shadow-xl"
      >
        <i className="ri-arrow-right-line text-white text-xl sm:text-2xl lg:text-3xl"></i>
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-[#FFD700] scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
