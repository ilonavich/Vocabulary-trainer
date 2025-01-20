import React from "react";

const ContactUs = () => {
  return (
    <div>
      <form className="mt-4">
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
            type="email"
            placeholder="Enter your email"
          />

          <button
            className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
