import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
const testimonials = [
  {
    text: 'Sparkling Clean exceeded my expectations. My home is spotless, and I love the attention to detail!',
    name: 'Amanda Lee',
    role: 'Homeowner',
    imageUrl: '/assets/340a715d-a98e-462e-b854-44d6872b1d77.jpg',
  },
  {
    text: 'The team is friendly and professional. I trust them completely with my home.',
    name: 'Michael Smith',
    role: 'Airbnb Host',
    imageUrl: '/assets/photo-1516913840875-366de3e463bd.jpeg',
  },
  {
    text: 'Their service is exceptional. I recommend Sparkling Clean to everyone!',
    name: 'Jessica Davis',
    role: 'Business Owner',
    imageUrl: '/assets/photo-1512310604669-443f26c35f52.jpeg',
  },
];

export const ReviewsSection = () => {
  useEffect(() => {
    Aos.init(); // Customize duration or other settings
  }, []);

  return (
    <div className="py-10 bg-[#E8FDFF]">
      <div className="px-4 py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3" data-aos-duration="1000" data-aos="fade-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ opacity: 1, transform: 'none' }}>
              <div className="w-full h-full flex flex-col bg-white   border border-black/10   rounded-md">
                <div className="flex flex-col justify-between flex-1 p-8  text-start">
                  <blockquote>
                    <p className="DESC text-lg text-slate-900  ">{testimonial.text}</p>
                  </blockquote>
                  <div className="mt-8">
                    <div className="w-full h-0 mb-8 border-t-2 border-black/10   border-dotted"></div>
                    <div className="flex items-center gap-3">
                      <img
                        className="IMAGE flex-shrink-0 object-cover w-10 h-10 rounded-full aspect-[1/1]"
                        alt={testimonial.name}
                        src={testimonial.imageUrl}
                        style={{ backgroundColor: 'transparent' }}
                      />
                      <div className="flex flex-col ">
                        <p className="TITLE-PRIMARY text-base font-semibold text-slate-900  ">{testimonial.name}</p>
                        <p className="TITLE-SECONDARY text-base text-slate-600  ">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
