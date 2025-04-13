// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    // For example, send the data to your backend or a service like Formspree
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    
    // You could also show a success message
    alert('Thanks for contacting us! We\'ll be in touch soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Get in touch with our team of marketing experts to discuss how we can help you achieve your business goals.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your company"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">How Can We Help?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary h-36"
                placeholder="Tell us about your marketing goals"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-full font-semibold transition-colors"
            >
              Schedule Your Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;