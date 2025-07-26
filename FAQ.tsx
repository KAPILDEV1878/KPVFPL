'use client';

import { useState } from 'react';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      title: "Salaried Professionals",
      image: "https://readdy.ai/api/search-image?query=Professional%20salaried%20employee%20working%20at%20desk%20with%20laptop%20and%20financial%20documents%2C%20modern%20office%20environment%20with%20charts%20and%20calculator%2C%20navy%20blue%20and%20gold%20corporate%20theme&width=400&height=300&seq=faq-salaried&orientation=landscape",
      faqs: [
        {
          question: "What specific services do you offer for salaried professionals?",
          answer: "We provide comprehensive financial planning including tax optimization, investment advisory, loan assistance, insurance planning, and retirement planning tailored specifically for salaried individuals."
        },
        {
          question: "When is the best time to start financial planning as a salaried professional?",
          answer: "The best time is immediately after you receive your first salary. Early planning helps in building wealth through compound interest and ensures you're prepared for life's financial milestones."
        },
        {
          question: "How do you help optimize taxes for salaried employees?",
          answer: "We analyze your salary structure, recommend tax-saving investments under 80C, 80D, and other sections, help with HRA optimization, and ensure proper documentation for maximum tax benefits."
        },
        {
          question: "What technical tools do you use for portfolio management?",
          answer: "We use advanced financial planning software, portfolio tracking tools, and AI-powered analytics to monitor your investments and provide real-time insights into your financial health."
        },
        {
          question: "How do you create awareness about financial planning importance?",
          answer: "We conduct regular workshops, provide educational content, and offer personalized consultations to help salaried professionals understand the long-term benefits of systematic financial planning."
        }
      ]
    },
    {
      id: 2,
      title: "Modern Professionals",
      image: "https://readdy.ai/api/search-image?query=Modern%20professional%20working%20on%20laptop%20in%20co-working%20space%20with%20multiple%20income%20streams%20documentation%2C%20digital%20nomad%20lifestyle%20with%20financial%20planning%20materials%2C%20contemporary%20workspace&width=400&height=300&seq=faq-modern&orientation=landscape",
      faqs: [
        {
          question: "What services do you offer for modern professionals with multiple income streams?",
          answer: "We provide comprehensive income management, tax planning for multiple sources, investment coordination, freelance income optimization, and digital financial tracking solutions."
        },
        {
          question: "When should modern professionals seek financial advisory services?",
          answer: "When you have multiple income sources, irregular cash flows, or need to optimize tax implications of freelance/consulting work alongside regular employment."
        },
        {
          question: "How do you manage complex tax scenarios for modern professionals?",
          answer: "We handle multiple income sources, presumptive taxation schemes, advance tax planning, and ensure compliance across all revenue streams while maximizing deductions."
        },
        {
          question: "What technical platforms do you use for modern professional needs?",
          answer: "We utilize cloud-based financial management systems, automated expense tracking, digital invoicing solutions, and integrated tax planning tools designed for modern work patterns."
        },
        {
          question: "How do you create awareness about financial planning for gig economy workers?",
          answer: "We provide specialized education about irregular income management, emergency fund planning, and retirement savings strategies specifically designed for the gig economy."
        }
      ]
    },
    {
      id: 3,
      title: "New-Age Entrepreneurs",
      image: "https://readdy.ai/api/search-image?query=Young%20entrepreneur%20presenting%20business%20idea%20with%20startup%20pitch%20deck%2C%20modern%20office%20environment%20with%20growth%20charts%20and%20funding%20documents%2C%20innovative%20business%20planning%20setup&width=400&height=300&seq=faq-entrepreneur&orientation=landscape",
      faqs: [
        {
          question: "What comprehensive services do you offer for new-age entrepreneurs?",
          answer: "We provide business setup assistance, compliance management, funding preparation, financial planning, tax optimization, and growth strategy development for startups and innovative businesses."
        },
        {
          question: "When should entrepreneurs engage with financial consultants?",
          answer: "Ideally during the business planning phase, before incorporation, to ensure proper structure, compliance framework, and financial foundation from the beginning."
        },
        {
          question: "How do you help entrepreneurs with funding preparation?",
          answer: "We prepare comprehensive financial projections, due diligence documentation, pitch deck support, valuation analysis, and investor presentation materials to maximize funding success."
        },
        {
          question: "What technical tools do you use for startup financial management?",
          answer: "We employ advanced business planning software, financial modeling tools, pitch deck platforms, and integrated accounting systems designed specifically for startup environments."
        },
        {
          question: "How do you create awareness about financial planning importance for startups?",
          answer: "We conduct startup-focused workshops, provide educational content about business finance, and offer mentorship programs to help entrepreneurs understand critical financial fundamentals."
        }
      ]
    },
    {
      id: 4,
      title: "MSME Owners",
      image: "https://readdy.ai/api/search-image?query=MSME%20business%20owner%20reviewing%20financial%20reports%20in%20manufacturing%20facility%2C%20industrial%20workspace%20with%20production%20equipment%20and%20business%20compliance%20documents%2C%20professional%20business%20environment&width=400&height=300&seq=faq-msme&orientation=landscape",
      faqs: [
        {
          question: "What specific services do you offer for MSME owners?",
          answer: "We provide comprehensive business compliance, working capital management, loan assistance, tax optimization, audit preparation, and growth planning specifically designed for MSMEs."
        },
        {
          question: "When should MSME owners seek professional financial advisory?",
          answer: "When facing working capital challenges, planning expansion, seeking loans, or need to streamline compliance processes for sustainable business growth."
        },
        {
          question: "How do you help MSMEs with compliance and regulatory requirements?",
          answer: "We manage GST compliance, labor law adherence, statutory filing requirements, audit preparation, and maintain compliance calendars to ensure all regulatory obligations are met."
        },
        {
          question: "What technical systems do you implement for MSME financial management?",
          answer: "We deploy ERP systems, automated accounting solutions, inventory management tools, and integrated compliance platforms designed for small and medium enterprises."
        },
        {
          question: "How do you create awareness about financial planning importance for MSMEs?",
          answer: "We conduct industry-specific workshops, provide educational resources about business finance, and offer tailored consultations to help MSME owners understand growth opportunities."
        }
      ]
    },
    {
      id: 5,
      title: "Freelancers",
      image: "https://readdy.ai/api/search-image?query=Freelancer%20working%20from%20home%20office%20with%20client%20contracts%20and%20invoice%20documents%2C%20organized%20workspace%20with%20financial%20planning%20materials%2C%20professional%20home%20setup&width=400&height=300&seq=faq-freelancer&orientation=landscape",
      faqs: [
        {
          question: "What services do you offer specifically for freelancers?",
          answer: "We provide income management for irregular earnings, tax optimization, invoice tracking, business setup assistance, insurance planning, and retirement planning for independent professionals."
        },
        {
          question: "When should freelancers start formal financial planning?",
          answer: "As soon as you start earning regularly from freelance work, to establish proper financial structure, tax compliance, and long-term wealth building strategies."
        },
        {
          question: "How do you help freelancers manage irregular income patterns?",
          answer: "We create income smoothing strategies, establish emergency funds, set up automated savings, and provide budgeting frameworks designed for variable income streams."
        },
        {
          question: "What technical tools do you provide for freelancer financial management?",
          answer: "We offer invoicing software, expense tracking apps, automated tax calculators, and integrated financial planning platforms designed for independent professionals."
        },
        {
          question: "How do you create awareness about financial planning for freelancers?",
          answer: "We provide educational content about irregular income management, conduct webinars on freelancer finance, and offer personalized consultations to address unique challenges."
        }
      ]
    },
    {
      id: 6,
      title: "Consultants",
      image: "https://readdy.ai/api/search-image?query=Professional%20consultant%20reviewing%20client%20contracts%20and%20financial%20documents%20in%20modern%20office%20setting%2C%20business%20consultation%20setup%20with%20planning%20materials%2C%20executive%20environment&width=400&height=300&seq=faq-consultant&orientation=landscape",
      faqs: [
        {
          question: "What comprehensive services do you offer for consultants?",
          answer: "We provide business structuring, contract management, tax optimization, professional insurance, retirement planning, and practice scaling strategies for consulting professionals."
        },
        {
          question: "When should consultants engage with financial advisory services?",
          answer: "When transitioning from employment to consulting, scaling practice, or seeking to optimize tax implications and business structure for long-term success."
        },
        {
          question: "How do you help consultants optimize their business structure?",
          answer: "We analyze optimal business entity selection, contract structuring, tax implications, and provide guidance on professional practice management and scaling strategies."
        },
        {
          question: "What technical platforms do you use for consultant financial management?",
          answer: "We employ practice management software, contract tracking systems, automated billing platforms, and integrated financial planning tools designed for consulting professionals."
        },
        {
          question: "How do you create awareness about financial planning for consultants?",
          answer: "We conduct professional development workshops, provide industry-specific educational content, and offer peer learning opportunities to help consultants understand practice optimization."
        }
      ]
    },
    {
      id: 7,
      title: "Wholesalers",
      image: "https://readdy.ai/api/search-image?query=Wholesale%20business%20owner%20managing%20inventory%20and%20distribution%20in%20warehouse%20setting%2C%20organized%20wholesale%20operation%20with%20financial%20tracking%20systems%2C%20professional%20trade%20environment&width=400&height=300&seq=faq-wholesale&orientation=landscape",
      faqs: [
        {
          question: "What services do you offer specifically for wholesale businesses?",
          answer: "We provide inventory management, cash flow optimization, supplier financing, GST compliance, working capital management, and trade finance solutions for wholesale operations."
        },
        {
          question: "When should wholesale businesses seek financial advisory services?",
          answer: "When facing cash flow challenges, planning inventory expansion, seeking working capital loans, or need to optimize operational efficiency and profitability."
        },
        {
          question: "How do you help wholesalers manage cash flow and inventory?",
          answer: "We implement inventory optimization strategies, establish credit management systems, provide cash flow forecasting, and create working capital management solutions."
        },
        {
          question: "What technical systems do you implement for wholesale financial management?",
          answer: "We deploy inventory management systems, automated accounting solutions, GST compliance platforms, and integrated financial tracking designed for wholesale operations."
        },
        {
          question: "How do you create awareness about financial planning for wholesale businesses?",
          answer: "We conduct trade-specific workshops, provide educational resources about inventory finance, and offer tailored consultations for wholesale business optimization."
        }
      ]
    },
    {
      id: 8,
      title: "Retailers",
      image: "https://readdy.ai/api/search-image?query=Retail%20store%20owner%20managing%20point%20of%20sale%20system%20and%20customer%20transactions%2C%20modern%20retail%20environment%20with%20organized%20merchandise%20and%20financial%20tracking%2C%20professional%20retail%20setup&width=400&height=300&seq=faq-retail&orientation=landscape",
      faqs: [
        {
          question: "What comprehensive services do you offer for retail businesses?",
          answer: "We provide POS system integration, inventory management, customer credit solutions, GST compliance, seasonal planning, and retail analytics for business optimization."
        },
        {
          question: "When should retail business owners seek financial advisory?",
          answer: "When planning store expansion, managing seasonal fluctuations, seeking retail loans, or need to optimize inventory turnover and customer payment systems."
        },
        {
          question: "How do you help retailers manage seasonal business variations?",
          answer: "We create seasonal cash flow planning, establish inventory management strategies, provide working capital solutions, and implement revenue optimization techniques."
        },
        {
          question: "What technical platforms do you use for retail financial management?",
          answer: "We implement POS integration systems, inventory management platforms, customer relationship management tools, and automated financial reporting designed for retail operations."
        },
        {
          question: "How do you create awareness about financial planning for retailers?",
          answer: "We conduct retail-focused workshops, provide educational content about customer finance, and offer personalized consultations to address retail-specific challenges."
        }
      ]
    },
    {
      id: 9,
      title: "Investors",
      image: "https://readdy.ai/api/search-image?query=Professional%20investor%20analyzing%20portfolio%20performance%20on%20multiple%20screens%20with%20investment%20charts%20and%20market%20data%2C%20premium%20office%20environment%20with%20financial%20analysis%20tools&width=400&height=300&seq=faq-investor&orientation=landscape",
      faqs: [
        {
          question: "What services do you offer for serious investors?",
          answer: "We provide portfolio analysis, asset allocation strategies, risk management, tax optimization, alternative investment opportunities, and comprehensive wealth management solutions."
        },
        {
          question: "When should investors engage with professional financial advisors?",
          answer: "When portfolio complexity increases, seeking tax optimization, planning major investments, or need sophisticated risk management and diversification strategies."
        },
        {
          question: "How do you help investors optimize their investment portfolios?",
          answer: "We conduct comprehensive portfolio analysis, implement diversification strategies, provide tax-efficient investing approaches, and offer ongoing performance monitoring and rebalancing."
        },
        {
          question: "What technical tools do you use for investment management?",
          answer: "We employ advanced portfolio management software, risk analysis platforms, market research tools, and automated rebalancing systems designed for sophisticated investors."
        },
        {
          question: "How do you create awareness about advanced investment strategies?",
          answer: "We provide market insights, conduct investment workshops, offer educational content about portfolio optimization, and provide personalized investment education."
        }
      ]
    },
    {
      id: 10,
      title: "HNIs (High Net Worth Individuals)",
      image: "https://readdy.ai/api/search-image?query=High%20net%20worth%20individual%20reviewing%20premium%20wealth%20management%20portfolio%20in%20luxury%20office%20environment%2C%20sophisticated%20financial%20planning%20setup%20with%20exclusive%20investment%20documents&width=400&height=300&seq=faq-hni&orientation=landscape",
      faqs: [
        {
          question: "What exclusive services do you offer for HNIs?",
          answer: "We provide private wealth management, estate planning, tax optimization, alternative investments, trust structures, family office services, and succession planning for high net worth individuals."
        },
        {
          question: "When should HNIs seek specialized wealth management services?",
          answer: "When wealth complexity increases, planning intergenerational transfers, seeking tax optimization, or need sophisticated investment strategies and estate planning solutions."
        },
        {
          question: "How do you help HNIs with complex wealth management needs?",
          answer: "We provide comprehensive wealth structuring, tax optimization strategies, estate planning, trust management, and coordinate with legal and tax professionals for holistic solutions."
        },
        {
          question: "What technical platforms do you use for HNI wealth management?",
          answer: "We employ sophisticated portfolio management systems, private banking platforms, estate planning software, and integrated wealth tracking designed for high net worth requirements."
        },
        {
          question: "How do you create awareness about advanced wealth management strategies?",
          answer: "We provide exclusive insights, conduct private wealth seminars, offer bespoke educational content, and provide personalized wealth education for sophisticated financial needs."
        }
      ]
    }
  ];

  const openCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
  };

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const selectedCategoryData = categories.find(category => category.id === selectedCategory);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1931] mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Expert-driven, client-relevant answers organized by professional categories
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer" onClick={() => openCategory(category.id)}>
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-40 sm:h-48 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1931] font-semibold text-sm sm:text-base">5 Expert FAQs</span>
                    <i className="ri-arrow-right-line text-[#FFD700] text-lg sm:text-xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category FAQ Popup */}
      {selectedCategory && selectedCategoryData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1931] pr-4">
                  {selectedCategoryData.title} - FAQs
                </h3>
                <button
                  onClick={closeCategory}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer flex-shrink-0"
                >
                  <i className="ri-close-line text-gray-600"></i>
                </button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {selectedCategoryData.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-[#0A1931] pr-4">
                        {faq.question}
                      </h4>
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <i className={`ri-${expandedFAQ === index ? 'subtract' : 'add'}-line text-[#FFD700] text-lg sm:text-xl`}></i>
                      </div>
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <a
                  href="https://calendar.app.google/eZeCRmD1vxJfZ1Kh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0A1931] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1931]/90 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}