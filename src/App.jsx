import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BloodPressurePage from "./pages/BloodPressurePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Blood Pressure App */}
        <Route path="/" element={<BloodPressurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
