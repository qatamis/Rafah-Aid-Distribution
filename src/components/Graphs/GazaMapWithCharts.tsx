import React, { useState } from "react";
import { chartData, chartData as originalData } from "./ChartData";
import DoughnutChart from "./DoughnutChart";

// Function to scale SVG pathData
function scalePathData(path: string, scale: number): string {
  return path.replace(/([MLCQZ])([^MLCQZ]*)/gi, (_, cmd, coords) => {
    if (cmd.toUpperCase() === "Z") return cmd;

    const parts = coords.match(/-?\d+(\.\d+)?/g);
    if (!parts) return cmd;

    const scaled = parts
      .map((n: string) => (parseFloat(n) * scale).toFixed(2))
      .join(",");

    return `${cmd}${scaled}`;
  });
}

const GazaMapWithCharts = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    content: string;
    x: number;
    y: number;
    visible: boolean;
  }>({ content: "", x: 0, y: 0, visible: false });

  const handleSelect = (id: string) => {
    setSelectedRegion((prev) => (prev === id ? null : id));
  };

  const selectedChart = chartData.find((c) => c.id === selectedRegion);

  return (
    <div className="relative flex flex-col gap-6 items-center md:flex-row md:items-start rtl">
      <div className="w-full lg:h-[715px] bg-white border border-gray-300 rounded-md shadow p-6 text-right leading-loose space-y-4">
        <p className="text-gray-800 font-JazBold">
          أظهرت بيانات جديدة أن كامل سكان قطاع غزة يعانون من مستويات خطيرة من
          انعدام الأمن الغذائي، في ظل استمرار الحصار والعدوان الإسرائيلي. وبحسب
          التقرير، فإن 93% من السكان الخاضعين للتحليل يعيشون في المرحلة الثالثة
          من تصنيف الأمن الغذائي المتكامل (IPC) أو أعلى.
        </p>

        <div className="bg-gray-50 border-r-4 border-[#0e8dda] p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            تصنيف مراحل انعدام الأمن الغذائي:
          </h2>
          <ul className="flex flex-col w-full list-disc list-inside space-y-2 text-gray-700">
            <li className="list-none">
              <div className="flex items-start">
                <img
                  className="w-[25px] h-[25px] object-cover rounded-full ml-2 mt-1"
                  src="chleg1.png"
                  alt=""
                />
                <strong>المرحلة الثانية – الضغط</strong> الأسر تملك ما يكفي من
                الطعام بالكاد، لكنها تواجه صعوبة في تلبية الاحتياجات الأساسية
                الأخرى.
              </div>
            </li>
            <li className="list-none">
              <div className="flex items-start">
                <img
                  className="w-[25px] h-[25px] object-cover rounded-full ml-2 mt-1"
                  src="chleg2.png"
                  alt=""
                />
                <strong>المرحلة الثالثة – الأزمة</strong> الأسر تواجه نقصًا
                حادًا في الغذاء يؤثر سلبًا على صحتها وسبل عيشها.
              </div>
            </li>
            <li className="list-none">
              <div className="flex items-start">
                <img
                  className="w-[25px] h-[25px] object-cover rounded-full ml-2 mt-1"
                  src="chleg3.png"
                  alt=""
                />
                <strong>المرحلة الرابعة – الطوارئ</strong> الأسر تعاني من نقص
                حاد في الغذاء، وسوء تغذية مرتفع، مع مخاطر الوفاة، ما يتطلب
                تدخلًا عاجلًا.
              </div>
            </li>
            <li className="list-none">
              <div className="flex items-start">
                <img
                  className="w-[25px] h-[25px] object-cover rounded-full ml-2 mt-1"
                  src="chleg4.png"
                  alt=""
                />
                <strong>المرحلة الخامسة – الكارثة</strong> الأسر تعيش ظروفًا
                كارثية، مع نقص غذاء حاد ومجاعات تؤدي إلى معدلات وفاة مرتفعة.
                إنقاذ حياتهم يتطلب تحركًا فوريًا.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* SVG Map */}
      <div className="w-full md:w-1/2 border border-gray-300 rounded-md bg-white shadow">
        <div className="w-full lg:h-[715px] md:h-[715px] h-[715px]">
          {/* <svg
            viewBox="0 0 1000 4000"
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {chartData.map((region) => (
              <path
                key={region.id}
                d={region.pathData}
                onClick={() => handleSelect(region.id)}
                onMouseEnter={() =>
                  setTooltip({
                    content: region.title,
                    x: 0,
                    y: 0,
                    visible: true,
                  })
                }
                onMouseMove={(e) =>
                  setTooltip((prev) => ({
                    ...prev,
                    x: e.clientX,
                    y: e.clientY,
                  }))
                }
                onMouseLeave={() =>
                  setTooltip((prev) => ({
                    ...prev,
                    visible: false,
                  }))
                }
                className={`w-full max-w-4xl mx-auto h-auto block transition-all duration-300 stroke-gray-700 stroke-[1.5] cursor-pointer ${
                  selectedRegion === region.id
                    ? "fill-blue-500"
                    : "fill-gray-200 hover:fill-blue-300"
                }`}
              />
            ))}
          </svg> */}
          <div className="flex flex-col items-center">
            {chartData.map((region) => (
              <img
                key={region.id}
                src={region.imgSrc}
                alt="North Gaza"
                className={`transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 ${region.class}`}
                onClick={() => handleSelect(region.id)}
                onMouseEnter={() =>
                  setTooltip({
                    content: region.title,
                    x: 0,
                    y: 0,
                    visible: true,
                  })
                }
                onMouseMove={(e) =>
                  setTooltip((prev) => ({
                    ...prev,
                    x: e.clientX,
                    y: e.clientY,
                  }))
                }
                onMouseLeave={() =>
                  setTooltip((prev) => ({
                    ...prev,
                    visible: false,
                  }))
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Doughnut chart */}
      <div
        className={`w-full md:w-1/3 lg:h-[715px] bg-white border rounded-md shadow p-6 transition-all duration-500 ${
          selectedChart
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {selectedChart && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#0e8dda]">
              {selectedChart.title}
            </h2>
            <DoughnutChart chart={selectedChart} />
          </>
        )}
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed z-50 px-3 py-1 bg-black text-white text-sm rounded pointer-events-none shadow"
          style={{ top: tooltip.y + 12, left: tooltip.x + 12 }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default GazaMapWithCharts;
