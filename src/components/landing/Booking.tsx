import React, { useState } from 'react';

const Booking = () => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: 'Book Your Beauty Journey',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      schedule: 'Schedule Appointment'
    },
    th: {
      title: 'จองเส้นทางความงามของคุณ',
      fullName: 'ชื่อ-นามสกุล',
      email: 'ที่อยู่อีเมล',
      phone: 'หมายเลขโทรศัพท์',
      schedule: 'จัดตารางนัดหมาย'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-100 to-pink-50" id="booking">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {translations[language].title}
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].fullName}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].email}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].phone}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {translations[language].schedule}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;