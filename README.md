# 🩺 Global BP Care

A modern, responsive React web application designed to evaluate blood pressure readings, visually categorize BP categories with dynamic color-coded UI cards, and provide country-specific medicine recommendations tailored for **20 countries**.

---

## ✨ Features

- 📊 **Accurate BP Evaluation:** Categorizes readings into 5 stages (Low BP, Normal, Elevated, High BP Stage 1, High BP Stage 2).
- 🎨 **Dynamic UI Color Coding:** Color-coded visual indicator cards (Blue, Green, Yellow, Orange, Red) for instant feedback.
- 🌍 **Global Support (20+ Countries):** Dynamic medicine suggestion system tailored based on the user's selected country.
- 🔄 **Rotating Medicine Card:** Displays randomized relevant recommendations on every check.
- ⚠️ **Medical Disclaimer:** Integrated safety disclaimer adhering to basic medical web application guidelines.
- 📱 **Fully Responsive:** Styled with Tailwind CSS for seamless experience across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Icons & UI:** Lucide React / Tailwind UI
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

```text
src/
├── assets/          # Static media assets
├── components/      # Reusable UI components (BPForm, MedicineList, CountrySelector, etc.)
├── data/            # Local data sources (medicinesData for 20+ countries)
├── pages/           # Application views (BloodPressurePage)
├── App.jsx          # Root component & layout router
└── main.jsx         # Application entry point
```
🚀 Getting StartedFollow these steps to run the project locally on your machine:PrerequisitesMake sure you have Node.js and npm installed.InstallationClone the repository.

Navigate to the project directory:Bashcd global-bp-care

Install dependencies:Bashnpm install

Run the development server:Bashnpm run dev

```
Open http://localhost:5173 in your browser to view the application.📋 Medical BP Categories Reference:

1. Low: BP< 90OR < 60 🟦 Blue

2. Normal: 90–119AND 60–79 🟩 Green

3. Elevated: 120–129AND < 80 🟨 Yellow

4. High BP (Stage 1): 130–139OR 80–89 🟧 Orange

5. High BP (Stage 2):  140OR >= 90 🟥 Red
```

📬 Contact Me Feel free to reach out for collaborations or questions regarding the project logic:

📧 Email: https://www.jahirtawhid1988@gmail.com

🔗 LinkedIn: https://linkedin.com/in/jahirtawhid

🖥️ Live Link:  https://jahir-tawhid.github.io/global-bp-care/

📄Disclaimer:

This app is for informational purposes only. Always consult a registered  physician for medical advice.
