import { useState } from "react";
import Disclaimer from "../components/Disclaimer";
import CountrySelector from "../components/CountrySelector";
import BPForm from "../components/BPForm";
import MedicineList from "../components/MedicineList";
import { globalMedicinesData } from "../data/medicinesData";

export default function BloodPressurePage() {
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [result, setResult] = useState("");
  const [resultRange, setResultRange] = useState("");
  const [userValue, setUserValue] = useState(""); // Stores user's input values
  const [resultColor, setResultColor] = useState(""); // Dynamic tailwind color classes
  const [showMedicine, setShowMedicine] = useState(false);
  const [medicineIndex, setMedicineIndex] = useState(0);

  const handleCheckBP = (systolic, diastolic) => {
    const sysNum = Number(systolic);
    const diaNum = Number(diastolic);

    if (!sysNum || !diaNum) {
      alert("Please enter valid systolic and diastolic values.");
      return;
    }

    if (diaNum >= sysNum) {
      alert(
        "Diastolic pressure cannot be higher than or equal to systolic pressure!",
      );
      return;
    }

    // Store user's input value (e.g., 120/80 mmHg)
    setUserValue(`${sysNum}/${diaNum} mmHg`);

    // --- Updated BP Categories & Dynamic Colors ---

    // 1. Low BP (লো প্রেসার) - Blue
    if (sysNum < 90 || diaNum < 60) {
      setResult("Low BP (লো প্রেসার)");
      setResultRange("Systolic < 90 OR Diastolic < 60 mmHg");
      setResultColor("bg-blue-50 border-blue-200 text-blue-800");
    }
    // 2. Normal (স্বাভাবিক) - Green
    else if (sysNum >= 90 && sysNum <= 119 && diaNum >= 60 && diaNum <= 79) {
      setResult("Normal (স্বাভাবিক)");
      setResultRange("Systolic 90–119 AND Diastolic 60–79 mmHg");
      setResultColor("bg-green-50 border-green-200 text-green-800");
    }
    // 3. Elevated (একটু বেশি) - Yellow
    else if (sysNum >= 120 && sysNum <= 129 && diaNum < 80) {
      setResult("Elevated (একটু বেশি)");
      setResultRange("Systolic 120–129 AND Diastolic < 80 mmHg");
      setResultColor("bg-yellow-50 border-yellow-200 text-yellow-800");
    }
    // 4. High BP Stage 1 - Orange
    else if (
      (sysNum >= 130 && sysNum <= 139) ||
      (diaNum >= 80 && diaNum <= 89)
    ) {
      setResult("High BP - Stage 1");
      setResultRange("Systolic 130–139 OR Diastolic 80–89 mmHg");
      setResultColor("bg-orange-50 border-orange-200 text-orange-800");
    }
    // 5. High BP Stage 2 (হাই প্রেসার) - Red
    else {
      setResult("High Blood Pressure (Stage 2)");
      setResultRange("Systolic >= 140 OR Diastolic >= 90 mmHg");
      setResultColor("bg-red-50 border-red-200 text-red-800");
    }

    // Medicine Rotation Logic
    const countryMeds = globalMedicinesData[selectedCountry] || [];
    if (countryMeds.length > 0) {
      const randomIndex = Math.floor(Math.random() * countryMeds.length);
      setMedicineIndex(randomIndex);
    }

    setShowMedicine(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto w-full bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Global BP Care
        </h1>

        {/* 1. Country Selection */}
        <CountrySelector
          selectedCountry={selectedCountry}
          setSelectedCountry={(country) => {
            setSelectedCountry(country);
            setShowMedicine(false);
            setResult("");
            setResultRange("");
            setUserValue("");
          }}
        />

        {/* 2 & 3. Systolic, Diastolic & Button */}
        <BPForm onCheck={handleCheckBP} />

        {/* Dynamic Display Result Card */}
        {result && (
          <div
            className={`mt-6 p-4 border rounded-xl text-center space-y-1 transition-all ${resultColor}`}
          >
            <p className="font-bold text-xl">Result: {result}</p>
            <p className="text-sm font-semibold">Your Value: {userValue}</p>
            <p className="text-xs opacity-80">Range: {resultRange}</p>
          </div>
        )}

        <hr className="my-6 border-gray-200" />

        {/* 4. Rotating Medicine Card */}
        <MedicineList
          selectedCountry={selectedCountry}
          showMedicine={showMedicine}
          medicineIndex={medicineIndex}
        />
      </div>

      {/* 5. Medical Disclaimer Footer */}
      {showMedicine && (
        <div className="max-w-2xl mx-auto w-full">
          <Disclaimer />
        </div>
      )}
    </div>
  );
}
