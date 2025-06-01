import React from "react";

import "./Hero.css"; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <>
      {/* Image + overlay text */}
      <div className="w-full relative">
        <img
          src="https://data.maglr.com/4077/issues/60318/716746/assets/media/9c0383ca99d1511d896994ad91a87b00f568a19af7f64bebc11bac0c11ccc8ed.gif"
          alt=""
          className="w-full h-auto object-cover"
        />

        {/* Centered title over image */}
        <h1 className="text-[#0e8dda] text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
          فوضى في مركز توزيع المساعدات برفح
        </h1>
      </div>

      {/* Content section */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-4 px-4 sm:px-6 md:px-12 mt-6">
        <div className="col-span-1 xl:col-span-12 rounded-lg border border-zinc-700 bg-zinc-800 text-white p-4 sm:p-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          <p className="indent-8 mb-6">
            قُتل ما لا يقل عن ثلاثة أشخاص وأصيب العشرات بجروح، بعدما أطلقت
            القوات الإسرائيلية النار على آلاف الفلسطينيين الذين احتشدوا بشكل
            يائس في موقع جديد لتوزيع المساعدات بمدينة رفح، تديره مؤسسة غزة
            الإنسانية المدعومة من الولايات المتحدة وإسرائيل والمثيرة للجدل.
          </p>
          <p className="text-[#0e8dda] font-bold mb-3 text-base sm:text-lg">
            تحذيرات مسبقة
          </p>
          <p className="indent-8 mb-6">
            منظمات الإغاثة كانت قد حذرت لأشهر من أن إسرائيل تستخدم المجاعة كسلاح
            في حربها على غزة.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
