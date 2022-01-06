import React, { useState } from "react";
import Calendar from "react-calendar";
import Popped from "./popup-box";

export function CalendarJS() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={console.log("You clicked on: " + value)}
      />
      <Popped onClick={open} />
    </div>
  );
}
