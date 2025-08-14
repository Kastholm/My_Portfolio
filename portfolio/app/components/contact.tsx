'use client';
import Image from "next/image";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative mt-16">
      <h1 className="text-center text-3xl font-semibold text-black dark:text-white">Kontakt mig</h1>
      <p className="text-center mt-1 text-neutral-600 dark:text-neutral-400">Send mig en email</p>
      
      {/* Email Image */}
      <div className="flex justify-center items-center">
        <Image 
          onClick={toggleDrawer} 
          src="https://i.ibb.co/ZVry2wG/email.png" 
          alt="email" 
          width={130} 
          height={130} 
          className="cursor-pointer" 
        />
      </div>
      {/* Blur */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 "
          onClick={toggleDrawer}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transform ${
          isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-500 ease-in-out bg-white dark:bg-black rounded-t-3xl shadow-2xl border-t border-gray-200 dark:border-neutral-800`}
      >
        {/* Form */}
        <section className="w-full p-6">
          <div className="max-w-xl mx-auto">
            <form
              className="space-y-6 p-4 sm:p-8 rounded-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600 dark:text-zinc-400 mb-1">Navn</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-900 text-black dark:text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Dit Navn"
                    required
                  />
                </div> 
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-600 dark:text-zinc-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-900 text-black dark:text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Din Email"
                    required
                  />
                </div>
              </div>
              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-600 dark:text-zinc-400 mb-1">Besked</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-900 text-black dark:text-white placeholder-gray-500 focus:outline-none h-32"
                  placeholder="Din Besked"
                  required
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-black rounded-lg font-semibold focus:outline-none transition-colors duration-300"
              >
                Send Besked
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;