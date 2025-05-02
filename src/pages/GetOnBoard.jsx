import React, { useContext, useState } from "react";
import homeIcon from "../assets/home_icon.png";
import ReCAPTCHA from "react-google-recaptcha";
import { OneCloudContext } from "../store/context";
import medicalnew from "../assets/medicalnew.png";
import businessnew from "../assets/businessnew.png";

const RECAPTCHA_SITE_KEY = "6LeSXJYqAAAAAHc5DiEhSnHGcKtWxiIWoS6kS_cO";

export default function GetOnBoard() {
  const { getOnBoard } = useContext(OneCloudContext);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    agentStatus: "Enabled",
  });

  const redirectMap = {
    India: {
      Medical: 'https://www.onecloudstorage.com/medicaldatavault/verifysendmail.php',
      Business: 'https://www.onecloudstorage.com/verifysendmail.php',
    },
    US: {
      Medical: 'https://us.onecloudstorage.com/medicaldatavault/verifysendmail.php',
      Business: 'https://us.onecloudstorage.com/verifysendmail.php',
    },
    UK: {
      Medical: 'https://uk.onecloudstorage.com/medicaldatavault/verifysendmail.php',
      Business: 'https://uk.onecloudstorage.com/verifysendmail.php',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeSelect = (type) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const handleCaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const redirectUrl = redirectMap[formData.country]?.[formData.projectType];
    if (!redirectUrl) {
      alert("Please select valid Country and Project Type.");
      return;
    }
    setLoading(true);
    try {
      await getOnBoard(redirectUrl, formData.email, formData.phone, formData.name, recaptchaToken);
    } catch (error) {
      console.error("Error during getOnBoard:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center h-full p-8 rounded-xl">
          <img src={homeIcon} alt="Cloud Icon" className="rounded-full mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Get <span className="text-green-600 font-bold">On Board</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3 text-center max-w-xs">
            Start protecting your cloud vaults with ransomware defense.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Setup Your Agent
          </h3>

          <div className="space-y-4">
            {/* Input Fields */}
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            ))}

            {/* Country Selector */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer"
            >
              <option value="">Select Your Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="India">India</option>
            </select>

            {/* Vault Selector */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {[{ type: "Medical", img: medicalnew }, { type: "Business", img: businessnew }].map(({ type, img }) => (
                <div
                  key={type}
                  onClick={() => handleProjectTypeSelect(type)}
                  className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${formData.projectType === type
                    ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                    : "border-gray-300"
                    }`}
                >
                  <img src={img} alt={`${type} Vault`} className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>
            {/* <p>Get Ransomware monitoring agent</p> */}
            {/* Agent Status Buttons */}
            {/* <div className="flex justify-center gap-4">
              {["Enabled", "Disabled"].map((status) => (
                <button
                  key={status}
                  type="button"
                  className={`px-6 py-2 rounded-md font-semibold transition ${formData.agentStatus === status
                    ? status === "Enabled"
                      ? "bg-green-600 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-opacity-80"
                    }`}
                  onClick={() => setFormData(prev => ({ ...prev, agentStatus: status }))}
                >
                  {status} Agent
                </button>
              ))}
            </div> */}

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
