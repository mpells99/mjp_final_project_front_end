import React, { useState } from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";
import PopPop from "react-poppop";

export function CalendarJS() {
  const [value, onChange] = useState(new Date());
  const [showPop, setShowPop] = useState(false);
  const [booked, setBooked] = useState("available");

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={() => {
          setShowPop(true);
          console.log("You clicked on: " + value);
        }}
      />
      <PopPop
        position="centerCenter"
        open={showPop}
        closeBtn={true}
        closeOnEsc={true}
        onClose={() => setShowPop(false)}
        closeOnOverlay={true}
      >
        <h1>{value.toDateString()}</h1>
        <p>
          {booked === "available" ? booked : <div>This is booked</div>}
          {/* server info about booking */}
        </p>
      </PopPop>
    </div>
  );
}
