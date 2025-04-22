// import React, { useEffect, useState } from "react";
// import shieldbg from "../assets/shieldbg.png";
// import { Link, useLocation } from "react-router-dom";

// export default function Signin() {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const countryFromURL = searchParams.get("country");
  
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     country: countryFromURL,
//     projectType: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Image and Heading */}
//         <div className="text-center md:text-left">
//           <img
//             src={shieldbg}
//             alt="shieldIcon"
//             className="mx-auto md:mx-0 mb-6 w-full max-w-md"
//           />
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
//             Log into your <span className="text-green-600 italic">Security</span> Dashboard
//           </h2>
//         </div>

//         {/* Signin Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
//         >
//           <h3 className="text-3xl font-bold text-gray-800 text-center">
//             Sign in to OneCloudStorage
//           </h3>

//           <div className="space-y-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

            

//             <select
//               name="projectType"
//               className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow"
//               value={formData.projectType}
//               onChange={handleChange}
//             >
//               <option value="">Select Project Type</option>
//               <option value="Medical">Medical Data Vault</option>
//               <option value="Business">Business Data Vault</option>
//             </select>
//             <select
//               name="country"
//               className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 focus:shadow disabled:cursor-not-allowed disabled:bg-gray-200"
//               value={formData.country}
//               onChange={handleChange}
//               disabled={!!formData.country}
//             >
//               <option value="">Select Your Country</option>
//               <option value="UK">United Kingdom</option>
//               <option value="US">United States</option>
//               <option value="India">India</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition"
//           >
//             Submit
//           </button>

//           <div className="text-center text-sm text-gray-600">
//             <p>
//               Don’t have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="text-green-600 hover:text-green-700 font-medium"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }


import React, { useContext, useState } from "react";
import shieldbg from "../assets/shieldbg.png";
import { Link, useLocation } from "react-router-dom";
import { OneCloudContext } from "../store/context";

export default function Signin() {
  const { login } = useContext(OneCloudContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const countryFromURL = searchParams.get("country");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: countryFromURL || "",
    projectType: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(formData);
    setLoading(false);

    if (!result.success) {
      setError(result.message);
    } else {
      // optionally navigate or show success
      alert("Login Successful!");
    }
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <img
            src={shieldbg}
            alt="shieldIcon"
            className="mx-auto md:mx-0 mb-6 w-full max-w-md"
          />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            Log into your <span className="text-green-600 italic">Security</span> Dashboard
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Sign in to OneCloudStorage
          </h3>

          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              name="projectType"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="">Select Project Type</option>
              <option value="Medical">Medical Data Vault</option>
              <option value="Business">Business Data Vault</option>
            </select>
            <select
              name="country"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg"
              value={formData.country}
              onChange={handleChange}
              disabled={!!formData.country}
            >
              <option value="">Select Your Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="India">India</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition"
          >
            {loading ? "Logging in..." : "Submit"}
          </button>

          <div className="text-center text-sm text-gray-600">
            <p>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-green-600 hover:text-green-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

