import { useState, useEffect } from "react";
import GazaMapInfo from "../gazamapinfo/GazaMapInfo";
import GazaMap from "../maps/GazaMap";

export default function MapSection() {
  const [showLegend, setShowLegend] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setShowLegend(true); // force show legend on desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate map after mount
  useEffect(() => {
    const timer = setTimeout(() => setMapVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir="rtl" className="text-right relative">
      {/* Title */}
      <h1 className="flex flex-col items-center justify-center mt-10 text-[#0e8dda] font-bold mb-6 text-2xl sm:text-3xl md:text-4xl text-center px-4">
        خريطة توضح الوضع الميداني:
      </h1>

      {/* Toggle for mobile */}
      {!isDesktop && (
        <div className="md:hidden flex justify-center mb-4">
          <button
            onClick={() => setShowLegend(true)}
            className="px-4 py-2 bg-[#0e8dda] text-white font-semibold rounded-lg"
          >
            عرض المعلومات
          </button>
        </div>
      )}

      {/* Overlay + Sliding Drawer on Mobile */}
      {!isDesktop && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              showLegend ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setShowLegend(false)}
          ></div>

          {/* Slide-in Drawer from Right */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[90%] bg-white z-50 transform transition-transform duration-300 ease-in-out
            ${showLegend ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-lg text-[#0e8dda]">
                مفتاح الخريطة
              </h2>
              <button
                onClick={() => setShowLegend(false)}
                className="text-gray-600 text-2xl leading-none"
                aria-label="Close Legend"
              >
                &times;
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-full">
              <GazaMapInfo />
            </div>
          </div>
        </>
      )}

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">
        {/* Sticky Legend */}
        <div className="col-span-1 sticky top-4 h-fit z-10 bg-white">
          <GazaMapInfo />
        </div>

        {/* Animated Map */}
        <div
          className={`col-span-3 transform transition-all duration-700 ease-out ${
            mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <GazaMap />
        </div>
      </div>

      {/* Mobile Gaza Map */}
      {!isDesktop && (
        <div
          className={`px-4 sm:px-6 md:px-10 transform transition-all duration-700 ease-out ${
            mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <GazaMap />
        </div>
      )}
    </div>
  );
}
