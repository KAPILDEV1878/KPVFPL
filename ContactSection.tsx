
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Message: ${formData.message}
    `;
    
    // Open email client
    const mailtoLink = `mailto:connect@financitypl.com?subject=New Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-[#0A1931] to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
            Start Your Prosperity Journey
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto px-4">
            Ready to transform your financial future? Let's discuss how FINANCITY can help you achieve your prosperity goals
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-6 sm:mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <i className="ri-phone-line text-[#0A1931] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm sm:text-base">Phone</div>
                    <a 
                      href="tel:+918657131823"
                      className="text-white font-semibold hover:text-[#FFD700] transition-colors cursor-pointer text-sm sm:text-base break-words"
                    >
                      +91 8657 131 823
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <i className="ri-mail-line text-[#0A1931] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm sm:text-base">Email</div>
                    <a 
                      href="mailto:connect@financitypl.com"
                      className="text-white font-semibold hover:text-[#FFD700] transition-colors cursor-pointer text-sm sm:text-base break-words"
                    >
                      connect@financitypl.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <i className="ri-global-line text-[#0A1931] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm sm:text-base">Website</div>
                    <a 
                      href="https://www.financitypl.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#FFD700] transition-colors cursor-pointer text-sm sm:text-base break-words"
                    >
                      www.financitypl.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <i className="ri-time-line text-[#0A1931] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm sm:text-base">Business Hours</div>
                    <div className="text-white font-semibold text-sm sm:text-base">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-[#FFD700] font-bold mb-4 text-sm sm:text-base">Connect With Us</h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a
                      href="https://wa.me/918657131823"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
                    >
                      <i className="ri-whatsapp-line text-[#0A1931] text-lg"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578280447398"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
                    >
                      <i className="ri-facebook-fill text-[#0A1931] text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/financitypl4u/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
                    >
                      <i className="ri-instagram-line text-[#0A1931] text-lg"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/financity-portfolio-landmark-a51350204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
                    >
                      <i className="ri-linkedin-fill text-[#0A1931] text-lg"></i>
                    </a>
                    <a
                      href="https://x.com/FINANCITYPL4U"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
                    >
                      <i className="ri-twitter-x-line text-[#0A1931] text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border border-white/20">
                <div className="mb-4 sm:mb-6">
                  <label className="block text-blue-200 mb-2 text-sm sm:text-base">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#FFD700] text-sm sm:text-base"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label className="block text-blue-200 mb-2 text-sm sm:text-base">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#FFD700] text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label className="block text-blue-200 mb-2 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#FFD700] text-sm sm:text-base"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label className="block text-blue-200 mb-2 text-sm sm:text-base">Service Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-[#FFD700] pr-8 text-sm sm:text-base"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="business-compliance">Business Compliance</option>
                    <option value="smart-accountancy">Smart Accountancy</option>
                    <option value="tax-optimization">Tax Optimization</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="funding-readiness">Funding Readiness</option>
                    <option value="portfolio-plan">360° Portfolio Plan</option>
                  </select>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label className="block text-blue-200 mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#FFD700] resize-none text-sm sm:text-base"
                    placeholder="Tell us about your financial goals and how we can help..."
                    maxLength={500}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#FFD700] text-[#0A1931] py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://static.readdy.ai/image/a4bce69f5119c600272f7cca5447e2ab/ce41f9e817ce621b5370451f15824822.png" 
                  alt="FINANCITY Portfolio Landmark Logo" 
                  className="h-8 sm:h-12 w-auto mr-2 sm:mr-3"
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#FFD700] font-serif">FINANCITY</div>
                  <div className="text-xs sm:text-sm font-bold text-[#FFD700] font-serif">Portfolio Landmark</div>
                </div>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Your trusted partner for comprehensive financial solutions and strategic growth planning.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#FFD700] font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Business Compliance</a></li>
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Smart Accountancy</a></li>
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Tax Optimization</a></li>
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Financial Planning</a></li>
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Funding Readiness</a></li>
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Portfolio Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#FFD700] font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#about" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#prosperity-roadmap" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Our Process</a></li>
                <li><a href="#financity-standard" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Client Success</a></li>
                <li><a href="#faq" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">FAQ</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Contact</a></li>
                <li><a href="https://calendar.app.google/eZeCRmD1vxJfZ1Kh7" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-[#FFD700] transition-colors cursor-pointer">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#FFD700] font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-[#FFD700] mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-blue-200">Mumbai, Maharashtra<br />India</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-phone-line text-[#FFD700] mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-blue-200 break-words">+91 8657 131 823</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-mail-line text-[#FFD700] mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-blue-200 break-words">connect@financitypl.com</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-global-line text-[#FFD700] mr-2 mt-1 flex-shrink-0"></i>
                  <span className="text-blue-200 break-words">www.financitypl.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-blue-200 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
              © 2017 FINANCITY Portfolio Landmark. All rights reserved. | A division of Kapildev Patel Ventures
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578280447398"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-[#0A1931] text-xs sm:text-sm"></i>
              </a>
              <a
                href="https://x.com/FINANCITYPL4U"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-line text-[#0A1931] text-xs sm:text-sm"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/financity-portfolio-landmark-a51350204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-[#0A1931] text-xs sm:text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/financitypl4u/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700]/90 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-[#0A1931] text-xs sm:text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
