// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: 'TrainsCat transformed our marketing strategy and delivered incredible results. Their email campaigns increased our conversion rates by 135% in just three months. I cannot recommend them enough!',
    name: 'Sarah Johnson',
    title: 'CEO, TechBridge Solutions',
    image: '/placeholder-image.jpg'
  },
  {
    id: 2,
    quote: 'We struggled to acquire new customers until we partnered with TrainsCat. Their customer acquisition strategy helped us reach our ideal audience and grow our customer base by 78% in six months.',
    name: 'Michael Chen',
    title: 'Marketing Director, Elevate Fitness',
    image: '/placeholder-image.jpg'
  },
  {
    id: 3,
    quote: 'The team at TrainsCat are true marketing experts. Their data-driven approach to digital advertising reduced our cost per acquisition by 42% while increasing our overall conversion rate. Exceptional service!',
    name: 'Rebecca Torres',
    title: 'Founder, Bloom Skincare',
    image: '/placeholder-image.jpg'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-gray-600">
          Do not just take our word for it—hear from the businesses we have helped grow
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-light p-8 rounded-lg border border-gray-100 relative"
            >
              <div className="mb-6 text-gray-700 italic relative z-10">
                <p className="before:content-['\u201C'] before:text-5xl before:text-primary before:opacity-30 before:absolute before:top-0 before:-left-2 before:leading-none pl-4">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;