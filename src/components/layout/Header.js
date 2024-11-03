import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed left-8 right-8 top-5 z-40 bg-white backdrop-blur-xl md:max-w-[1376px] m-auto transition-all duration-500 ${
        isScrolled
          ? ' rounded-[200px] md:top-6 md:left-8 md:right-8 md:px-4'
          : ' rounded-[200px] md:rounded-none md:top-0 md:left-0 md:right-0'
      }`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 4px 40px 0px',
      }}
    >
      {/* Medium screen */}
      <div className="w-full mx-auto max-w-7xl h-full hidden gap-5 md:flex md:items-center py-3">
        <div className="w-full h-full flex items-center justify-start">
          <img className="!w-auto object-cover h-[40px] bg-transparent" alt="logo" src="/assets/default.png" />
        </div>

        <div className="w-full h-full flex items-center justify-end overflow-hidden gap-3">
          {/* Join Us Button */}
          <button
            className="BTN-SECONDARY max-w-[180px] w-fit px-5 group text-[14px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300"
            style={{ height: '40px' }}
          >
            <div
              className="_editable_jwu41_1 overflow-hidden text-ellipsis"
              data-link="link=&target=_blank&text=Join%20us"
            >
              Join us
            </div>
            <img src="/assets/arrow-right.svg" className="w-[12px] h-auto" alt="" />
          </button>

          {/* Contact Us Button */}
          <button
            className="BTN-PRIMARY max-w-[180px] w-fit px-[20px] group text-[14px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full bg-white/0 border border-black hover:text-[#000000] hover:bg-[#8BC2D6] hover:transition-all hover:duration-300"
            style={{ height: '40px' }}
          >
            <div
              className="_editable_jwu41_1 overflow-hidden text-ellipsis"
              data-link="link=&target=_blank&text=Contact%20us"
            >
              Contact us
            </div>
            <img src="/assets/arrow-right.svg" className="w-[12px] h-auto" alt="" />
          </button>
        </div>
      </div>

      {/* Mobile screen */}
      <div
        className="relative z-40 w-full h-full flex items-center md:hidden"
        style={{ paddingTop: '12px', paddingBottom: '12px' }}
      >
        <img className="!w-auto px-6 object-cover h-[40px] bg-transparent" alt="logo" src="/assets/default.png" />
        <button className="absolute right-6" tabIndex="0" onClick={toggleMenu}>
          <img src={isMenuOpen ? '/assets/cross.svg' : '/assets/hamburger.svg'} alt="menu icon" />
        </button>
        <div
          className={`absolute z-50 top-full w-full flex flex-col gap-3 bg-white rounded-3xl shadow-xl transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
          style={{ transformOrigin: 'top' }} // Ensure the scaling is from the top
        >
          <nav
            className="w-full gap-[8px] px-7 flex flex-col text-[14px]"
            style={{ paddingTop: '20px', paddingBottom: '20px' }}
          >
            <button
              className="flex justify-center items-center w-full px-6 py-3 text-black text-left whitespace-nowrap cursor-pointer rounded-full hover:bg-black/5 hover:transition-all duration-100"
              style={{ height: '72px' }}
            >
              <div
                className="_editable_jwu41_1 undefined"
                data-link="link=sparkling-clean&amp;target=_blank&amp;text=Sparkling%20Clean"
              >
                Sparkling Clean
              </div>
            </button>
            <div className="w-full h-full flex items-center justify-between overflow-hidden gap-3 px-5 my-4">
              <button
                className="BTN-SECONDARY px-5 flex-1 group text-[14px] justify-center overflow-hidden whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300"
                style={{ height: '40px' }}
              >
                <div
                  className="_editable_jwu41_1 overflow-hidden text-ellipsis"
                  data-link="link=&amp;target=_blank&amp;text=Join%20us"
                >
                  Join us
                </div>
                <img src="/assets/arrow-right.svg" className="w-[12px] h-auto" alt="" />
              </button>
              <button
                className="BTN-PRIMARY px-5 flex-1 overflow-hidden group text-[14px] justify-center whitespace-nowrap font-normal text-black hover:text-[#000000] flex gap-2 items-center rounded-full bg-white/0 border border-black hover:bg-blue-600 hover:transition-all hover:duration-300"
                style={{ height: '40px' }}
              >
                <div
                  className="_editable_jwu41_1 overflow-hidden text-ellipsis"
                  data-link="link=&amp;target=_blank&amp;text=Contact%20us"
                >
                  Contact us
                </div>
                <img src="/assets/arrow-right.svg" className="w-[12px] h-auto" alt="" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
