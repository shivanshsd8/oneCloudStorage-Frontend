import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* Left Side Image & Text */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            We’d love to <span className="text-green-600 italic">hear from you</span>
          </h2>
          <p className="text-gray-600">
            Reach out with any questions, concerns, or business inquiries. Our team is here to help you secure your data.
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Phone:</strong> +44 7786 495230</p>
            <p><strong>Email:</strong> support@neridio.com</p>
            <p><strong>Address:</strong> Neridio Systems Ltd, Tramshed Tech Innovation Station,<br />Old station building, Queensway, Newport, Wales, NP20 4AX</p>
          </div>

          {/* Google Maps Iframe */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Neridio Systems Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.0269336161314!2d-3.000276843240977!3d51.58995184047372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e77d4962410f%3A0x2698fbeab82e1dc9!2sNeridio%20Systems%20Ltd.!5e0!3m2!1sen!2sin!4v1744892953643!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
              className="w-full rounded-lg"
            </iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Contact Our Team
          </h3>
          <p className="text-center">Submit your query and our team will get back to you shortly!</p>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#f5f6f0] py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="inquiryType"
            className="w-full bg-[#f5f6f0] py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            onChange={handleChange}
          >
            <option value="">Select Inquiry Type</option>
            <option value="General">General Inquiry</option>
            <option value="Technical">Technical Support</option>
            <option value="Business">Business Collaboration</option>
            <option value="Feedback">Feedback</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message / Concern"
            className="w-full bg-[#f5f6f0] py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#59A033] text-white py-3 rounded-md font-semibold hover:bg-[#4a8a2a] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
