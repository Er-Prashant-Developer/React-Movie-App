import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#1F1E24] text-white overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 sm:px-8">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-2xl cursor-pointer hover:text-[#6556CD]"
        />
        <h1 className="text-lg sm:text-xl font-semibold text-zinc-300">
          Contact
        </h1>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-10 lg:px-20 mt-10 max-w-5xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B983FF]">
          Contact Us
        </h1>

        {/* Description */}
        <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          We&apos;d love to hear from you! Whether it&apos;s feedback,
          suggestions, or just a hello 👋 — feel free to connect with me anytime.
        </p>

        {/* Contact Details */}
        <div className="mt-10 flex flex-col gap-6 text-sm sm:text-base">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <i className="ri-phone-fill text-2xl text-[#B983FF]" />
            <a href="tel:+919868565968" className="hover:underline">
              +91 9868565968
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <i className="ri-mail-fill text-2xl text-[#B983FF]" />
            <a
              href="mailto:vprashant165@gmail.com"
              className="hover:underline break-all"
            >
              vprashant165@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <i className="ri-linkedin-box-fill text-2xl text-[#B983FF]" />
            <a
              href="linkedin.com/in/prashant-02b3b5228"
              target="_blank"
              rel="noreferrer"
              className="hover:underline break-all"
            >
              linkedin.com/in/prashant-02b3b5228
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <i className="ri-github-fill text-2xl text-[#B983FF]" />
            <a
              href="https://github.com/Er-Prashant-Developer"
              target="_blank"
              rel="noreferrer"
              className="hover:underline break-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
