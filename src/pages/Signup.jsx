import React, { useState } from "react";
import shieldbg from "../assets/shieldbg.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    budget: "",
    userType: "",
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
        {/* Left Image and Heading */}
        <div className="text-center md:text-center">
          <img
            src={shieldbg}
            alt="shieldIcon"
            className="mx-auto md:mx-0 mb-6 w-full max-w-md"
          />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            One Step Away from 
            <span className="text-green-600 italic"> Security</span>
          </h2>
        </div>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Sign up on OneCloudStorage
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
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <select
              name="country"
              className="w-full bg-[#f5f6f0] py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Your Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="India">India</option>
            </select>

            <select
              name="projectType"
              className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="">Select Project Type</option>
              <option value="Medical">Medical Data Vault</option>
              <option value="Business">Business Data Vault</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition"
          >
            Submit
          </button>

          <div className="text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
