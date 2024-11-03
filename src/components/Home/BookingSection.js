import React from 'react';

export const BookingSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[#CAEEF9]">
      <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Book Your Cleaning Service Today
          </h1>
          <p className="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            Join our satisfied customers and enjoy a sparkling clean home. Book now to experience our top-notch cleaning
            services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="BTN-PRIMARY inline-flex items-center justify-center text-slate-800 bg-white font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-white/80 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500">
              <div>Book Now</div>
            </button>
            <button className="BTN-SECONDARY text-sm flex items-center group gap-1 font-semibold leading-6 text-white">
              <div>Learn More</div>
              <img src="/assets/info.svg" className="w-[14px] h-[14px]" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
