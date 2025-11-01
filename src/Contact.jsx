import React from 'react';
import { useState } from 'react';  // Add { useState } here
import {MdEmail, MdPhone, MdShare, MdArrowForward} from 'react-icons/md';
import {FaWhatsapp} from 'react-icons/fa';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

  // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden mt-16" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d161b] tracking-light text-[32px] font-bold leading-tight">Contact Us</p>
                <p className="text-[#4c7b9a] text-sm font-normal leading-normal">
                  We're here to help you navigate your career journey. Reach out to us with any questions or feedback.
                </p>
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#0d161b] text-base font-medium leading-normal pb-2">Your Name</p>
                    <input
                        name="name"
                        placeholder="Enter your name"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d161b] focus:outline-0 focus:ring-0 border border-[#cfdee7] bg-slate-50 focus:border-[#3f4346] h-14 placeholder:text-[#4c7b9a] p-[15px] text-base font-normal leading-normal"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#0d161b] text-base font-medium leading-normal pb-2">Your Email</p>
                    <input
                        name="email"
                        placeholder="Enter your email"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d161b] focus:outline-0 focus:ring-0 border border-[#cfdee7] bg-slate-50 focus:border-[#cfdee7] h-14 placeholder:text-[#4c7b9a] p-[15px] text-base font-normal leading-normal"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d161b] text-base font-medium leading-normal pb-2">Your Message</p>
                <textarea
                  placeholder="Enter your message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d161b] focus:outline-0 focus:ring-0 border border-[#cfdee7] bg-slate-50 focus:border-[#cfdee7] min-h-36 placeholder:text-[#4c7b9a] p-[15px] text-base font-normal leading-normal" ></textarea>
              </label>
            </div>

            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#118fe3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]" >
                <span className="truncate">Send Message</span>
              </button>
            </div>
            
            <h2 className="text-[#0d161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Other Ways to Connect</h2>
            
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0d161b] flex items-center justify-center rounded-lg bg-[#e7eef3] shrink-0 size-12">
                    <MdEmail size={24} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-[#0d161b] text-base font-medium leading-normal line-clamp-1">Email</p>
                    <p className="text-[#4c7b9a] text-sm font-normal leading-normal line-clamp-2">info@mypath.lk</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0d161b] flex items-center justify-center rounded-lg bg-[#e7eef3] shrink-0 size-12">
                    <MdPhone size={24} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-[#0d161b] text-base font-medium leading-normal line-clamp-1">Phone</p>
                    <p className="text-[#4c7b9a] text-sm font-normal leading-normal line-clamp-2">+94 77 123 4567</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0d161b] flex items-center justify-center rounded-lg bg-[#e7eef3] shrink-0 size-12">
                    <FaWhatsapp size={24} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-[#0d161b] text-base font-medium leading-normal line-clamp-1">WhatsApp</p>
                    <p className="text-[#4c7b9a] text-sm font-normal leading-normal line-clamp-2">+94 71 987 6543</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                    <div className="text-[#0d161b] flex items-center justify-center rounded-lg bg-[#e7eef3] shrink-0 size-12">
                        <MdShare size={24} />
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-[#0d161b] text-base font-medium leading-normal line-clamp-1">Social Media</p>
                        <p className="text-[#4c7b9a] text-sm font-normal leading-normal line-clamp-2">Follow us on social media for updates and career tips.</p>
                    </div>
                </div>

                <div className="shrink-0">
                    <div className="text-[#0d161b] flex size-7 items-center justify-center">
                        <MdArrowForward size={24} />
                    </div>
                </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;