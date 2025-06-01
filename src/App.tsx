import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import GazaMapWithCharts from "./components/Graphs/GazaMapWithCharts";
import MapSection from "./components/MapSection/MapSection";

function App() {
  return (
    <>
      <Hero />
      <MapSection />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl text-center font-bold mb-10 text-[#0e8dda]">
          سكان غزة كافة – نحو 2.1 مليون نسمة – يواجهون مستويات حادة من انعدام
          الأمن الغذائي
        </h1>
        <GazaMapWithCharts />
      </div>
    </>
  );
}

export default App;
