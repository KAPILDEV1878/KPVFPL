'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1931] mb-4 font-serif">About</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1931] mb-6 sm:mb-8 font-serif">
              FINANCITY Portfolio Landmark
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
                <p>
                  FINANCITY Portfolio Landmark, the flagship division of Kapildev Patel Ventures, designed to deliver cutting-edge financial solutions that scale startups, stabilize finances, and amplify growth for entrepreneurs, MSMEs, modern professionals and visionary individuals for their start-ups.
                </p>
                
                <p>
                  We specialize in portfolio-based consulting that integrates intelligent financial planning, smart accountancy, tax optimization, business compliance, and funding readiness — all under one powerful system to empower you with a strategic roadmap to prosperity, designed to fuel long-term success.
                </p>
                
                <p>
                  Our vision is to help you track, manage, and grow your finances — not just to survive, but to achieve prosperity milestones that fuel lasting success. Whether you're a new-age entrepreneur, MSME owner, or visionary leader, we partner with you to build, fund, scale, and sustain your financial journey at every step — turning ambition into achievement.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=FINANCITY%20professional%20team%20working%20on%20financial%20planning%20and%20business%20growth%20strategies%20in%20modern%20office%20environment%20with%20charts%20and%20documents%2C%20corporate%20navy%20blue%20and%20gold%20themed%20workspace%2C%20professional%20financial%20consultants%20collaborating&width=500&height=400&seq=about-team&orientation=landscape"
                alt="FINANCITY Team"
                className="w-full rounded-lg shadow-lg object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0A1931] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-[#FFD700] text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A1931] mb-2 text-center">Scale Startups</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">Strategic guidance to accelerate your startup's growth trajectory</p>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0A1931] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-[#FFD700] text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A1931] mb-2 text-center">Stabilize Finances</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">Robust financial management to ensure stability and growth</p>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0A1931] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-[#FFD700] text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A1931] mb-2 text-center">Amplify Growth</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">Maximize your potential with data-driven growth strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}