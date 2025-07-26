
'use client';

import { useState } from 'react';

export default function WhoWeServe() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  const clientTypes = [
    {
      id: 1,
      title: "Salaried & Modern Professionals",
      description: "Smart financial guidance for salary earners looking to optimize income and build wealth",
      icon: "ri-user-star-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20professional%20working%20at%20desk%20with%20laptop%20and%20financial%20documents%2C%20clean%20office%20environment%20with%20charts%20showing%20salary%20growth%20and%20investment%20planning%2C%20navy%20blue%20and%20gold%20themed%20workspace&width=400&height=300&seq=salaried1&orientation=landscape",
      intro: "Comprehensive financial solutions designed for salaried professionals seeking to maximize income potential and build sustainable wealth through smart planning and strategic investments.",
      services: [
        "GST/side income guidance",
        "Monthly income-expense tracking",
        "Form 16, HRA, 80C/80D, ITR filing",
        "Tax-free investment & goal mapping",
        "Loan pre-checks & eligibility",
        "Salary-to-wealth roadmap & EMI advice"
      ],
      pricing: {
        basic: "₹15,000/annum",
        standard: "₹25,000/annum",
        premium: "₹40,000/annum",
        complete: "₹65,000/annum"
      }
    },
    {
      id: 2,
      title: "New-Age Entrepreneurs",
      description: "Innovative startup solutions for modern entrepreneurs building tomorrow's ventures",
      icon: "ri-lightbulb-line",
      image: "https://readdy.ai/api/search-image?query=Young%20entrepreneur%20presenting%20startup%20idea%20with%20pitch%20deck%20on%20screen%2C%20modern%20co-working%20space%20with%20laptop%20and%20business%20planning%20documents%2C%20innovative%20tech%20startup%20environment%20with%20growth%20charts&width=400&height=300&seq=entrepreneur2&orientation=landscape",
      intro: "Tailored financial strategies for new-age entrepreneurs launching innovative ventures, providing comprehensive support from startup formation to funding success.",
      services: [
        "GST, UDYAM, Shop Act setup",
        "Accounting system setup & monthly books",
        "Expense deductions & early tax strategies",
        "Founder roadmap & startup budgeting",
        "Pitch review & capital access",
        "Cashflow sync & investor milestone tracking"
      ],
      pricing: {
        basic: "₹30,000/annum",
        standard: "₹50,000/annum",
        premium: "₹80,000/annum",
        complete: "₹1,25,000/annum"
      }
    },
    {
      id: 3,
      title: "MSME Owners",
      description: "Comprehensive business solutions for small and medium enterprise growth and compliance",
      icon: "ri-building-line",
      image: "https://readdy.ai/api/search-image?query=MSME%20business%20owner%20reviewing%20financial%20reports%20in%20manufacturing%20facility%2C%20industrial%20workspace%20with%20production%20equipment%20and%20business%20growth%20charts%2C%20professional%20business%20environment&width=400&height=300&seq=msme3&orientation=landscape",
      intro: "Complete business management solutions for MSME owners focused on operational efficiency, compliance management, and sustainable growth strategies.",
      services: [
        "ROC, GST, PF/ESIC, audit-ready docs",
        "Sales/purchase entry, ledgers, inventory",
        "Deductions & advance tax planning",
        "Growth v/s savings allocation",
        "OD/CC limits, working capital, subsidies",
        "Business health & cash burn insights"
      ],
      pricing: {
        basic: "₹40,000/annum",
        standard: "₹65,000/annum",
        premium: "₹95,000/annum",
        complete: "₹1,50,000/annum"
      }
    },
    {
      id: 4,
      title: "Freelancers & Consultants",
      description: "Flexible financial solutions for independent professionals and service providers",
      icon: "ri-briefcase-line",
      image: "https://readdy.ai/api/search-image?query=Freelancer%20consultant%20working%20from%20home%20office%20with%20multiple%20client%20projects%2C%20organized%20workspace%20with%20invoices%20and%20financial%20planning%20documents%2C%20modern%20professional%20home%20setup&width=400&height=300&seq=freelancer4&orientation=landscape",
      intro: "Specialized financial management for freelancers and consultants managing variable income streams and building sustainable independent practices.",
      services: [
        "GST, sole prop setup for service pros",
        "Income logs, invoices, bank reconciliation",
        "44ADA, GST ITC (if eligible)",
        "Variable income, smart investing",
        "Loan preparation without Form 16",
        "Goal-based assets, invoice tracking"
      ],
      pricing: {
        basic: "₹20,000/annum",
        standard: "₹35,000/annum",
        premium: "₹55,000/annum",
        complete: "₹85,000/annum"
      }
    },
    {
      id: 5,
      title: "Wholesalers & Retailers",
      description: "Specialized solutions for trading businesses and retail operations management",
      icon: "ri-store-line",
      image: "https://readdy.ai/api/search-image?query=Retail%20store%20owner%20managing%20inventory%20and%20sales%20records%20with%20POS%20system%2C%20organized%20warehouse%20with%20products%20and%20business%20tracking%20systems%2C%20professional%20retail%20environment&width=400&height=300&seq=retail5&orientation=landscape",
      intro: "Comprehensive trading solutions for wholesalers and retailers focusing on inventory management, sales optimization, and sustainable business growth.",
      services: [
        "GST, Shop Act, FSSAI, UDYAM/MSME",
        "Sale-purchase logs, UPI, margin reports",
        "Stock deductions, audit prep on threshold",
        "Inventory vs cash flow, credit cycle",
        "Loans, POS & merchant funding",
        "Daily tracker, profit dashboard, seasonal insights"
      ],
      pricing: {
        basic: "₹35,000/annum",
        standard: "₹60,000/annum",
        premium: "₹90,000/annum",
        complete: "₹1,40,000/annum"
      }
    },
    {
      id: 6,
      title: "Visionary Investors & HNIs",
      description: "Elite wealth management services for high net worth individuals and strategic investors",
      icon: "ri-vip-crown-line",
      image: "https://readdy.ai/api/search-image?query=Wealthy%20investor%20reviewing%20diversified%20portfolio%20on%20premium%20office%20setup%20with%20multiple%20screens%20showing%20investment%20performance%2C%20luxury%20executive%20environment%20with%20financial%20advisors&width=400&height=300&seq=hni6&orientation=landscape",
      intro: "Premium wealth management solutions for visionary investors and HNIs seeking sophisticated financial strategies and comprehensive portfolio optimization.",
      services: [
        "KYC & asset compliance",
        "Capital gains & investment logs",
        "LTCG/STCG, dividend, loss set-off",
        "Diversification & ROI strategy",
        "Credit use for asset growth",
        "Wealth blueprint, trust/HUF planning"
      ],
      pricing: {
        basic: "₹75,000/annum",
        standard: "₹1,50,000/annum",
        premium: "₹2,50,000/annum",
        complete: "₹4,00,000/annum"
      }
    }
  ];

  const openPopup = (clientId: number) => {
    setSelectedClient(clientId);
  };

  const closePopup = () => {
    setSelectedClient(null);
  };

  const selectedClientData = clientTypes.find(client => client.id === selectedClient);

  return (
    <section id="who-we-serve" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1931] mb-4 font-serif">
            Who We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            Empowering diverse clients with tailored financial solutions for their unique journey to prosperity
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clientTypes.map((client) => (
              <div key={client.id} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={client.image} 
                    alt={client.title}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A1931] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <i className={`${client.icon} text-[#FFD700] text-lg sm:text-xl`}></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1931] leading-tight">
                      {client.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {client.description}
                  </p>
                  
                  <button
                    onClick={() => openPopup(client.id)}
                    className="w-full bg-[#0A1931] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0A1931]/90 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                  >
                    Key Services
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="https://calendar.app.google/eZeCRmD1vxJfZ1Kh7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFD700] text-[#0A1931] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#FFD700]/90 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedClient && selectedClientData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1931] pr-4">
                  {selectedClientData.title}
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
                  {selectedClientData.description}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {selectedClientData.intro}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-[#0A1931] mb-4">Key Services:</h4>
                <ul className="space-y-2">
                  {selectedClientData.services.map((service, index) => (
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
                      {selectedClientData.pricing.basic.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Standard</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedClientData.pricing.standard.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Premium</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedClientData.pricing.premium.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                  <div className="bg-[#FFD700]/10 p-3 sm:p-4 rounded-lg border border-[#FFD700]">
                    <div className="text-xs sm:text-sm text-[#0A1931] mb-1">360°</div>
                    <div className="text-sm sm:text-base font-bold text-[#0A1931] break-words">
                      {selectedClientData.pricing.complete.replace('/annum', '')}
                      <div className="text-xs text-gray-500">/annum</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://wa.me/918657131823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0A1931] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1931]/90 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Schedule Success Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
