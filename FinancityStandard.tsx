'use client';

import { useState, useEffect } from 'react';

interface SuccessStory {
  id: number;
  name: string;
  occupation: string;
  category: string;
  image: string;
  before: string;
  after: string;
  outcomes: {
    saved: string;
    improved: string;
    achieved: string;
  };
  fullStory: string;
}

export default function FinancityStandard() {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: "Rajesh Sharma",
      occupation: "Software Engineer",
      category: "Salaried Professional",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20software%20engineer%20in%20business%20attire%20working%20at%20modern%20office%20desk%20with%20laptop%20and%20financial%20documents%2C%20confident%20expression%2C%20clean%20corporate%20background&width=300&height=300&seq=success1&orientation=squarish",
      before: "Complex tax filing procedures and missed investment opportunities leading to financial stress",
      after: "Streamlined tax processes with maximized savings and strategic investment portfolio delivering consistent returns",
      outcomes: {
        saved: "₹2.5 Lakhs",
        improved: "65% better returns",
        achieved: "3 financial goals on track"
      },
      fullStory: "Rajesh came to us with scattered investments and high tax liability. Through our systematic approach, we restructured his portfolio, optimized his tax planning, and created a clear roadmap for his financial goals. Within 18 months, he achieved significant tax savings and improved investment returns."
    },
    {
      id: 2,
      name: "Priya Patel",
      occupation: "Startup Founder",
      category: "New-Age Entrepreneur",
      image: "https://readdy.ai/api/search-image?query=Young%20Indian%20female%20entrepreneur%20in%20modern%20business%20attire%20presenting%20startup%20idea%2C%20confident%20and%20professional%20demeanor%2C%20contemporary%20office%20environment%20with%20startup%20atmosphere&width=300&height=300&seq=success2&orientation=squarish",
      before: "Regulatory compliance gaps and unprepared funding documentation creating investor skepticism",
      after: "Complete regulatory compliance achieved with professional funding materials securing investor confidence",
      outcomes: {
        saved: "₹8 Lakhs",
        improved: "90% compliance score",
        achieved: "₹50 Lakhs funding secured"
      },
      fullStory: "Priya's tech startup was facing compliance issues that were hampering her funding efforts. Our comprehensive compliance and funding readiness program helped her achieve full regulatory compliance and secure her Series A funding within 8 months."
    },
    {
      id: 3,
      name: "Arjun Kumar",
      occupation: "Manufacturing Unit Owner",
      category: "MSME Owner",
      image: "https://readdy.ai/api/search-image?query=Indian%20MSME%20manufacturing%20business%20owner%20in%20industrial%20setting%20with%20machinery%20in%20background%2C%20professional%20attire%2C%20confident%20businessman%20pose%2C%20clean%20industrial%20environment&width=300&height=300&seq=success3&orientation=squarish",
      before: "Unpredictable cash flow cycles and limited working capital constraining business growth potential",
      after: "Optimized cash flow management with expanded credit facilities enabling sustainable business expansion",
      outcomes: {
        saved: "₹12 Lakhs",
        improved: "80% cash flow optimization",
        achieved: "₹2 Crores credit facility"
      },
      fullStory: "Arjun's manufacturing unit was struggling with cash flow management and working capital constraints. Our systematic approach to financial planning and banking relationships helped him secure increased credit facilities and optimize his cash flow cycles."
    },
    {
      id: 4,
      name: "Meera Gupta",
      occupation: "Freelance Consultant",
      category: "Freelancer",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20freelance%20consultant%20working%20from%20modern%20home%20office%20setup%20with%20laptop%20and%20client%20documents%2C%20confident%20and%20organized%20workspace%2C%20professional%20home%20environment&width=300&height=300&seq=success4&orientation=squarish",
      before: "Inconsistent income patterns and complex tax obligations creating financial uncertainty",
      after: "Structured income management with optimized tax planning ensuring financial stability and growth",
      outcomes: {
        saved: "₹1.8 Lakhs",
        improved: "70% income stability",
        achieved: "5 major client contracts"
      },
      fullStory: "Meera was struggling with irregular income patterns and complex tax compliance as a freelancer. Our tailored approach helped her create income stability, optimize her tax planning, and establish a sustainable business structure."
    },
    {
      id: 5,
      name: "Suresh Agarwal",
      occupation: "Electronics Retailer",
      category: "Retailer",
      image: "https://readdy.ai/api/search-image?query=Indian%20electronics%20retail%20shop%20owner%20in%20modern%20retail%20store%20with%20electronic%20gadgets%20and%20organized%20inventory%2C%20professional%20businessman%20in%20retail%20environment%2C%20clean%20store%20background&width=300&height=300&seq=success5&orientation=squarish",
      before: "Seasonal demand fluctuations and inventory management challenges affecting cash flow stability",
      after: "Optimized inventory turnover with predictable cash flow cycles ensuring year-round profitability",
      outcomes: {
        saved: "₹6 Lakhs",
        improved: "60% inventory turnover",
        achieved: "₹1.5 Crores annual revenue"
      },
      fullStory: "Suresh's electronics retail business was facing inventory management challenges and seasonal cash flow variations. Our comprehensive approach helped him optimize his inventory cycles and achieve consistent profitability across seasons."
    },
    {
      id: 6,
      name: "Vikram Singh",
      occupation: "Real Estate Investor",
      category: "HNI",
      image: "https://readdy.ai/api/search-image?query=Wealthy%20Indian%20real%20estate%20investor%20in%20premium%20business%20suit%20reviewing%20property%20documents%20and%20investment%20portfolio%2C%20luxury%20office%20environment%2C%20professional%20high-net-worth%20individual&width=300&height=300&seq=success6&orientation=squarish",
      before: "Fragmented portfolio management and suboptimal tax structures reducing overall investment returns",
      after: "Integrated portfolio strategy with advanced tax optimization maximizing wealth accumulation potential",
      outcomes: {
        saved: "₹25 Lakhs",
        improved: "45% portfolio returns",
        achieved: "₹10 Crores portfolio value"
      },
      fullStory: "Vikram's diverse real estate portfolio required sophisticated management and tax optimization strategies. Our premium wealth management approach helped him streamline his investments and achieve superior returns while maintaining tax efficiency."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [successStories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const openStoryPopup = (storyId: number) => {
    setSelectedStory(storyId);
  };

  const closeStoryPopup = () => {
    setSelectedStory(null);
  };

  const selectedStoryData = successStories.find(story => story.id === selectedStory);

  return (
    <section id="financity-standard" className="py-16 sm:py-20 bg-gradient-to-br from-[#0A1931] to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
            The FINANCITY Standard
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Real success stories from our diverse client community showcasing transformation through our proven methodologies
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Success Stories Slider */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 sm:p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="text-center">
                <img 
                  src={successStories[currentStory].image}
                  alt={successStories[currentStory].name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover border-4 border-[#FFD700]"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {successStories[currentStory].name}
                </h3>
                <p className="text-[#FFD700] font-semibold mb-1 text-sm sm:text-base">
                  {successStories[currentStory].occupation}
                </p>
                <p className="text-blue-200 text-xs sm:text-sm">
                  {successStories[currentStory].category}
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-close-circle-line text-red-400 text-lg mr-2"></i>
                    <span className="text-red-400 font-semibold text-sm sm:text-base">Before:</span>
                  </div>
                  <p className="text-red-300 ml-6 text-sm sm:text-base">
                    {successStories[currentStory].before}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-checkbox-circle-line text-green-400 text-lg mr-2"></i>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">After:</span>
                  </div>
                  <p className="text-green-300 ml-6 text-sm sm:text-base">
                    {successStories[currentStory].after}
                  </p>
                </div>
                
                <div className="bg-[#FFD700]/20 p-3 sm:p-4 rounded-lg border border-[#FFD700]/50">
                  <h4 className="text-[#FFD700] font-bold mb-3 text-sm sm:text-base">Tangible Outcomes:</h4>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Saved:</span>
                      <span className="text-[#FFD700] font-bold">{successStories[currentStory].outcomes.saved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Improved:</span>
                      <span className="text-[#FFD700] font-bold">{successStories[currentStory].outcomes.improved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Achieved:</span>
                      <span className="text-[#FFD700] font-bold">{successStories[currentStory].outcomes.achieved}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => openStoryPopup(successStories[currentStory].id)}
                  className="w-full bg-[#FFD700] text-[#0A1931] py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Show More
                </button>
              </div>
            </div>
            
            {/* Navigation */}
            <button
              onClick={prevStory}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-white text-sm sm:text-lg"></i>
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-white text-sm sm:text-lg"></i>
            </button>
            
            {/* Dot Navigation */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentStory ? 'bg-[#FFD700]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* FINANCITY Community */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-6 sm:mb-8">
                FINANCITY Community
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <img 
                    src="https://static.readdy.ai/image/a4bce69f5119c600272f7cca5447e2ab/3191eac450049a0f18c3cc7791f35c15.png"
                    alt="FINANCITY Community"
                    className="w-full rounded-lg object-cover"
                  />
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-2">500+</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Success Stories</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-2">₹100Cr+</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Client Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-2">₹200Cr+</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Funding Secured</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-2">98%</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 text-left">
                    <div className="flex items-center">
                      <i className="ri-check-double-line text-[#FFD700] mr-3 flex-shrink-0"></i>
                      <span className="text-blue-200 text-sm sm:text-base">Proven track record across 10+ industries</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-double-line text-[#FFD700] mr-3 flex-shrink-0"></i>
                      <span className="text-blue-200 text-sm sm:text-base">Comprehensive portfolio-based approach</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-double-line text-[#FFD700] mr-3 flex-shrink-0"></i>
                      <span className="text-blue-200 text-sm sm:text-base">Continuous support and partnership</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-double-line text-[#FFD700] mr-3 flex-shrink-0"></i>
                      <span className="text-blue-200 text-sm sm:text-base">AI-powered financial intelligence</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8">
                <a
                  href="https://wa.me/918657131823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFD700] text-[#0A1931] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#FFD700]/90 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Experience Our Standard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Popup Modal */}
      {selectedStory && selectedStoryData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img 
                    src={selectedStoryData.image}
                    alt={selectedStoryData.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1931]">
                      {selectedStoryData.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">{selectedStoryData.occupation}</p>
                  </div>
                </div>
                <button
                  onClick={closeStoryPopup}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer flex-shrink-0"
                >
                  <i className="ri-close-line text-gray-600"></i>
                </button>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#0A1931] mb-3">Complete Success Story</h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {selectedStoryData.fullStory}
                  </p>
                </div>
                
                <div className="bg-[#FFD700]/10 p-3 sm:p-4 rounded-lg border border-[#FFD700]/30">
                  <h4 className="text-[#0A1931] font-bold mb-3 text-sm sm:text-base">Key Outcomes Achieved:</h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm sm:text-base">Total Savings:</span>
                      <span className="text-[#0A1931] font-bold text-base sm:text-lg">{selectedStoryData.outcomes.saved}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm sm:text-base">Performance Improvement:</span>
                      <span className="text-[#0A1931] font-bold text-base sm:text-lg">{selectedStoryData.outcomes.improved}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm sm:text-base">Goals Achieved:</span>
                      <span className="text-[#0A1931] font-bold text-base sm:text-lg">{selectedStoryData.outcomes.achieved}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}