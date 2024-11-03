import React from 'react';
import { HeroSection } from './HeroSection';
import { PricingSection } from './PricingSection';
import { CleanerSection } from './CleanerSection';
import { BookingSection } from './BookingSection';
import { GetInouch } from './GetInouch';
import { ReviewsSection } from './ReviewsSection';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <PricingSection />
      <CleanerSection />
      <BookingSection />
      <GetInouch />
      <ReviewsSection />
      <a class="wegic-badge" id="wegic-badge" href="#" target="_blank">
        <img src="/assets/static.svg" className="w-[20px] h-[20px]" />
        Made in Wegic
      </a>
    </div>
  );
};
