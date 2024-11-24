"use client";
import { useDataContext } from "@/context/DataProvider";

const ShowInRaw = () => {
  const { data } = useDataContext();

  return (
    <div className="p-5 grid grid-cols-2 gap-3">
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ShowInRaw;

const Card = ({ title, subTitle }) => {
  return (
    <div className="p-3 flex flex-col gap-y-2 bg-slate-100 border border-slate-300 shadow rounded-lg text-sm">
      <h1 className="text-slate-500 font-thin">{title.slice(0, 100)}</h1>
      <h2 className="text-slate-700 font-bold">{subTitle.slice(0, 100)}</h2>
    </div>
  );
};
