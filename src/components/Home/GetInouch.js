import React from 'react';

export const GetInouch = () => {
  return (
    <div className="py-10 bg-white   sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-36">
          <div>
            <h2 className="TITLE-PRIMARY text-start text-4xl font-semibold text-[#0f172a]   md:text-6xl">
              Get in Touch with Sparkling Clean
            </h2>
            <p className="DESC mt-6 text-start  text-base font-normal text-slate-700  ">
              We are here to answer your questions and schedule your cleaning service. Your privacy and belongings are
              always secure with us.
            </p>
          </div>
          <div style={{ opacity: 1, transform: 'none' }}>
            <img
              className="IMAGE rounded-lg bg-slate-100 w-[37.5rem] h-[25rem] object-cover aspect-[3/2]"
              alt="Cleaning service"
              src="/assets/c74ae977-9f24-46db-bdaa-45aa11aaa236.jpg"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-20 gap-6 sm:gap-10 sm:mt-16 lg:mt-20">
          <div>
            <p className="TEXT-CONTENT text-start text-xs font-semibold tracking-widest text-[#8BC2D6] uppercase">
              <span
                className="_editable_jwu41_1 undefined"
                data-link="link=&amp;target=_blank&amp;text=Tampa%20Office%20Hours"
              >
                Tampa Office Hours
              </span>
            </p>
            <p className="TEXT-CONTENT text-start mt-5 text-base font-medium text-[#0f172a]  ">
              Monday-Friday
              <br />
              8:00 am to 6:00 pm
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="TEXT-CONTENT text-start text-xs font-semibold tracking-widest text-[#8BC2D6] uppercase">
              <span className="_editable_jwu41_1 undefined" data-link="link=&amp;target=_blank&amp;text=Our%20Address">
                Our Address
              </span>
            </p>
            <p className="TEXT-CONTENT text-start text-base font-medium text-[#0f172a]  ">
              <span
                className="_editable_jwu41_1 undefined"
                data-link="link=&amp;target=_blank&amp;text=123%20Clean%20St%2C%20Tampa%2C%20FL%2033602%2C%20USA"
              >
                123 Clean St, Tampa, FL 33602, USA
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="TEXT-CONTENT text-start text-xs font-semibold tracking-widest text-[#8BC2D6] uppercase">
              <span
                className="_editable_jwu41_1 undefined"
                data-link="link=&amp;target=_blank&amp;text=Get%20in%20touch"
              >
                Get in touch
              </span>
            </p>
            <p className="TEXT-CONTENT text-start text-base font-medium text-[#0f172a]  ">
              <span
                className="_editable_jwu41_1 undefined"
                data-link="link=&amp;target=_blank&amp;text=%2B1-813-555-0199"
              >
                +1-813-555-0199
              </span>
              <br />
              <span
                className="_editable_jwu41_1 undefined"
                data-link="link=&amp;target=_blank&amp;text=%2B1-727-555-0199"
              >
                +1-727-555-0199
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
