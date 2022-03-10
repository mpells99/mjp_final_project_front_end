import React, { Component, useState } from "react";
import Calendar from "react-calendar";
import PopPop from "react-poppop";
import CalendarBackEnd from "./calendar-backEnd";
import dateFormat from "dateformat";
import Popped from "./popped";

export function CalendarJS() {
  const [value, onChange] = useState(new Date());
  const [showPop, setShowPop] = useState(false);
  const [calBtn, setcalBtn] = useState("");
  const [poppedClick, setPoppedClick] = useState(true);
  const blockedDate = new Date();

  // const [disabler, setDisabler] = useState([])

  function backed() {
    setPoppedClick(true);
  }

  return (
    <div>
      <Calendar
        onChange={(value) => {
          onChange(value);
          setShowPop(true);
        }}
        value={value}
        minDate={blockedDate}
      />
      <PopPop
        position="centerCenter"
        open={showPop}
        closeBtn={true}
        closeOnEsc={true}
        onClose={() => {
          setShowPop(false);
          setPoppedClick(true);
        }}
        closeOnOverlay={true}
      >
        <div className="poppop">
          <h1 className="date-to-string">{value.toDateString()}</h1>
          {poppedClick ? (
            <div className="popper-btns-wrapper">
              <input
                type="button"
                className="morning popper-btn"
                onClick={() => {
                  setPoppedClick(false);
                  setcalBtn("1");
                }}
                value="9 AM - 12 PM"
              ></input>
              <input
                type="button"
                className="afternoon popper-btn"
                onClick={() => {
                  setPoppedClick(false);
                  setcalBtn("2");
                }}
                value="1 PM - 4 PM"
              >
                {/* <CalendarBackEnd
                  FECalDateID={dateFormat(value, "yyyymmdd") + "02"}
                /> */}
              </input>
            </div>
          ) : (
            <Popped pCalDateID={calBtn} goBack={backed} />
          )}
        </div>
      </PopPop>
    </div>
  );
}
