import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faBullhorn, 
  faUsers, 
  faChartLine, 
  faPencilAlt, 
  faCogs 
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 1,
    icon: faEnvelope,
    title: 'Email Marketing',
    description: 'Engage your audience with personalized email campaigns that convert. We handle everything from list building to campaign optimization and performance tracking.'
  },
  {
    id: 2,
    icon: faBullhorn,
    title: 'Digital Advertising',
    description: 'Reach your ideal customers with targeted ads across search engines and social media platforms. Our data-driven approach ensures maximum ROI on your ad spend.'
  },
  {
    id: 3,
    icon: faUsers,
    title: 'Customer Acquisition',
    description: 'Grow your customer base with our proven acquisition strategies. We identify your ideal customers and create multi-channel campaigns to attract and convert them.'
  },
  {
    id: 4,
    icon: faChartLine,
    title: 'Analytics & Reporting',
    description: 'Make informed decisions with comprehensive analytics. We track key metrics, analyze performance, and provide actionable insights to optimize your marketing efforts.'
  },
  {
    id: 5,
    icon: faPencilAlt,
    title: 'Content Creation',
    description: 'Engage your audience with compelling content across all channels. Our team crafts persuasive copy that resonates with your target audience and drives conversions.'
  },
  {
    id: 6,
    icon: faCogs,
    title: 'Marketing Automation',
    description: 'Save time and boost efficiency with tailored marketing automation solutions. We set up systems that nurture leads and convert prospects while you focus on running your business.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
          Our Marketing Solutions
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-gray-600">
          Comprehensive, results-driven marketing services tailored to your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-light p-8 rounded-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-primary text-4xl mb-6">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
