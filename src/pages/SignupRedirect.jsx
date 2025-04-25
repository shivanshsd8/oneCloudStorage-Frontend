import React, { useState } from "react";
import homeIcon from "../assets/home_icon.png";
import { Link } from "react-router-dom";

import medicalnew from '../assets/medicalnew.png'
import businessnew from '../assets/businessnew.png'


export default function SignupRedirect() {
  const [formData, setFormData] = useState({
    country: "",
    projectType: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { country, projectType } = formData;

    if (!country || !projectType) {
      setError("Please select both project type and country.");
      return;
    }

    const redirectMap = {
      India: {
        Medical: 'https://www.onecloudstorage.com/medicaldatavault/getonboard.php',
        Business: 'https://www.onecloudstorage.com/getonboard.php',
      },
      US: {
        Medical: 'https://us.onecloudstorage.com/medicaldatavault/getonboard.php',
        Business: 'https://us.onecloudstorage.com/getonboard.php',
      },
      UK: {
        Medical: 'https://uk.onecloudstorage.com/medicaldatavault/getonboard.php',
        Business: 'https://uk.onecloudstorage.com/getonboard.php',
      },
    };

    const redirectUrl = redirectMap[country]?.[projectType];
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      setError("Invalid selection.");
    }
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col items-center justify-center h-full p-8 rounded-xl ">
          <img
            src={homeIcon}
            alt="Security Icon"
            className="rounded-full mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Start your <span className="text-green-600 font-bold">Secure Journey</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3 text-center max-w-xs">
            Select your region and vault type to begin setting up your secure data environment.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Sign Up for OneCloudStorage
          </h3>

          <div className="space-y-4">
            <select
              name="country"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg mb-5 focus:outline-none focus:ring-1 focus:ring-green-500"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="India">India</option>
            </select>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Medical Vault Card */}
              {/* Medical Vault Card */}
              <div
                onClick={() => setFormData({ ...formData, projectType: "Medical" })}
                className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${formData.projectType === "Medical"
                    ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                    : "border-gray-300"
                  }`}
              >
                <img
                  src={medicalnew}
                  alt="Medical Vault"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Business Vault Card */}
              <div
                onClick={() => setFormData({ ...formData, projectType: "Business" })}
                className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${formData.projectType === "Business"
                    ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                    : "border-gray-300"
                  }`}
              >
                <img
                  src={businessnew}
                  alt="Business Vault"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>

          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition cursor-pointer"
          >
            Proceed
          </button>
          <div className="text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <Link to={'/signin'} className="text-green-600 hover:text-green-700 font-medium cursor-pointer">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}