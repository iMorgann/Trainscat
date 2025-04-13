// src/components/Process.jsx
import React from 'react';

const steps = [
  {
    id: 1,
    number: '1',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business, audience, and goals. Our team conducts a comprehensive analysis of your current marketing efforts and identifies opportunities for growth.'
  },
  {
    id: 2,
    number: '2',
    title: 'Strategy Development',
    description: 'Based on our findings, we craft a customized marketing strategy designed to achieve your specific objectives, with clear timelines and measurable KPIs.'
  },
  {
    id: 3,
    number: '3',
    title: 'Implementation',
    description: 'Our experienced team executes the strategy across all relevant channels, creating compelling campaigns and content that resonates with your target audience.'
  },
  {
    id: 4,
    number: '4',
    title: 'Monitoring & Optimization',
    description: 'We continuously track performance, analyze results, and make data-driven adjustments to maximize ROI and ensure we are meeting or exceeding your goals.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
          Our Proven Process
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-gray-600">
          A systematic approach to developing and implementing successful marketing strategies
        </p>
        
        <div className="flex flex-wrap justify-center">
          {steps.map((step) => (
            <div key={step.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;