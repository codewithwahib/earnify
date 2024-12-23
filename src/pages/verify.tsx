import { useState } from "react";
import { useRouter } from "next/router";

const Verify = () => {
  const [trxId, setTrxId] = useState("");
  const [senderAccount, setSenderAccount] = useState("");
  const [error, setError] = useState(""); // Error message state
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the inputs
    if (senderAccount.length < 11) {
      setError("Sender Account Number must be at least 11 digits.");
      return;
    }
    if (trxId.length < 11) {
      setError("Transaction ID must be at least 11 digits.");
      return;
    }

    // If validation passes, clear the error and proceed
    setError("");
    alert("Verification data submitted successfully.");
    router.push("/waiting");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-600">
          Verify Payment
        </h2>

        {/* Text and Payment Details */}
        <div className="text-black-700 mb-6">
          <p className="text-xl font-bold">
            <strong>Earnify Membership Card Fees</strong>
          </p>
          <p className="mt-4 text-xl font-bold">
            <strong>Total Amount You Will Pay in PKR:</strong>
          </p>
          <p className="text-2xl font-extrabold text-blue-600">RS : 150</p>
          <p className="mt-4 text-lg font-bold">
            <strong>
              You will send this amount on the given EasyPaisa account number:
            </strong>
          </p>
          <p className="text-lg font-semibold">
            <strong>EasyPaisa Account</strong>
          </p>
          <p className="text-lg font-semibold">
            <strong>ACC NO:</strong> 03376565691
          </p>
          <p className="text-lg font-semibold">
            <strong>ACC NAME:</strong> MUHAMMAD JAFFER
          </p>
        </div>

        {/* Input Form for Verification */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-700 p-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block mb-1 font-medium text-lg font-semibold">
              Sender Account Number
            </label>
            <input
              type="text"
              value={senderAccount}
              onChange={(e) => setSenderAccount(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-lg font-semibold">
              Transaction ID
            </label>
            <input
              type="text"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
