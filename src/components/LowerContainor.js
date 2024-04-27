import React from "react";

export default function LowerContainor({ day, month, year }) {
  return (
    <div className="containor-lower">
      <div>
        <span>{!isNaN(year) ? year + " " : "--"}</span>
        <span>year</span>
      </div>
      <div>
        <span>{!isNaN(month) ? month + " " : "--"}</span>
        <span>month</span>
      </div>
      <div>
        <span>{!isNaN(day) ? day + " " : "--"}</span>
        <span>day</span>
      </div>
    </div>
  );
}
