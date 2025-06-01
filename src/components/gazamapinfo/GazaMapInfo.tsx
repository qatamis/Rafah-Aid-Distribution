export default function GazaMapInfo() {
  const items = [
    { img: "legend1.png", text: "نقاط توزيع المساعدات" },
    { img: "legend2.png", text: "مناطق التحذير من الإخلاء" },
    { img: "legend3.png", text: "ممر نيتساريم" },
    { img: "legend4.png", text: "المعابر الحدودية المغلقة" },
    {
      img: "legend5.png",
      text: "معابر مغلقة للبضائع ولكن مفتوحة لتبديل الطواقم منذ 19 مايو/أيار، سُمح بإدخال كميات محدودة من البضائع",
    },
  ];

  return (
    <div className="flex flex-col w-full border text-black border-zinc-500 bg-white p-4 space-y-4 rounded-lg">
      {items.map((item, index) => (
        <div key={index} className="flex items-start">
          <img
            src={item.img}
            className="w-[25px] h-[25px] object-cover rounded-full ml-2 mt-1"
            alt=""
          />
          <span className="text-base sm:text-lg">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
