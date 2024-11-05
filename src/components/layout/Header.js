import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled past the first section (example: 500px)
      if (currentScrollY > 300) {
        setIsScrolled(true);

        // Show header if scrolling up, hide if scrolling down
        if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        setIsScrolled(false);
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`fixed left-8 right-8 top-5 z-40 bg-white backdrop-blur-xl md:max-w-[1376px] m-auto transition-all duration-500 ${
        isScrolled
          ? 'rounded-[200px] md:top-6 md:left-8 md:right-8 sm:px-4'
          : 'rounded-[200px] md:rounded-none md:top-0 md:left-0 md:right-0 sm:px-4'
      } ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 4px 40px 0px',
      }}
    >
      {/* Header content */}
      <div className="w-full mx-auto max-w-7xl h-full hidden gap-5 md:flex md:items-center py-3">
        <div className="w-full h-full flex items-center justify-start">
          <img className="!w-auto object-cover h-[40px] bg-transparent" alt="logo" src="/assets/default.png" />
        </div>
        <div className="w-full h-full flex items-center justify-end overflow-hidden gap-3">
          {/* Join Us Button */}
          <button
            className="BTN-SECONDARY group max-w-[180px] w-fit px-5 group text-[14px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300"
            style={{ height: '40px' }}
          >
            <div
              className="_editable_jwu41_1 overflow-hidden text-ellipsis"
              data-link="link=&target=_blank&text=Join%20us"
            >
              Join us
            </div>
            <img
              src="/assets/arrow-right.svg"
              className="w-[12px] h-auto transition-transform duration-300 group-hover:translate-x-1"
              alt=""
            />
          </button>
          {/* Contact Us Button */}
          <button
            className="BTN-PRIMARY group max-w-[180px] w-fit px-[20px] group text-[14px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full bg-white/0 border border-black hover:text-[#000000] hover:bg-[#8BC2D6] hover:transition-all hover:duration-300"
            style={{ height: '40px' }}
          >
            <div
              className="_editable_jwu41_1 overflow-hidden text-ellipsis"
              data-link="link=&target=_blank&text=Contact%20us"
            >
              Contact us
            </div>
            <img
              src="/assets/arrow-right.svg"
              className="w-[12px] h-auto transition-transform duration-300 group-hover:translate-x-1"
              alt=""
            />
          </button>
        </div>
      </div>
      {/* Mobile content omitted for brevity */}
    </section>
  );
};
