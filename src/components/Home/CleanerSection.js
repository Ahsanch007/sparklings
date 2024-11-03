import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
export const CleanerSection = () => {
  const members = [
    {
      name: 'Sophia Johnson',
      role: 'Lead Cleaner',
      location: 'Tampa, FL',
      imgSrc: '/assets/dc9ff17c-aacf-4ea6-b6ef-b79b1d0d039c.jpg',
      imgAlt: 'Sophia Johnson',
    },
    {
      name: 'Emily Brown',
      role: 'Cleaning Specialist',
      location: 'St. Petersburg, FL',
      imgSrc: '/assets/26e332cc-ded6-4ae9-bd2b-184caef3eaf0.jpg',
      imgAlt: 'Emily Brown',
    },
    // Add more members as needed
  ];
  useEffect(() => {
    Aos.init(); // Customize duration or other settings
  }, []);
  return (
    <div className="w-full bg-gradient-to-b bg-[#124D6F] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-start lg:mx-0">
          <h2 className="TITLE-PRIMARY text-2xl font-extrabold text-white/90 md:text-4xl">
            Meet Our Professional Cleaners
          </h2>
          <p className="DESC mt-6 text-base font-normal text-white/70">
            Our team is composed of skilled and trustworthy cleaning professionals committed to delivering exceptional
            service with a smile.
          </p>
        </div>
        <ul
          data-aos-duration="1000"
          data-aos="fade-up"
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {members.map((member, index) => (
            <li key={index} style={{ opacity: 1, transform: 'none' }}>
              <img
                className="IMAGE aspect-[14/13] w-full rounded-2xl object-cover"
                alt={member.imgAlt}
                src={member.imgSrc}
                style={{ backgroundColor: 'transparent' }}
              />
              <h3 className="TITLE-SECONDARY mt-6 text-lg font-semibold leading-8 tracking-tight text-white/90">
                {member.name}
              </h3>
              <p className="DESC text-base leading-7 text-white/70">{member.role}</p>
              <p className="TEXT-CONTENT text-sm leading-6 text-white/50">{member.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
