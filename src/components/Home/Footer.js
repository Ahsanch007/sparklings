import React from 'react';
const menuItems = [
  { text: 'About Sparkling Clean', href: '#about' },
  { text: 'Our Cleaning Services', href: '#services' },
  { text: 'Pricing Options', href: '#pricing' },
  { text: 'Meet Our Team', href: '#team' },
  { text: 'Get in Touch', href: '#contact' },
];

const socialLinks = [
  { platform: 'twitter', url: 'https://twitter.com/sparklingclean' },
  { platform: 'facebook', url: 'https://facebook.com/sparklingclean' },
  { platform: 'instagram', url: 'https://instagram.com/sparklingclean' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/sparklingclean' },
];
export const Footer = () => {
  return (
    <div className="py-10 bg-white  ">
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="px-4 mx-auto max-w-7xl py-10 flex flex-col items-center gap-16">
          <ul className="w-full grid grid-cols-2 text-center gap-6 md:grid-cols-5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button className="TEXT-LINK inline-flex text-lg font-medium text-[#0f172a]   hover:text-[#D0F2FA] focus:text-sky-500 dark:hover:text-[#D0F2FA] dark:focus:text-sky-500">
                  <div>{item.text}</div>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <ul className="flex items-center justify-center gap-6">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <button className="inline-flex items-center justify-center w-10 h-10 text-[#0f172a] transition-all duration-200 rounded-full hover:bg-[#D0F2FA] hover:text-slate-50 focus:outline-none focus:bg-slate-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:hover:bg-[#D0F2FA] dark:focus:bg-sky-500  ">
                      <div className="_icon-wrapper_1a3wa_1 text-xl" data-library="FontAwesome">
                        {link.platform === 'twitter' && (
                          <img src="/assets/twitter.svg" className="w-[20px] h-[20px] " alt="" />
                        )}
                        {link.platform === 'facebook' && (
                          <img src="/assets/faceb.svg" className="w-[20px] h-[20px] " alt="" />
                        )}
                        {link.platform === 'instagram' && (
                          <img src="/assets/insta.svg" className="w-[20px] h-[20px] " alt="" />
                        )}
                        {link.platform === 'linkedin' && (
                          <img src="/assets/in.svg" className="w-[20px] h-[20px] " alt="" />
                        )}
                      </div>
                    </button>
                  </a>
                </li>
              ))}
            </ul>
            <p class="DESC text-base font-normal text-center text-slate-600  ">
              <div>
                © 2023 Sparkling Clean. Proudly woman-owned and serving Tampa &amp; St. Petersburg with excellence.
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
