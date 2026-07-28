import { globalMedicinesData } from "../data/medicinesData";

export default function CountrySelector({
  selectedCountry,
  setSelectedCountry,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        Select Country:
      </label>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        {Object.keys(globalMedicinesData).map((countryName, idx) => (
          <option key={idx} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>
    </div>
  );
}
