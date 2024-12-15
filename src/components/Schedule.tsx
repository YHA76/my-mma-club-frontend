import React from "react";

const Schedule = ({ time, activity, type }) => (
  <div className={`mma-schedule-item ${type}`}>
    {time && (
      <>
        <span className="mma-schedule-time">{time}</span>
        <span className="mma-schedule-activity">{activity}</span>
      </>
    )}
    {!time && <span className="mma-schedule-no-class">❌</span>}
  </div>
);

export default Schedule;
