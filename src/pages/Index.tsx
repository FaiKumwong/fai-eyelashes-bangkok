import React from 'react';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Testimonials from '@/components/landing/Testimonials';
import Booking from '@/components/landing/Booking';
import Footer from '@/components/landing/Footer';
import { Metadata } from '@/components/Metadata';

const Index = () => {
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
