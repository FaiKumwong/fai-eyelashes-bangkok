import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Testimonials from '@/components/landing/Testimonials';
import Booking from '@/components/landing/Booking';
import Footer from '@/components/landing/Footer';
import { Metadata } from '@/components/Metadata';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Metadata 
        title="Fai Eyelashes - Premium Eyelash Extensions in Bangkok On Nut"
        description="Transform your look with premium eyelash extensions at Fai Eyelashes. Professional service, natural results, and a luxurious experience in Bangkok On Nut."
      />
      <Hero />
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;