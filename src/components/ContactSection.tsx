import React from "react";

const ContactSection: React.FC = () => {
  return (
    <>
      <div id="contact" className="dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-primary font-bold">CONTACT</h1>
            <h1 className="text-3xl dark:text-white">Get In Touch</h1>
            <p className="w-1/2 text-center text-gray-400">
              Interested in working together? Contact me to start your wellness
              journey.
            </p>
          </div>
          <form className="flex flex-col items-center w-1/2 mx-auto py-10">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-200 rounded-md w-full p-3 mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-200 rounded-md w-full p-3 mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-200 rounded-md w-full p-3 mb-4 h-40"
            />
            <button className="bg-primary text-white font-semibold rounded-md p-3 w-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
