import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
return (
        <footer className="flex justify-center bg-[#003c67] ">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-4 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-4 @[480px]:flex-row @[480px]:justify-around">
                <a1 className="text-[#ffffff] text-base font-normal leading-normal" href="/about">About Us</a1>
                <a1 className="text-[#ffffff] text-base font-normal leading-normal" href="#">Contact</a1>
                <a1 className="text-[#ffffff] text-base font-normal leading-normal" href="#">Privacy Policy</a1>
                <a1 className="text-[#ffffff] text-base font-normal leading-normal" href="#">Terms of Service</a1>
              </div>
              <div className="flex gap-6 justify-center">
                    <a href="#">
                        <div className="text-white">
                            <Facebook size={24} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-white">
                            <Twitter size={24} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-white">
                            <Instagram size={24} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-white">
                            <Linkedin size={24} />
                        </div>
                    </a>
                </div>
              <p className="text-[#edf7ff] text-base font-normal leading-normal">@2025 MyPath. All rights reserved.</p>
            </footer>
          </div>
        </footer>
  );
};

export default Footer;