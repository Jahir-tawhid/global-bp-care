import { globalMedicinesData } from "../data/medicinesData";

export default function MedicineList({
  selectedCountry,
  showMedicine,
  medicineIndex,
}) {
  // Return nothing if the button is not clicked yet
  if (!showMedicine) {
    return null;
  }

  // Fetch medicines for the selected country
  const rawMedicines = globalMedicinesData[selectedCountry] || [];

  // Pick a single medicine dynamically based on the passed index to show a different one each time
  const singleMedicine =
    rawMedicines.length > 0
      ? rawMedicines[medicineIndex % rawMedicines.length]
      : null;

  return (
    <div className="mt-6 space-y-4">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recommended BP Medicine ({selectedCountry})
      </h2>

      {singleMedicine ? (
        <>
          {/* 1. Main Medicine Card */}
          <div className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white space-y-2 hover:shadow-md transition-shadow">
            <p className="text-gray-800">
              <b>Brand Name:</b> {singleMedicine.brandName}
            </p>
            <p className="text-gray-800">
              <b>Company:</b> {singleMedicine.company}
            </p>
            <p className="text-gray-800">
              <b>Generic Name:</b> {singleMedicine.genericPart}
            </p>
            <p className="text-blue-700">
              <b>Dose:</b> {singleMedicine.dose}
            </p>
          </div>

          {/* 2. Separate Side Effects Card */}
          <div className="border border-red-200 bg-red-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-red-700 font-bold mb-1">Side Effects:</h3>
            <p className="text-red-600 text-sm">{singleMedicine.sideEffects}</p>
          </div>

          {/* 3. Separate Advice Card */}
          <div className="border border-green-200 bg-green-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-green-700 font-bold mb-1">Advice:</h3>
            <p className="text-green-600 text-sm">{singleMedicine.advice}</p>
          </div>
        </>
      ) : (
        <p className="text-gray-500">
          No blood pressure medicine data available for this country.
        </p>
      )}
    </div>
  );
}
