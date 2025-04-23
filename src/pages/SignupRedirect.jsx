import { useState } from 'react';

const SignupRedirect = () => {
  const [country, setCountry] = useState('');
  const [vaultType, setVaultType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const redirectMap = {
      India: {
        Medical: 'https://www.onecloudstorage.com/medicaldatavault/getonboard.php',
        Business: 'https://www.onecloudstorage.com/signup_emailsend.php',
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

    if (!country || !vaultType) {
      alert('Please select both fields.');
      return;
    }

    const vaultKey = vaultType.includes('Medical') ? 'Medical' : 'Business';
    const redirectUrl = redirectMap[country]?.[vaultKey];

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      alert('Invalid selection.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6f0] px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          Choose Your Signup Path
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Choose Country --</option>
              <option value="India">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Vault Type
            </label>
            <select
              value={vaultType}
              onChange={(e) => setVaultType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Choose Vault --</option>
              <option value="Medical Data Vault">Medical Data Vault</option>
              <option value="Business Data Vault">Business Data Vault</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupRedirect;
