import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Classic Lashes",
      description: "Natural-looking enhancement with one extension per natural lash",
      price: "฿1,200"
    },
    {
      title: "Volume Lashes",
      description: "Fuller look with multiple extensions per natural lash",
      price: "฿1,800"
    },
    {
      title: "Hybrid Lashes",
      description: "Mix of classic and volume for a customized look",
      price: "฿1,500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-pink-500">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;