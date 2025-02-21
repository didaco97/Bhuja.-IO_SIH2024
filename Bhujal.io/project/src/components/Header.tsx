import React, { useState } from 'react';
import { Droplet, Menu, X, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { EXTERNAL_SERVICES } from '../config/constants';

interface NavItem {
  path: string;
  label: string;
  isExternal?: boolean;
  url?: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/terms', label: 'Groundwater Terms' },
  { path: '/noc', label: 'NOC Guidelines' },
  { path: '/training', label: 'Training' },
  { path: '/reports', label: 'AI Reports' },
  { 
    path: '/chatbot', 
    label: 'AI Chatbot', 
    isExternal: true, 
    url: EXTERNAL_SERVICES.chatbot.url 
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const renderNavLink = (item: NavItem) => {
    if (item.isExternal) {
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-4 py-2 text-white hover:bg-[#003a75]"
        >
          {item.label}
          <ExternalLink className="h-4 w-4" />
        </a>
      );
    }

    return (
      <Link 
        to={item.path} 
        className={`block px-4 py-2 text-white hover:bg-[#003a75] ${
          isActive(item.path) ? 'bg-[#003a75]' : ''
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="bg-white">
      {/* Logo Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left Side - Emblem and Text */}
            <div className="flex items-center gap-3">
              <img 
                src="https://jalshakti.gov.in/themes/jalshakti/images/national_emblem.svg"
                alt="National Emblem"
                className="h-22"
              />
              <div className="text-[#000000]">
                <div className="text-lg font-bold">भारत सरकार</div>
                <div className="text-lg font-bold">Government of India</div>
                <div className="text-sm">जल शक्ति मंत्रालय, भूजल विभाग</div>
                <div className="text-sm">Ministry of Jal Shakti, Department of Groundwater</div>
              </div>
            </div>

            {/* Right Side - Campaign Logos */}
            <div className="flex items-center gap-5">
              <img 
                src="https://jalshakti.gov.in/themes/jalshakti/images/JAL_JEEVAN_Logo.png"
                alt="Jal Jeevan Mission"
                className="h-20"
              />
              <img 
                src="https://zeevector.com/wp-content/uploads/G20-Logo-PNG-India@zeevector.png"
                alt="G20"
                className="h-20"
              />
              <img 
                src="https://jalshakti.gov.in/themes/jalshakti/images/logo_azadi.svg"
                alt="Azadi Ka Amrit Mahotsav"
                className="h-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#00548F] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full`}>
              <ul className="flex flex-col md:flex-row md:items-center py-2 md:py-0">
                {navItems.map((item) => (
                  <li key={item.path}>
                    {renderNavLink(item)}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}