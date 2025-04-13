import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-secondary to-dark text-white pt-32 pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Drive Growth with Strategic Marketing Solutions
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            We help businesses expand their reach, connect with customers, and boost revenue through data-driven email marketing, targeted advertising, and innovative customer acquisition strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Request a Free Consultation
            </a>
            <a 
              href="#services" 
              className="bg-secondary hover:bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;