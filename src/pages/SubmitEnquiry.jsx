import { useState } from "react";
import shieldbg from "../assets/shieldbg.png"; // same as Signin image

export default function SubmitEnquiry() {
  const [formData, setFormData] = useState({
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image and Heading */}
        <div className="text-center md:text-left">
          <img
            src={shieldbg}
            alt="shieldIcon"
            className="mx-auto md:mx-0 w-full max-w-md"
          />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Neridio <span className="text-green-600 italic">Cross Cloud</span> Data Gateway
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Neridio cross-cloud gateway is the implementation of our market pioneering invention – Multi-cloud storage virtualization – realizing cloud-level RAID, making data unbreachable as unintelligible pieces are spread across multiple cloud providers. This solution makes the data invisible and unavailable for any hacker to breach, as there is no single point of failure!
          </p>
        </div>

        {/* Enquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Submit Your Enquiry
          </h3>

          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Enter 10-digit Mobile Number"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
