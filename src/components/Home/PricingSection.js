import React from 'react';

export const PricingSection = () => {
  const plans = [
    {
      id: 'tier-one-bed',
      title: 'One-bed Apt',
      price: '$110',
      details: ['Airbnb Cleaning', 'House Cleaning'],
      buttonStyle: 'text-[#8BC2D6] border hover:bg-[#E2FBFE]   ',
    },
    {
      id: 'tier-two-bed',
      title: 'Two-bed Apt',
      price: '$130',
      details: ['Airbnb Cleaning', 'House Cleaning'],
      buttonStyle: 'bg-[#CAEEF9] text-white hover:bg-[#D0F2FA]  ',
    },
    {
      id: 'tier-three-bed',
      title: 'Three-bed Apt',
      price: '$150',
      details: ['Airbnb Cleaning', 'House Cleaning'],
      buttonStyle: 'text-[#8BC2D6] border hover:bg-[#E2FBFE]    ',
    },
  ];

  const plans2 = [
    {
      name: 'One-bed Apt',
      price: '$110',
      buttonClass: 'text-[#8BC2D6] border hover:bg-[#E2FBFE]    ',
    },
    {
      name: 'Two-bed Apt',
      price: '$130',
      buttonClass: 'bg-[#CAEEF9] text-white hover:bg-[#D0F2FA]  ',
    },
    {
      name: 'Three-bed Apt',
      price: '$150',
      buttonClass: 'text-[#8BC2D6] border hover:bg-[#E2FBFE]    ',
    },
  ];

  const services = [{ name: 'Airbnb Cleaning' }, { name: 'House Cleaning' }];

  return (
    <section className="bg-white py-16 sm:py-20  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#8BC2D6]">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900   sm:text-5xl">
            Affordable Cleaning Packages
          </p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-700  ">
          <div>
            Choose the right package for your needs. Our transparent pricing ensures no surprises, with options for
            every home size.
          </div>
        </p>
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {plans.map((plan) => (
            <section
              key={plan.id}
              className={`p-8 ${
                plan.id === 'tier-two-bed' ? 'rounded-xl bg-[#E8FDFF]  ring-1 ring-inset ring-slate-200  ' : ''
              }`}
            >
              <h3 id={plan.id} className="TITLE-PRIMARY text-sm font-semibold leading-6 text-slate-900  ">
                {plan.title}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-slate-900  ">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm font-semibold">per service</span>
              </p>
              <button
                className={`BTN-PRIMARY mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus:outline-none focus:ring-2 focus:ring-[#8BC2D6]   ${plan.buttonStyle}`}
              >
                Contact Us
              </button>
              <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-slate-900  ">
                {plan.details.map((detail, index) => (
                  <li key={index} className="flex gap-x-3">
                    <img src="/assets/check-blue.svg" className="w-[16px]" alt="" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
              <div className="flex w-1/4 px-4" style={{ marginLeft: '50%' }}>
                <div className="w-full rounded-t-xl border-x border-t border-black/10   bg-[#E8FDFF]  " />
              </div>
            </div>
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td></td>
                  {plans2.map((plan, index) => (
                    <th key={index} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-slate-900  ">
                        <div>{plan.name}</div>
                        <p className="mt-2 flex items-baseline gap-x-1 text-slate-900  ">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-sm font-semibold">/month</span>
                        </p>
                        <button
                          className={`BTN-PRIMARY mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus:outline-none focus:ring-2 focus:ring-[#8BC2D6]  ${plan.buttonClass}`}
                        >
                          Contact Us
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan="4"
                    className="pt-8 pb-4 text-sm font-semibold leading-6 text-slate-900  "
                  >
                    Special Services
                    <div className="absolute inset-x-8 mt-4 h-px bg-black/10  " />
                  </th>
                </tr>
                {services.map((service, index) => (
                  <tr key={index}>
                    <th scope="row" className="py-4 text-sm font-normal leading-6 text-slate-900  ">
                      {service.name}
                      <div className="absolute inset-x-8 mt-4 h-px bg-black/10  " />
                    </th>
                    {plans.map((_, index) => (
                      <td key={index} className="px-6 py-4 xl:px-8">
                        <img src="/assets/check-blue.svg" className="w-[16px]" alt="" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
