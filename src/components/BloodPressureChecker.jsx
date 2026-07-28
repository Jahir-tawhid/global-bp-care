import { useState } from "react";

const BloodPressureChecker = () => {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState(null);

  const calculateBP = () => {
    const sys = Number(systolic);
    const dia = Number(diastolic);

    if (!sys || !dia) {
      alert("Please enter both Systolic and Diastolic values!");
      return;
    }

    // --- Logic & Color Assignment ---

    // 1. High BP Stage 2 (High BP)
    if (sys >= 140 || dia >= 90) {
      setResult({
        status: "High Blood Pressure (Stage 2)",
        range: "Systolic >= 140 OR Diastolic >= 90 mmHg",
        color: "text-red-700 bg-red-100 border-red-300",
      });
    }
    // 2. High BP Stage 1
    else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      setResult({
        status: "High Blood Pressure (Stage 1)",
        range: "Systolic 130–139 OR Diastolic 80–89 mmHg",
        color: "text-orange-700 bg-orange-100 border-orange-300",
      });
    }
    // 3. Elevated (একটু বেশি)
    else if (sys >= 120 && sys <= 129 && dia < 80) {
      setResult({
        status: "Elevated (একটু বেশি)",
        range: "Systolic 120–129 AND Diastolic < 80 mmHg",
        color: "text-yellow-700 bg-yellow-100 border-yellow-300",
      });
    }
    // 4. Low BP (লো প্রেসার)
    else if (sys < 90 || dia < 60) {
      setResult({
        status: "Low BP (লো প্রেসার)",
        range: "Systolic < 90 OR Diastolic < 60 mmHg",
        color: "text-blue-700 bg-blue-100 border-blue-300",
      });
    }
    // 5. Normal (স্বাভাবিক)
    else {
      setResult({
        status: "Normal (স্বাভাবিক)",
        range: "Systolic 90–119 AND Diastolic 60–79 mmHg",
        color: "text-green-700 bg-green-100 border-green-300",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
        BP Result Checker
      </h2>

      {/* Input Fields */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Systolic (Upper Value)
          </label>
          <input
            type="number"
            placeholder="e.g. 120"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-green-600"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Diastolic (Lower Value)
          </label>
          <input
            type="number"
            placeholder="e.g. 80"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-green-600"
          />
        </div>

        <button
          onClick={calculateBP}
          className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition active:scale-95 shadow-md mt-2"
        >
          Check Result
        </button>
      </div>

      {/* Dynamic Result Box */}
      {result && (
        <div
          className={`mt-6 p-4 rounded-xl border text-center transition-all ${result.color}`}
        >
          <h3 className="text-xl font-bold">{result.status}</h3>

          {/* User Input Values Shown Below */}
          <p className="text-base font-semibold mt-2">
            Your Value: {systolic}/{diastolic} mmHg
          </p>

          <p className="text-xs mt-1 opacity-90 italic">
            Range: {result.range}
          </p>
        </div>
      )}
    </div>
  );
};

export default BloodPressureChecker;
