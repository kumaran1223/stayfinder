
import React from 'react';
import { Home, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Centre', 'Safety information', 'Cancellation options', 'Our COVID-19 Response', 'Supporting people with disabilities', 'Report a neighbourhood concern']
    },
    {
      title: 'Community',
      links: ['StayFinder.org: disaster relief housing']
    },
    {
      title: 'Hosting',
      links: ['Try hosting', 'StayFinder Cover: protection', 'Explore hosting resources', 'Visit our community forum', 'How to host responsibly']
    },
    {
      title: 'About',
      links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Gift cards']
    }
  ];

  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-xl">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">StayFinder</span>
              </div>
              <span className="text-gray-600 text-sm">© 2025 StayFinder, Inc.</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Company details</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
