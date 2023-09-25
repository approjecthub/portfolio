import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex flex-col items-center"
          key={technology.name}
        >
          <img src={technology.icon} alt={technology.name} loading="lazy" />
          <p className="text-center">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
