import Image from "next/image";

export const TopStats = () => {
  return (
    <div className="absolute justify-between gap-20 -top-10 -right-8 bg-white shadow-lg p-4 rounded-lg flex items-center z-10">
      <div>
        <h3 className="text-lg font-bold">Reach</h3>
        <p className="text-md font-bold text-black text-3xl">50,000</p>
        <p className="text-sm text-gray-500">
          <span className="text-cyan-500 font-bold">+10%</span> vs last month
        </p>
      </div>
      <div className="">
        <Image src="/graph.png" alt="" width={96} height={96} />
      </div>
    </div>
  );
};