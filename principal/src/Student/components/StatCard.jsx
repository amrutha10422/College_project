import React from "react";

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center border">
      <div className="text-2xl mb-2">{icon}</div>

      <h2 className="text-xl font-semibold">{value}</h2>

      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
};

export default StatCard;