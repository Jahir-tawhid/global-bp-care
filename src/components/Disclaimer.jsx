export default function Disclaimer() {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center">
        <span className="text-xl mr-2">⚠️</span>
        <h2 className="text-red-800 font-bold text-sm md:text-base">
          Important Medical Disclaimer
        </h2>
      </div>
      <p className="text-red-700 text-xs md:text-sm mt-1">
        This app is for informational purposes only. Always consult a registered
        physician for medical advice.
      </p>
    </div>
  );
}
