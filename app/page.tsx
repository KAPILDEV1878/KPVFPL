
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicePopup, setShowServicePopup] = useState(null);
  const [showClientPopup, setShowClientPopup] = useState(null);
  const [showStandardPopup, setShowStandardPopup] = useState(null);
  const [showFAQ, setShowFAQ] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStandardSlide, setCurrentStandardSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Tax Planning & Filing",
      icon: "ri-calculator-line",
      intro: "Complete tax optimization and compliance solutions for individuals and businesses.",
      description: "Strategic tax planning to maximize savings while ensuring full compliance with all regulatory requirements.",
      services: ["ITR Filing (All Forms)", "80C Optimization", "Form 26AS Reconciliation", "TDS Management", "Advance Tax Planning", "GST Compliance"],
      basic: "₹2,999/year - Basic ITR filing with standard deductions",
      standard: "₹5,999/year - Tax planning + filing with optimization strategies",
      premium: "₹9,999/year - Complete tax advisory with year-round support",
      enterprise: "₹15,999/year - Enterprise solution with dedicated CA support"
    },
    {
      title: "Bookkeeping & Compliance",
      icon: "ri-book-line",
      intro: "Accurate financial records and regulatory compliance for seamless business operations.",
      description: "Professional bookkeeping services with real-time compliance monitoring and automated reporting systems.",
      services: ["GST Returns", "UPI Transaction Logs", "General Ledger Management", "Bank Reconciliation", "Expense Tracking", "Compliance Calendar"],
      basic: "₹4,999/month - Basic bookkeeping with monthly reports",
      standard: "₹7,999/month - Full compliance with automated alerts",
      premium: "₹12,999/month - Premium advisory with strategic insights",
      enterprise: "₹19,999/month - Enterprise solution with dedicated team"
    },
    {
      title: "Investment Advisory",
      icon: "ri-line-chart-line",
      intro: "Strategic portfolio management and wealth creation through data-driven investment decisions.",
      description: "Personalized investment strategies aligned with your financial goals and risk tolerance for optimal returns.",
      services: ["SIP Planning", "ELSS Investments", "NPS Advisory", "Portfolio Review", "Risk Assessment", "Goal-Based Planning"],
      basic: "₹1,999/month - Basic SIP advice with quarterly reviews",
      standard: "₹3,999/month - Portfolio management with monthly tracking",
      premium: "₹6,999/month - Wealth advisory with personalized strategies",
      enterprise: "₹12,999/month - HNI wealth management with dedicated advisor"
    },
    {
      title: "Business Dashboard Setup",
      icon: "ri-dashboard-line",
      intro: "Real-time business intelligence and automated reporting systems for informed decision-making.",
      description: "Custom dashboards with automated alerts and comprehensive analytics to monitor your business performance.",
      services: ["Custom Alerts", "P&L Dashboards", "Inventory Tracking", "Cash Flow Monitor", "KPI Tracking", "Automated Reports"],
      basic: "₹9,999 setup - Basic dashboard with essential metrics",
      standard: "₹19,999 setup - Advanced analytics with custom reports",
      premium: "₹29,999 setup - Enterprise solution with AI insights",
      enterprise: "₹49,999 setup - Complete business intelligence suite"
    },
    {
      title: "Funding Readiness",
      icon: "ri-funds-line",
      intro: "Complete preparation for investment opportunities and business funding requirements.",
      description: "End-to-end support for funding applications and investor presentations with professional documentation.",
      services: ["KYC Documentation", "CIBIL Optimization", "Financial Projections", "Pitch Deck Creation", "Due Diligence Prep", "Investor Connect"],
      basic: "₹14,999 - Documentation prep with basic projections",
      standard: "₹24,999 - Complete readiness with pitch deck",
      premium: "₹39,999 - Investor connect with presentation coaching",
      enterprise: "₹59,999 - Series A/B readiness with VC introductions"
    },
    {
      title: "Audit & MIS Services",
      icon: "ri-file-chart-line",
      intro: "Comprehensive audit services and management information systems for business excellence.",
      description: "Professional auditing with detailed MIS reports and variance analysis for strategic decision-making.",
      services: ["Internal Audit", "KPI Analysis", "Variance Reports", "Compliance Audit", "Risk Assessment", "Process Optimization"],
      basic: "₹19,999 - Basic audit with compliance check",
      standard: "₹34,999 - Comprehensive audit with MIS reports",
      premium: "₹49,999 - Strategic advisory with optimization recommendations",
      enterprise: "₹79,999 - Complete governance framework with board reporting"
    }
  ];

  const whoWeServe = [
    { 
      title: "Salaried Individuals", 
      icon: "ri-briefcase-line", 
      color: "bg-blue-100",
      query: "I'm a salaried professional looking for tax optimization and investment planning. Can you help me maximize my savings and plan for my financial goals?"
    },
    { 
      title: "Business Owners", 
      icon: "ri-building-line", 
      color: "bg-green-100",
      query: "I own a business and need help with bookkeeping, compliance, and financial planning. Can you provide comprehensive business financial services?"
    },
    { 
      title: "Freelancers", 
      icon: "ri-user-line", 
      color: "bg-purple-100",
      query: "As a freelancer, I need help with tax filing, expense tracking, and financial planning. Can you assist with my unique financial needs?"
    },
    { 
      title: "Startups", 
      icon: "ri-rocket-line", 
      color: "bg-orange-100",
      query: "We're a startup looking for funding readiness, compliance setup, and financial advisory services. Can you help us get investment-ready?"
    },
    { 
      title: "NRIs", 
      icon: "ri-global-line", 
      color: "bg-teal-100",
      query: "I'm an NRI with investments in India and need help with tax compliance and portfolio management. Can you handle NRI-specific requirements?"
    },
    { 
      title: "Senior Citizens", 
      icon: "ri-parent-line", 
      color: "bg-pink-100",
      query: "As a senior citizen, I need help with retirement planning, tax-efficient investments, and wealth preservation. Can you provide specialized senior advisory?"
    }
  ];

  const standardSlides = [
    {
      service: "Tax Planning Turnaround",
      profile: "Rahul Sharma",
      designation: "IT Professional",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20IT%20executive%20in%20formal%20business%20attire%2C%20confident%20male%20software%20engineer%20in%20corporate%20office%20setting%2C%20authentic%20headshot%20of%20technology%20professional%20with%20modern%20office%20background%2C%20realistic%20business%20portrait&width=150&height=150&seq=rahul-it-professional&orientation=squarish",
      before: "₹45,000 annual tax burden with basic filing",
      after: "₹18,000 annual tax burden with strategic planning",
      outcome: "₹27,000 Saved (60%)",
      caseStudy: "Rahul was paying excessive taxes due to poor planning. We restructured his investments under Section 80C, optimized his HRA claims, and implemented tax-saving strategies. Result: 60% tax reduction with better investment portfolio."
    },
    {
      service: "Bookkeeping Transformation",
      profile: "Meera Patel",
      designation: "Restaurant Owner",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20restaurant%20owner%20in%20business%20attire%2C%20confident%20woman%20entrepreneur%20in%20restaurant%20setting%2C%20authentic%20business%20portrait%20of%20food%20industry%20professional%2C%20realistic%20headshot%20with%20restaurant%20background&width=150&height=150&seq=meera-restaurant-owner&orientation=squarish",
      before: "3 days monthly reconciliation with manual processes",
      after: "2 hours automated process with real-time tracking",
      outcome: "92% Time Reduction",
      caseStudy: "Meera's restaurant bookkeeping was chaotic with manual entries taking days. We implemented automated systems, integrated POS with accounting, and created real-time dashboards. Now she tracks everything in hours, not days."
    },
    {
      service: "Investment Growth",
      profile: "Arjun Kumar",
      designation: "Freelancer",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20freelancer%20working%20on%20laptop%2C%20confident%20young%20professional%20in%20modern%20workspace%2C%20authentic%20portrait%20of%20digital%20nomad%20in%20casual%20business%20attire%2C%20realistic%20headshot%20with%20home%20office%20background&width=150&height=150&seq=arjun-freelancer&orientation=squarish",
      before: "₹50,000 scattered investments with poor returns",
      after: "₹2.8L diversified portfolio with systematic growth",
      outcome: "₹2.3L Growth (460%)",
      caseStudy: "Arjun had random investments without strategy. We created a goal-based portfolio with SIPs, ELSS, and balanced funds. Over 3 years, his disciplined approach yielded exceptional returns with proper diversification."
    },
    {
      service: "Dashboard Implementation",
      profile: "Priya Singh",
      designation: "Startup Founder",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20startup%20founder%20in%20modern%20office%2C%20confident%20woman%20entrepreneur%20with%20laptop%20and%20business%20charts%2C%20authentic%20portrait%20of%20tech%20startup%20CEO%2C%20realistic%20headshot%20with%20startup%20office%20background&width=150&height=150&seq=priya-startup-founder&orientation=squarish",
      before: "Weekly manual reports with delayed insights",
      after: "Real-time automated insights with instant alerts",
      outcome: "85% Faster Decisions",
      caseStudy: "Priya's startup was making decisions based on week-old data. We built custom dashboards with real-time KPIs, automated alerts, and predictive analytics. Now she makes data-driven decisions instantly."
    },
    {
      service: "Funding Success",
      profile: "Vikash Gupta",
      designation: "Tech Entrepreneur",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20tech%20entrepreneur%20in%20business%20suit%2C%20confident%20startup%20founder%20in%20modern%20corporate%20setting%2C%20authentic%20portrait%20of%20technology%20business%20leader%2C%20realistic%20headshot%20with%20office%20background&width=150&height=150&seq=vikash-tech-entrepreneur&orientation=squarish",
      before: "₹0 external funding with incomplete documentation",
      after: "₹75L Series A raised with professional presentation",
      outcome: "₹75L Funding Secured",
      caseStudy: "Vikash had a great product but poor funding documentation. We prepared comprehensive financial projections, created investor-ready pitch decks, and connected him with VCs. Result: Successful Series A funding."
    },
    {
      service: "Audit Excellence",
      profile: "Sunita Agarwal",
      designation: "MSME Owner",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20MSME%20business%20owner%20in%20traditional%20business%20attire%2C%20confident%20woman%20entrepreneur%20in%20manufacturing%20setting%2C%20authentic%20portrait%20of%20small%20business%20owner%2C%20realistic%20headshot%20with%20industrial%20background&width=150&height=150&seq=sunita-msme-owner&orientation=squarish",
      before: "Multiple compliance gaps with penalty risks",
      after: "100% audit compliance with zero penalties",
      outcome: "Zero Penalties",
      caseStudy: "Sunita's MSME faced multiple compliance issues and penalty threats. We conducted comprehensive audits, fixed all gaps, implemented compliance calendars, and created audit-ready documentation systems."
    }
  ];

  const faqData = [
    {
      category: "Tax Planning",
      questions: [
        { q: "What tax documents do I need to provide?", a: "PAN card, Form 16, bank statements, investment proofs, and previous ITR acknowledgments." },
        { q: "How much can I save on taxes?", a: "Typically 20-60% tax savings through strategic planning and Section 80C optimization." },
        { q: "Do you handle GST compliance?", a: "Yes, we manage complete GST filing, reconciliation, and compliance for businesses." },
        { q: "What's included in tax planning service?", a: "ITR filing, tax optimization strategies, advance tax planning, and year-round support." },
        { q: "How do you ensure accurate filing?", a: "We follow a 3-tier review process and maintain detailed documentation for all filings." }
      ]
    },
    {
      category: "Investment Advisory",
      questions: [
        { q: "What's your minimum investment amount?", a: "We work with investments as low as ₹1,000 per month through SIP planning." },
        { q: "How do you select investment options?", a: "Based on risk assessment, financial goals, time horizon, and market analysis." },
        { q: "Do you provide ELSS recommendations?", a: "Yes, we recommend tax-saving ELSS funds aligned with your risk profile and goals." },
        { q: "How often do you review portfolios?", a: "Monthly performance reviews with quarterly strategy adjustments and annual rebalancing." },
        { q: "What returns can I expect?", a: "Historical returns vary, but we target 10-15% annual returns through diversified planning." }
      ]
    },
    {
      category: "Business Services",
      questions: [
        { q: "What bookkeeping software do you use?", a: "We integrate with Tally, QuickBooks, Zoho Books, and custom dashboard solutions." },
        { q: "How quickly can you set up dashboards?", a: "Basic dashboards in 7 days, advanced analytics in 14-21 days depending on complexity." },
        { q: "Do you provide monthly financial reports?", a: "Yes, automated monthly P&L, cash flow, and KPI reports with variance analysis." },
        { q: "What compliance services are included?", a: "GST filing, TDS returns, statutory audits, and regulatory compliance calendar management." },
        { q: "Can you help with funding applications?", a: "Complete funding support including documentation, projections, pitch decks, and investor connect." }
      ]
    },
    {
      category: "Compliance & Security",
      questions: [
        { q: "How secure is my financial data?", a: "Bank-grade encryption, secure cloud storage, and strict confidentiality protocols." },
        { q: "Do you have certified advisors?", a: "Yes, all advisors are CA/CS qualified with 5+ years of experience." },
        { q: "What audit standards do you follow?", a: "We follow Indian Accounting Standards and maintain SOX compliance for processes." },
        { q: "How do you ensure data privacy?", a: "GDPR-compliant processes, limited access controls, and regular security audits." },
        { q: "What happens to my data if I discontinue?", a: "Complete data export provided within 30 days, followed by secure deletion from our systems." }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        { q: "Are there any hidden charges?", a: "No hidden fees. All costs are transparent and communicated upfront before engagement." },
        { q: "Do you offer refunds?", a: "30-day money-back guarantee if you're not satisfied with our service quality." },
        { q: "What support channels are available?", a: "WhatsApp, email, phone support, and dedicated client portal for 24/7 access." },
        { q: "Can I upgrade or downgrade plans?", a: "Yes, flexible plan changes with pro-rated billing adjustments." },
        { q: "Do you provide training on tools?", a: "Complete onboarding and training sessions for all dashboards and tools we implement." }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        { q: "How do I get started?", a: "Fill our assessment form, book a consultation, and we'll create a customized roadmap." },
        { q: "What's the typical onboarding time?", a: "2-7 days for individual services, 14-21 days for comprehensive business setups." },
        { q: "Do you work with clients outside India?", a: "Yes, we serve NRIs and global businesses with Indian operations." },
        { q: "What documents are needed initially?", a: "PAN, Aadhaar, bank statements, and relevant business registration documents." },
        { q: "Can I try your services before committing?", a: "Yes, we offer a 7-day trial period for most services to ensure satisfaction." }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentStandardSlide((prev) => (prev + 1) % standardSlides.length);
  };

  const prevSlide = () => {
    setCurrentStandardSlide((prev) => (prev - 1 + standardSlides.length) % standardSlides.length);
  };

  const handleWhatsAppRedirect = (query) => {
    const message = `FINANCITYPL - ${query}`;
    const whatsappUrl = `https://wa.me/919136637789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickMessageSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const whatsappMessage = `FINANCITYPL - Name: ${name}, Email: ${email}, Message: ${message}`;
    const whatsappUrl = `https://wa.me/919136637789?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation with Scroll Indicator */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="w-full">
          <div 
            className="h-1 bg-[#FFD700] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/dbcf23126d6fc409f93cebe2691958b8/ce41f9e817ce621b5370451f15824822.png"
                alt="FINANCITY Logo"
                className="h-10 w-auto mr-3"
              />
              <h1 className="text-2xl font-bold text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                FINANCITY
              </h1>
            </div>
            <div className="hidden lg:flex space-x-8 text-sm font-medium">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#FFD700] transition-colors whitespace-nowrap cursor-pointer">About</button>
              <button onClick={() => scrollToSection('prosperity-roadmap')} className="text-gray-700 hover:text-[#FFD700] transition-colors whitespace-nowrap cursor-pointer">Prosperity Roadmap</button>
              <button onClick={() => scrollToSection('who-we-serve')} className="text-gray-700 hover:text-[#FFD700] transition-colors whitespace-nowrap cursor-pointer">Who We Serve</button>
              <button onClick={() => scrollToSection('compliance')} className="text-gray-700 hover:text-[#FFD700] transition-colors whitespace-nowrap cursor-pointer">Compliance & Security</button>
              <button onClick={() => setShowFAQ(true)} className="text-gray-700 hover:text-[#FFD700] transition-colors whitespace-nowrap cursor-pointer">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#FFD700] transition-colors whitespace-nowrap cursor-pointer">Contact</button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-[#FFD700] cursor-pointer">About</button>
              <button onClick={() => { scrollToSection('prosperity-roadmap'); setIsMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-[#FFD700] cursor-pointer">Prosperity Roadmap</button>
              <button onClick={() => { scrollToSection('who-we-serve'); setIsMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-[#FFD700] cursor-pointer">Who We Serve</button>
              <button onClick={() => { scrollToSection('compliance'); setIsMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-[#FFD700] cursor-pointer">Compliance & Security</button>
              <button onClick={() => { setShowFAQ(true); setIsMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-[#FFD700] cursor-pointer">FAQ</button>
              <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-[#FFD700] cursor-pointer">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('https://readdy.ai/api/search-image?query=High%20resolution%20white-based%20professional%20Indian%20corporate%20meeting%20scene%20with%20diverse%20business%20professionals%20in%20modern%20boardroom%20looking%20at%20growth%20charts%20and%20financial%20graphs%20displayed%20on%20large%20screen%2C%20clean%20bright%20corporate%20environment%20with%20natural%20lighting%2C%20authentic%20business%20meeting%20with%20upward%20trending%20data%20visualization%20on%20monitor%2C%20professional%20atmosphere%20with%20white%20and%20light%20tones&width=1920&height=1080&seq=hero-white-corporate-growth&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
            FINANCITY Portfolio Landmark
          </h1>
          <p className="text-2xl lg:text-3xl mb-12 text-[#FFD700] font-light" style={{ fontFamily: 'serif' }}>
            Your Roadmap to Financial Prosperity.
          </p>
          <button 
            onClick={() => window.open('https://forms.gle/8ZWCFaLaMRDC3T9LA', '_blank')}
            className="px-12 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer bg-[#0A1931] text-white shadow-lg"
            style={{ fontFamily: 'sans-serif' }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                About FINANCITY
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                FINANCITY is a portfolio-based financial advisory and compliance division of Kapildev Patel Ventures. We specialize in bringing clarity, compliance, and growth to individuals and MSMEs through structured portfolio strategies.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Our Mission</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  To bring clarity, compliance, and growth to individuals and MSMEs through structured portfolio strategies that align with your financial goals and regulatory requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Our Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-line text-[#FFD700] w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-gray-700" style={{ fontFamily: 'sans-serif' }}>Ethics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-line text-[#FFD700] w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-gray-700" style={{ fontFamily: 'sans-serif' }}>Transparency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-line text-[#FFD700] w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-gray-700" style={{ fontFamily: 'sans-serif' }}>Goal-Based Planning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-line text-[#FFD700] w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-gray-700" style={{ fontFamily: 'sans-serif' }}>Digital Simplicity</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <img 
                src="https://readdy.ai/api/search-image?query=Real%20professional%20Indian%20financial%20advisory%20team%20of%20diverse%20business%20people%20working%20together%20in%20modern%20office%2C%20experienced%20financial%20consultants%20and%20chartered%20accountants%20collaborating%20around%20desk%20with%20laptops%20and%20financial%20documents%2C%20genuine%20business%20professionals%20in%20corporate%20attire%2C%20authentic%20workplace%20photography%20with%20natural%20lighting%2C%20modern%20corporate%20office%20environment&width=600&height=400&seq=about-real-team&orientation=landscape"
                alt="Financial Advisory Team"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prosperity Roadmap (Services) */}
      <section id="prosperity-roadmap" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
              Prosperity Roadmap
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'sans-serif' }}>
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-[#FFD700]">
                  <i className={`${service.icon} text-2xl text-[#0A1931]`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'sans-serif' }}>
                  {service.intro}
                </p>
                <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'sans-serif' }}>
                  {service.description}
                </p>
                <button 
                  onClick={() => setShowServicePopup(index)}
                  className="w-full py-2 px-4 bg-[#0A1931] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors whitespace-nowrap cursor-pointer font-medium"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  Know More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Popup */}
      {showServicePopup !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                  {services[showServicePopup].title}
                </h3>
                <button 
                  onClick={() => setShowServicePopup(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                {services[showServicePopup].intro}
              </p>
              <h4 className="text-lg font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Services Included:</h4>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {services[showServicePopup].services.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <i className="ri-check-line text-[#FFD700] w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Package Tiers:</h4>
              <div className="space-y-3 mb-8">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm" style={{ fontFamily: 'sans-serif' }}><strong>Basic:</strong> {services[showServicePopup].basic}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm" style={{ fontFamily: 'sans-serif' }}><strong>Standard:</strong> {services[showServicePopup].standard}</p>
                </div>
                <div className="p-3 bg-[#FFD700]/10 rounded-lg">
                  <p className="text-sm" style={{ fontFamily: 'sans-serif' }}><strong>Premium:</strong> {services[showServicePopup].premium}</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm" style={{ fontFamily: 'sans-serif' }}><strong>Enterprise:</strong> {services[showServicePopup].enterprise}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://forms.gle/8ZWCFaLaMRDC3T9LA', '_blank')}
                  className="flex-1 py-3 px-6 bg-[#FFD700] text-[#0A1931] rounded-lg hover:bg-[#e6c200] transition-colors whitespace-nowrap cursor-pointer font-bold"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  Book My Plan
                </button>
                <button 
                  onClick={() => setShowServicePopup(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
              We partner with diverse clients who value structured growth, legal alignment, and data-backed decision-making.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoWeServe.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setShowClientPopup(index)}
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 ${client.color}`}>
                  <i className={`${client.icon} text-2xl text-[#0A1931]`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700]" style={{ fontFamily: 'serif' }}>{client.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Popup */}
      {showClientPopup !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-8 text-center">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                  {whoWeServe[showClientPopup].title}
                </h3>
                <button 
                  onClick={() => setShowClientPopup(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className={`w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 ${whoWeServe[showClientPopup].color}`}>
                <i className={`${whoWeServe[showClientPopup].icon} text-3xl text-[#0A1931]`}></i>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                {whoWeServe[showClientPopup].query}
              </p>
              <button 
                onClick={() => {
                  handleWhatsAppRedirect(whoWeServe[showClientPopup].query);
                  setShowClientPopup(null);
                }}
                className="w-full py-3 px-6 bg-[#25D366] text-white rounded-lg hover:bg-[#20b858] transition-colors whitespace-nowrap cursor-pointer font-bold flex items-center justify-center space-x-2"
                style={{ fontFamily: 'sans-serif' }}
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>Let's Begin</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Financity Standard */}
      <section id="financity-standard" className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
              The Financity Standard
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'sans-serif' }}>
              Real transformations, measurable results
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <img 
                  src={standardSlides[currentStandardSlide].image}
                  alt={standardSlides[currentStandardSlide].profile}
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#0A1931] mb-2" style={{ fontFamily: 'serif' }}>
                    {standardSlides[currentStandardSlide].service}
                  </h3>
                  <p className="text-[#FFD700] font-semibold" style={{ fontFamily: 'sans-serif' }}>
                    {standardSlides[currentStandardSlide].profile}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'sans-serif' }}>
                    {standardSlides[currentStandardSlide].designation}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-3" style={{ fontFamily: 'serif' }}>Before FINANCITY</h4>
                  <p className="text-gray-700" style={{ fontFamily: 'sans-serif' }}>{standardSlides[currentStandardSlide].before}</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-3" style={{ fontFamily: 'serif' }}>After FINANCITY</h4>
                  <p className="text-gray-700" style={{ fontFamily: 'sans-serif' }}>{standardSlides[currentStandardSlide].after}</p>
                </div>
              </div>
              <div className="text-center p-6 bg-[#FFD700]/10 rounded-lg mb-6">
                <h4 className="text-2xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: 'serif' }}>
                  {standardSlides[currentStandardSlide].outcome}
                </h4>
                <button 
                  onClick={() => setShowStandardPopup(currentStandardSlide)}
                  className="mt-4 px-6 py-2 bg-[#0A1931] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors whitespace-nowrap cursor-pointer"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  Show More
                </button>
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
            <div className="flex justify-center mt-6 space-x-2">
              {standardSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStandardSlide(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${index === currentStandardSlide ? 'bg-[#FFD700]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Case Study Popup */}
      {showStandardPopup !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                  Full Case Study
                </h3>
                <button 
                  onClick={() => setShowStandardPopup(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="flex items-center mb-6">
                <img 
                  src={standardSlides[showStandardPopup].image}
                  alt={standardSlides[showStandardPopup].profile}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                    {standardSlides[showStandardPopup].profile}
                  </h4>
                  <p className="text-[#FFD700] font-medium" style={{ fontFamily: 'sans-serif' }}>
                    {standardSlides[showStandardPopup].designation}
                  </p>
                </div>
              </div>
              <div className="bg-[#FFD700]/10 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-[#0A1931] mb-2" style={{ fontFamily: 'serif' }}>
                  {standardSlides[showStandardPopup].service}
                </h4>
                <p className="text-2xl font-bold text-[#FFD700]" style={{ fontFamily: 'serif' }}>
                  {standardSlides[showStandardPopup].outcome}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'sans-serif' }}>
                {standardSlides[showStandardPopup].caseStudy}
              </p>
              <button 
                onClick={() => setShowStandardPopup(null)}
                className="w-full py-3 px-6 bg-[#0A1931] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors whitespace-nowrap cursor-pointer"
                style={{ fontFamily: 'sans-serif' }}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Compliance & Security */}
      <section id="compliance" className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
              Compliance & Security
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'sans-serif' }}>
              Your data security and regulatory compliance are our top priorities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 bg-[#FFD700]/10">
                <i className="ri-shield-check-line text-3xl text-[#FFD700]"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Ethics</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Complete transparency in all our recommendations and methodologies with ethical practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 bg-[#FFD700]/10">
                <i className="ri-lock-line text-3xl text-[#FFD700]"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Data Privacy</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Bank-grade encryption for all data storage and transmission with strict privacy protocols
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 bg-[#FFD700]/10">
                <i className="ri-file-check-line text-3xl text-[#FFD700]"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Audit Trail</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Complete audit trails and documentation for regulatory compliance and transparency
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 bg-[#FFD700]/10">
                <i className="ri-user-star-line text-3xl text-[#FFD700]"></i>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Regulatory</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                All advisors are CA/CS qualified with extensive experience in regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://readdy.ai/api/search-image?query=High%20resolution%20clean%20white-based%20image%20of%20smiling%20Indian%20youth%20and%20young%20professionals%20ready%20to%20begin%20their%20journey%2C%20diverse%20group%20of%20confident%20young%20adults%20in%20modern%20office%20or%20casual%20business%20environment%2C%20bright%20optimistic%20atmosphere%20with%20natural%20lighting%2C%20authentic%20happy%20expressions%20showing%20readiness%20and%20excitement%20to%20start%2C%20professional%20yet%20approachable%20setting%20with%20white%20and%20light%20tones&width=1920&height=600&seq=cta-white-youth-ready&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
            Clarity. Compliance. Confidence. Start Today.
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-700" style={{ fontFamily: 'sans-serif' }}>
            Join hundreds of successful businesses who trust FINANCITY for their financial growth and compliance needs.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => window.open('https://forms.gle/8ZWCFaLaMRDC3T9LA', '_blank')}
              className="px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer bg-[#0A1931] text-[#FFD700]"
              style={{ fontFamily: 'sans-serif' }}
            >
              Start Now
            </button>
            <button 
              onClick={() => window.open('https://calendar.app.google/LUgNXRiTrrMugxNn7', '_blank')}
              className="px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer bg-[#0A1931] text-[#FFD700]"
              style={{ fontFamily: 'sans-serif' }}
            >
              Book Consultation
            </button>
            <button 
              onClick={() => setShowFAQ(true)}
              className="px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer bg-[#0A1931] text-[#FFD700]"
              style={{ fontFamily: 'sans-serif' }}
            >
              FAQ
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Popup */}
      {showFAQ && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                  Frequently Asked Questions
                </h3>
                <button 
                  onClick={() => setShowFAQ(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="space-y-8">
                {faqData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-xl font-semibold mb-4 text-[#FFD700]" style={{ fontFamily: 'serif' }}>
                      {category.category}
                    </h4>
                    <div className="space-y-4">
                      {category.questions.map((item, qIndex) => (
                        <div key={qIndex} className="border border-gray-200 rounded-lg p-4">
                          <h5 className="font-semibold text-[#0A1931] mb-2" style={{ fontFamily: 'serif' }}>
                            {item.q}
                          </h5>
                          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowFAQ(false)}
                  className="px-8 py-3 bg-[#0A1931] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors whitespace-nowrap cursor-pointer"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  Close FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                Get In Touch
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFD700]">
                    <i className="ri-mail-line text-xl text-[#0A1931]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[#0A1931]" style={{ fontFamily: 'serif' }}>Email</h3>
                    <a href="mailto:connect@financitypl.com" className="text-gray-600 hover:text-[#FFD700]" style={{ fontFamily: 'sans-serif' }}>
                      connect@financitypl.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://wa.me/919136637789" className="w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer bg-[#0A1931]">
                  <i className="ri-whatsapp-line text-xl text-white"></i>
                </a>
                <a href="https://facebook.com" className="w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer bg-[#0A1931]">
                  <i className="ri-facebook-fill text-xl text-white"></i>
                </a>
                <a href="https://linkedin.com" className="w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer bg-[#0A1931]">
                  <i className="ri-linkedin-fill text-xl text-white"></i>
                </a>
                <a href="https://twitter.com" className="w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer bg-[#0A1931]">
                  <i className="ri-twitter-x-line text-xl text-white"></i>
                </a>
                <a href="https://instagram.com" className="w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer bg-[#0A1931]">
                  <i className="ri-instagram-line text-xl text-white"></i>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#0A1931]" style={{ fontFamily: 'serif' }}>
                Quick Message
              </h3>
              <form className="space-y-4" onSubmit={handleQuickMessageSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm"
                    style={{ fontFamily: 'sans-serif' }}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm"
                    style={{ fontFamily: 'sans-serif' }}
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm resize-none"
                    style={{ fontFamily: 'sans-serif' }}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer bg-[#0A1931] text-white"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-[#0A1931]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://static.readdy.ai/image/dbcf23126d6fc409f93cebe2691958b8/ce41f9e817ce621b5370451f15824822.png"
                  alt="FINANCITY Logo"
                  className="h-8 w-auto mr-3"
                />
                <h3 className="text-2xl font-bold text-[#FFD700]" style={{ fontFamily: 'serif' }}>
                  FINANCITY
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                Your trusted partner for financial growth, compliance, and strategic business planning.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#FFD700]" style={{ fontFamily: 'serif' }}>Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer" style={{ fontFamily: 'sans-serif' }}>About</button>
                <button onClick={() => scrollToSection('prosperity-roadmap')} className="block text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer" style={{ fontFamily: 'sans-serif' }}>Prosperity Roadmap</button>
                <button onClick={() => scrollToSection('who-we-serve')} className="block text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer" style={{ fontFamily: 'sans-serif' }}>Who We Serve</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer" style={{ fontFamily: 'sans-serif' }}>Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#FFD700]" style={{ fontFamily: 'serif' }}>Services</h4>
              <div className="space-y-2">
                <p className="text-gray-300" style={{ fontFamily: 'sans-serif' }}>Tax Planning & Filing</p>
                <p className="text-gray-300" style={{ fontFamily: 'sans-serif' }}>Investment Advisory</p>
                <p className="text-gray-300" style={{ fontFamily: 'sans-serif' }}>Business Compliance</p>
                <p className="text-gray-300" style={{ fontFamily: 'sans-serif' }}>Audit Services</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://wa.me/919136637789" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#e6c200] transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-[#0A1931]"></i>
              </a>
              <a href="https://facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#e6c200] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-[#0A1931]"></i>
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#e6c200] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-[#0A1931]"></i>
              </a>
              <a href="https://twitter.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#e6c200] transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-[#0A1931]"></i>
              </a>
              <a href="https://instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD700] hover:bg-[#e6c200] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-[#0A1931]"></i>
              </a>
            </div>
            <p className="text-gray-300" style={{ fontFamily: 'sans-serif' }}>
              2017 FINANCITY | A Brand of Kapildev Patel Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
