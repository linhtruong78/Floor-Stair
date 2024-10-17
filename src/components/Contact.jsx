import React, { useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMail, IoLocation  } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Banner from "./Banner";
const Contact = ({showBanner}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Linh",
          from_email: form.email,
          to_email: "linhtr.contact@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <>
    <div>
      {showBanner && <Banner title="Contact Us" />}
    </div>
    <div className=" flex flex-col lg:flex-row justify-center py-12 px-4 lg:mx-[200px]">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full text-left mb-10 lg:mb-0 pr-5 pt-5">
        <h2 className="text-4xl font-bold mb-4">
          GET IN TOUCH FOR A FREE ESTIMATE TODAY
        </h2>
        <p className="text-n-2/70 mb-6">
          We're ready when you are. Give us a call or text and we'll arrange a time for <b>4H
          Flooring and Stairs</b> to visit your home and provide you a free quote.
        </p>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-n-3 text-n-2 p-4 rounded-full mr-4">
              <FaPhone/>
            </div>
            <div>
              <p className="text-lg font-semibold">Call for Quote</p>
              <a href="tel:+14378764552" className="text-n-4">Click to Call</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-n-3 text-n-2 p-4 rounded-full mr-4">
              <IoMail/>
            </div>
            <div>
              <p className="text-lg font-semibold">Text for Quote</p>
              <a href="sms:+14378764552" className="text-n-4">Click to Text</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-n-3 text-n-2 p-4 rounded-full mr-4">
              <IoLocation/>
            </div>
            <div>
              <p className="text-lg font-semibold">Location</p>
              <p className="text-n-4">Toronto and GTA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full bg-n-6 text-n-2 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-n-2 mb-6">Send us a Message</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Hi...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
              style={{ resize: 'none' }}
            />
          </label>

          <button
            type='submit'
            className='bg-n-5 py-3 px-8 rounded-xl outline-none w-full font-bold shadow-lg'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
