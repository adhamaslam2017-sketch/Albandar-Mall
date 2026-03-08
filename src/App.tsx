/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CafeteriaPage from "./pages/CafeteriaPage";
import ServicesOfficePage from "./pages/ServicesOfficePage";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cafeteria" element={<CafeteriaPage />} />
          <Route path="/services" element={<ServicesOfficePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
