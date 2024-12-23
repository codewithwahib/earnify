import { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    address: "",
    password: "",
    confirmPassword: "",
    accountNumber: "",
    accountType: "",
  });

  const [errors, setErrors] = useState<string[]>([]); // To track validation errors
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const validationErrors: string[] = [];

    if (!formData.name) validationErrors.push("Name is required.");
    if (!formData.gender) validationErrors.push("Gender is required.");
    if (!formData.country) validationErrors.push("Country is required.");
    if (!formData.address) validationErrors.push("Address is required.");
    if (!formData.password) validationErrors.push("Password is required.");
    if (formData.password !== formData.confirmPassword) {
      validationErrors.push("Passwords do not match.");
    }
    if (!formData.accountNumber) {
      validationErrors.push("Account number is required.");
    }
    if (!formData.accountType) {
      validationErrors.push("Account type is required.");
    }

    setErrors(validationErrors);

    return validationErrors.length === 0; // Return true if no errors
  };

  const handleSignUp = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
      router.push("/agreement"); // Navigate to the agreement page
    } else {
      console.log("Validation failed:", errors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
          Account
        </h2>
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Sign Up
        </h2>

        {errors.length > 0 && (
          <div className="mb-4 bg-red-100 text-black p-3 rounded">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block mb-1 font-medium text-black"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block mb-1 font-medium text-black"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-1 font-medium text-black"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 font-medium text-black"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="accountNumber"
              className="block mb-1 font-medium text-black"
            >
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="accountType"
              className="block mb-1 font-medium text-black"
            >
              Select Account Type
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Account Type
              </option>
              <option value="savings">Easypaisa</option>
              <option value="current">Jazzcash</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
