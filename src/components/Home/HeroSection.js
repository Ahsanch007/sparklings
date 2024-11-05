import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

export const HeroSection = () => {
  useEffect(() => {
    Aos.init(); // Customize duration or other settings
  }, []);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation based on cursor position
    const rotateX = (y / height - 0.5) * -20; // -20 to 20 deg rotation on Y axis
    const rotateY = (x / width - 0.5) * 20; // -20 to 20 deg rotation on X axis

    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="w-full px-6 py-24 mx-auto max-w-7xl bg-[#EEFAFC]   md:px-8 md:py-32">
      <div className="w-full h-full grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className=" w-full flex flex-col gap-14 justify-between">
          <div className="w-full flex flex-col gap-10" data-aos-duration="1000" data-aos="fade-up">
            <h1 className="TITLE-PRIMARY text-start w-full text-5xl font-semibold text-[#020102]   md:text-6xl">
              <div>Welcome to Sparkling Clean</div>
            </h1>
            <div className="w-full flex items-center gap-10">
              <div className="w-auto flex flex-col gap-2">
                <p className="text-[#5D9DC8] font-bold text-6xl">
                  <div data-link="link=&target=_blank&text=100%">100%</div>
                </p>
                <p className="w-full text-[#020102] font-semibold  ">
                  <div data-link="link=&target=_blank&text=Satisfaction%20Guarantee">Satisfaction Guarantee</div>
                </p>
              </div>
              <div className="relative w-auto flex items-center -space-x-5">
                <div className="z-[10] w-[4.2rem] h-[4.2rem] aspect-square rounded-full object-cover shadow-md">
                  <img
                    className="w-full h-full rounded-full border-[3px] border-[#EEFAFC] bg-[#ADDCEA] object-cover"
                    alt="designer_avatars_0"
                    src="/assets/photo-1634051808431-dda4b7450b72.jpeg"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
                <div className="z-[11] w-[4.2rem] h-[4.2rem] aspect-square rounded-full object-cover shadow-md">
                  <img
                    className="w-full h-full rounded-full border-[3px] border-[#EEFAFC] bg-[#ADDCEA] object-cover"
                    alt="designer_avatars_1"
                    src="/assets/photo-1490505658643-e96d613eb642.jpeg"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
                <div className="z-[12] w-[4.2rem] h-[4.2rem] aspect-square rounded-full object-cover shadow-md">
                  <img
                    className="w-full h-full rounded-full border-[3px] border-[#EEFAFC] bg-[#ADDCEA] object-cover"
                    alt="designer_avatars_2"
                    src="/assets/photo-1591046637350-5a71129db340.jpeg"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-10">
            <button
              class="w-fit h-12 px-6 group text-sm font-semibold flex gap-2 items-center rounded-full bg-[#5D9DC8] hover:bg-[#9DDBF6] text-[#EEFAFC] transition-all duration-300 md:px-8 md:h-14 md:text-base"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <div class="_editable_jwu41_1" data-link="link=%23Hero&amp;target=_blank&amp;text=Learn%20More">
                Learn More
              </div>
              <img
                src="/assets/check.svg"
                class="w-[14px] h-auto transition-transform duration-300 group-hover:translate-x-1"
                alt=""
              />
            </button>

            <p class="text-[#5D9DC8] text-left  " data-aos-duration="1000" data-aos="fade-up">
              <div>
                Experience the finest in professional cleaning services with a personal touch. We are proud to be a
                woman-owned business serving Tampa and St. Petersburg with comprehensive cleaning solutions, including
                window cleaning with every service.
              </div>
            </p>
          </div>
        </div>
        <div style={{ opacity: 1, transform: 'none' }} data-aos-duration="1000" data-aos="fade-up">
          <div
            className="w-full h-full flex items-center justify-center relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] rounded-tl-[6rem] rounded-br-[6rem] transition-transform duration-300">
              <img
                data-aos-duration="1000"
                data-aos="fade-up"
                className="w-full h-full bg-[#ADDCEA] dark:bg-[#5D9DC8] object-cover"
                alt="team_image"
                src="/assets/photo-1581578731548-c64695cc6952.jpeg"
                style={{ backgroundColor: 'transparent' }}
              />
              <div
                data-aos-duration="1000"
                data-aos="fade-up"
                className="absolute text-left h-1/2 bottom-0 w-full flex flex-col gap-3 justify-end p-10 bg-gradient-to-t from-[#5D9DC8]/60 transition-all duration-500"
              >
                <div className="w-full text-xl text-[#EEFAFC] font-semibold md:text-2xl">Our Expert Team</div>
                <div className="w-full text-sm text-[#EEFAFC] font-light md:text-base">
                  Our dedicated team ensures your space is spotless, handling everything from routine cleanings to
                  special requests with professionalism and care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
