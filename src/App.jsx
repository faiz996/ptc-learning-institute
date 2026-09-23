import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import WhyFamilies from "./components/WhyFamilies/WhyFamilies";
import LearningPrograms from "./components/LearningPrograms/LearningPrograms";
import DailyAdventure from "./components/DailyAdventure/DailyAdventure";
import StatsSection from "./components/StatsSection/StatsSection";
import ParentTestimonials from "./components/ParentTestimonials/ParentTestimonials";
import AdmissionCTA from "./components/AdmissionCTA/AdmissionCTA";
import LocationSection from "./components/LocationSection/LocationSection";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <WhyFamilies />
      <LearningPrograms />
      <DailyAdventure />
      <StatsSection />
      <ParentTestimonials />
      <AdmissionCTA />
      <LocationSection />
      <Footer />
    </>
  );
}

function SimplePage({ title }) {
  return (
    <main className="simple-page">
      <h1>{title}</h1>
    </main>
  );
}

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter basename="/ptc-learning-institute">
=======
    <BrowserRouter>
>>>>>>> feature/initial-project-setup

      <TopBar />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<SimplePage title="About Us" />}
        />

        <Route
          path="/programs"
          element={<SimplePage title="Programs" />}
        />

        <Route
          path="/admissions"
          element={<SimplePage title="Admissions" />}
        />

        <Route
          path="/gallery"
          element={<SimplePage title="Gallery" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;