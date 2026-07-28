import { Routes, Route } from "react-router-dom";
import BloodPressurePage from "./pages/BloodPressurePage";

function App() {
  return (
    <Routes>
      {/* Route for Blood Pressure App */}
      <Route path="/" element={<BloodPressurePage />} />
    </Routes>
  );
}

export default App;
