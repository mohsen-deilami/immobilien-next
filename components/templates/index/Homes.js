import React from "react";
import Home from "@/components/madules/Home";
import db from "../../../data/db.json";
function Homes() {
  return (
    <div className="homes">
      {db.homes.slice(0, 6).map((home) => (
        <Home key={home.id} {...home} />
      ))}
    </div>
  );
}

export default Homes;
