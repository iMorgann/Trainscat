import React from 'react';

const stats = [
  { id: 1, value: '500+', label: 'Clients Served' },
  { id: 2, value: '94%', label: 'Client Retention' },
  { id: 3, value: '3.2M', label: 'Leads Generated' },
  { id: 4, value: '217%', label: 'Average ROI' }
];

const Stats = () => {
  return (
    <section className="bg-primary text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="px-4">
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg uppercase tracking-wider opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;