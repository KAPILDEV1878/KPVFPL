'use client';

import { useState, useEffect } from 'react';

export default function ProsperityRoadmap() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Listen for external popup triggers
  useEffect(() => {
    const handleOpenPopup = (event: CustomEvent) => {
      setSelectedService(event.detail.serviceId);
    };

    window.addEventListener('openServicePopup', handleOpenPopup as EventListener);
    return () => window.removeEventListener('openServicePopup', handleOpenPopup as EventListener);
  }, []);

  const services = [
    {
      id: 1,
      title: "Business Compliance",
      tagline: "Stay ahead of regulations, always audit-ready",
      icon: "ri-shield-check-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20compliance%20documentation%20and%20legal%20regulatory%20files%20on%20a%20modern%20office%20desk%20with%20certificates%20and%20official%20stamps%2C%20clean%20corporate%20environment%20with%20navy%20blue%20and%20gold%20accents%2C%20minimalist%20professional%20background&width=400&height=300&seq=compliance1&orientation=landscape",
      intro: "Ensure your business stays compliant with all regulations while maintaining operational efficiency. Our comprehensive compliance framework keeps you audit-ready at all times.",
      services: [
        "Business registrations & licenses",
        "Entity setup (Proprietor, LLP, Pvt Ltd)",
        "MCA/ROC filing & compliance",
        "PF/ESIC & labour law advisory",
        "DSC & renewal alerts",
        "Smart compliance calendar"
      ],
      pricing: {
        basic: "₹25,000/annum",
        standard: "₹45,000/annum",
        premium: "₹75,000/annum",
        complete: "₹1,20,000/annum"
      }
    },
    {
      id: 2,
      title: "Smart Accountancy",
      tagline: "Clean books. Clear vision. Confident growth",
      icon: "ri-calculator-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20accounting%20dashboard%20on%20laptop%20screen%20with%20financial%20charts%20and%20calculator%2C%20organized%20bookkeeping%20documents%20and%20invoices%2C%20professional%20finance%20workspace%20with%20navy%20blue%20and%20gold%20color%20scheme%2C%20clean%20minimal%20background&width=400&height=300&seq=accounting2&orientation=landscape",
      intro: "Transform your financial records into strategic insights. Our smart accountancy solutions provide real-time visibility into your business performance.",
      services: [
        "Daily to quarterly bookkeeping",
        "Bank reconciliation & invoicing",
        "GST-linked transaction tracking",
        "Payables & receivables management",
        "Expense categorization & profit insights",
        "MIS reports for smart decisions"
      ],
      pricing: {
        basic: "₹30,000/annum",
        standard: "₹55,000/annum",
        premium: "₹85,000/annum",
        complete: "₹1,40,000/annum"
      }
    },
    {
      id: 3,
      title: "Tax Optimization",
      tagline: "Don't just pay taxes — plan them",
      icon: "ri-file-text-line",
      image: "https://readdy.ai/api/search-image?query=Tax%20planning%20documents%20and%20financial%20calculations%20spread%20on%20desk%20with%20calculator%20and%20charts%20showing%20tax%20savings%20strategies%2C%20professional%20tax%20advisory%20setup%20with%20navy%20blue%20and%20gold%20elements%2C%20clean%20organized%20workspace&width=400&height=300&seq=tax3&orientation=landscape",
      intro: "Maximize your tax efficiency through strategic planning and optimization. Our expertise ensures you pay the right amount while maximizing legitimate savings.",
      services: [
        "Income Tax calculation, savings & filing",
        "GST registration, invoicing & returns",
        "TDS/TCS filing & 26AS review",
        "Advance & capital gains tax planning",
        "Smart tax-saving investment options"
      ],
      pricing: {
        basic: "₹20,000/annum",
        standard: "₹40,000/annum",
        premium: "₹70,000/annum",
        complete: "₹1,10,000/annum"
      }
    },
    {
      id: 4,
      title: "Intelligent Financial Planning",
      tagline: "Plan today for a wealthier tomorrow",
      icon: "ri-line-chart-line",
      image: "https://readdy.ai/api/search-image?query=Financial%20planning%20charts%20and%20investment%20portfolio%20analysis%20on%20modern%20tablet%20and%20documents%2C%20wealth%20management%20strategies%20visualization%20with%20growth%20graphs%2C%20professional%20financial%20advisory%20setup%20with%20navy%20blue%20and%20gold%20accents&width=400&height=300&seq=planning4&orientation=landscape",
      intro: "Build a comprehensive financial strategy that grows with your ambitions. Our intelligent planning approach creates sustainable wealth-building pathways.",
      services: [
        "Goal-based plans (personal & business)",
        "Wealth growth & capital safety",
        "Budgeting & cash flow forecasts",
        "Retirement & emergency fund strategies",
        "Financial health score & insights"
      ],
      pricing: {
        basic: "₹35,000/annum",
        standard: "₹65,000/annum",
        premium: "₹95,000/annum",
        complete: "₹1,50,000/annum"
      }
    },
    {
      id: 5,
      title: "Funding Readiness",
      tagline: "Be lender or investor-ready with clarity",
      icon: "ri-bank-line",
      image: "https://readdy.ai/api/search-image?query=Business%20funding%20presentation%20materials%20with%20pitch%20deck%20slides%20and%20financial%20projections%20on%20conference%20table%2C%20investor%20meeting%20preparation%20setup%20with%20professional%20documents%2C%20navy%20blue%20and%20gold%20corporate%20environment&width=400&height=300&seq=funding5&orientation=landscape",
      intro: "Prepare your business for successful funding rounds with comprehensive financial documentation and strategic positioning.",
      services: [
        "Loan eligibility & CIBIL review",
        "CMA report & financial projections",
        "Rebuild P&L & balance sheet",
        "Bank/NBFC/investor proposal prep",
        "Pitch deck & financial storytelling"
      ],
      pricing: {
        basic: "₹40,000/annum",
        standard: "₹70,000/annum",
        premium: "₹1,10,000/annum",
        complete: "₹1,80,000/annum"
      }
    },
    {
      id: 6,
      title: "360° Portfolio Prosperity Plan",
      tagline: "A living roadmap that evolves with your goals",
      icon: "ri-compass-line",
      image: "https://readdy.ai/api/search-image?query=Comprehensive%20business%20portfolio%20dashboard%20showing%20multiple%20financial%20metrics%20and%20growth%20indicators%20on%20large%20monitor%2C%20360-degree%20business%20analysis%20workspace%20with%20charts%20and%20strategic%20planning%20documents%2C%20professional%20navy%20blue%20and%20gold%20themed%20office%20environment&width=400&height=300&seq=portfolio6&orientation=landscape",
      intro: "Experience complete financial transformation with our flagship comprehensive solution that integrates all services into one powerful prosperity system.",
      services: [
        "Diagnose gaps & growth areas",
        "Profit planning & cost control",
        "Funding & pitch readiness",
        "Custom roadmap by business stage",
        "Personalized prosperity strategy",
        "Monthly/quarterly reviews",
        "Smart tax & GST alerts",
        "Unified personal & business dashboard"
      ],
      pricing: {
        basic: "₹1,50,000/annum",
        standard: "₹2,50,000/annum",
        premium: "₹4,00,000/annum",
        complete: "₹6,50,000/annum"
      }
    }
  ];

  const openPopup = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <section id="prosperity-roadmap" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1931] mb-4 font-serif">
            Your Prosperity Roadmap
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            A systematic approach to financial success, designed to guide you from where you are to where you want to be. Your step-by-step journey from financial foundation to sustainable wealth — from compliance to prosperity.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <button
                    onClick={() => openPopup(service.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
                  >
                    <i className="ri-search-line text-[#0A1931] text-lg"></i>
                  </button>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A1931] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <i className={`${service.icon} text-[#FFD700] text-lg sm:text-xl`}></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1931] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="https://forms.gle/iC6EAS3qBcrHy2TP9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0A1931] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#0A1931]/90 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
            >
              Begin Your Roadmap
            </a>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedService && selectedServiceData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1931] pr-4">
                  {selectedServiceData.title}
                </h3>
                <button
                  onClick={closePopup}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer flex-shrink-0"
                >
                  <i className="ri-close-line text-gray-600"></i>
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-base sm:text-lg text-[#0A1931] font-semibold mb-2">
                  {selectedServiceData.tagline}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {selectedServiceData.intro}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-[#0A1931] mb-4">Services Included:</h4>
                <ul className="space-y-2">
                  {selectedServiceData.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-[#FFD700] text-lg mr-2 mt-0.5 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm sm:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-[#0A1931] mb-4">Pricing Tiers:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Basic</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedServiceData.pricing.basic.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Standard</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedServiceData.pricing.standard.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Premium</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedServiceData.pricing.premium.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                  <div className="bg-[#FFD700]/10 p-3 sm:p-4 rounded-lg border border-[#FFD700]">
                    <div className="text-xs sm:text-sm text-[#0A1931] mb-1">360°</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedServiceData.pricing.complete.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://forms.gle/iC6EAS3qBcrHy2TP9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0A1931] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1931]/90 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Book My Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}