"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import Squares from "./Square";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  useEffect(() => {
    emailjs.init({
      publicKey: "XKpSkLIQJS5dbqsVt",
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.sendForm(
        "service_ehz1cfr", // Replace with your service ID
        "template_twfzxnh", // Replace with your template ID
        form.current,
        "XKpSkLIQJS5dbqsVt"
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-black">
      {/* Squares Background - using exact same configuration as other sections */}
      <div className="absolute inset-0">
        {/* <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="rgb(48, 48, 48)"
          hoverFillColor="#222"
        /> */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <div className="max-w-lg mx-auto">
          <form
            ref={form}
            className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full py-3 rounded-lg transition ${
                status.submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-cyan-700 hover:bg-cyan-800 text-white"
              }`}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {status.submitted && (
              <div className="text-green-600 text-center mt-4">
                Thank you for your message! I will get back to you soon.
              </div>
            )}

            {status.error && (
              <div className="text-red-600 text-center mt-4">
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
