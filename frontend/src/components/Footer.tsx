import { MapPin, Phone, Mail, Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center">
    <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-xl">SB</span>
    </div>
    <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SkillBridge</span>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-5 space-y-6">
            <a href="#hero" className="inline-block">
              <Logo />
            </a>
            <p className="text-gray-400 text-lg">Empowering professionals to bridge their skills gap through expert mentorship and personalized learning journeys.</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>123 Tech Street, Innovation City</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>contact@skillbridge.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <div className="h-1 w-6 bg-blue-500 rounded mr-2"></div>
              Platform
            </h3>
            <ul className="space-y-3">
              {["Features", "Mentors", "Sessions", "Dashboard"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white flex items-center group">
                    <ArrowRight className="h-4 w-0 group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <div className="h-1 w-6 bg-purple-500 rounded mr-2"></div>
              Company
            </h3>
            <ul className="space-y-3">
              {["About", "Careers", "Blog", "Team"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white flex items-center group">
                    <ArrowRight className="h-4 w-0 group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <div className="h-1 w-6 bg-teal-500 rounded mr-2"></div>
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest mentorship opportunities and tech insights.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-gray-200 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </form>
            
            <div className="mt-6">
              <div className="flex space-x-4 mt-4">
                {[Twitter, Linkedin, Github, Instagram].map((Icon, index) => (
                  <a key={index} href="#" className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} SkillBridge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Created and maintained by{" "}
              <a
                href="https://codefirst.com"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                CodeFirst
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}