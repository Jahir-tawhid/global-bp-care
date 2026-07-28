import { useState } from "react";

export default function BPForm({ onCheck }) {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCheck(systolic, diastolic);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Systolic Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Systolic:
          </label>
          <input
            type="number"
            placeholder="e.g. 120"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Diastolic Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Diastolic:
          </label>
          <input
            type="number"
            placeholder="e.g. 80"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Check Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 shadow-md cursor-pointer"
      >
        Check BP
      </button>
    </form>
  );
}
