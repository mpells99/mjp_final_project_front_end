import React, { Component, useState } from "react";
import Calendar from "react-calendar";
import PopPop from "react-poppop";
import dateFormat from "dateformat";
import Popped from "./popped";

export function CalendarJS() {
  const [value, onChange] = useState(new Date());
  const [showPop, setShowPop] = useState(false);
  const [calBtn, setcalBtn] = useState("");
  const [poppedClick, setPoppedClick] = useState(true);
  const blockedDate = new Date();
  const [disabledAM, setDisabledAM] = useState(false);
  const [disabledPM, setDisabledPM] = useState(false);
  const [calDateOptions, setCalDateOptions] = useState("");

  function backed() {
    setPoppedClick(true);
  }

  function AMPM(FECalDateID, boolSetter) {
    fetch(
      `https://mjs-capstone-project-backend.herokuapp.com/calendarInfo/${FECalDateID}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        const text = response.text();
        if (response.ok) {
          return text;
        } else {
          throw Error(text);
        }
      })
      .then((text) => {
        const calPars = JSON.parse(text);
        if ("booked" === calPars.booked) {
          boolSetter(true);
        } else {
          boolSetter(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <div className="calendar-note">
        <h3>Please select the date and time for your photography session.</h3>
      </div>
      <Calendar
        onChange={(value) => {
          onChange(value);
          setShowPop(true);
          AMPM(dateFormat(value, "yyyymmdd") + "01", setDisabledAM);
          AMPM(dateFormat(value, "yyyymmdd") + "02", setDisabledPM);
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
          setDisabledAM(false);
          setDisabledPM(false);
        }}
        closeOnOverlay={true}
      >
        <div className="poppop">
          <h1 className="date-to-string">{value.toDateString()}</h1>
          {poppedClick ? (
            <div>
              <h3>Please select which time slot you want for this date.</h3>

              <div className="popper-btns-wrapper">
                <input
                  type="button"
                  className="morning popper-btn"
                  onClick={() => {
                    setPoppedClick(false);
                    setcalBtn("1");
                    setCalDateOptions("9 AM - 12 PM");
                  }}
                  disabled={disabledAM}
                  value="9 AM - 12 PM"
                ></input>
                <input
                  type="button"
                  className="afternoon popper-btn"
                  onClick={() => {
                    setPoppedClick(false);
                    setcalBtn("2");
                    setCalDateOptions("1 PM - 4 PM");
                  }}
                  disabled={disabledPM}
                  value="1 PM - 4 PM"
                ></input>
              </div>
            </div>
          ) : (
            <div>
              <h3>Please fill out your information in the forms below.</h3>
              <Popped
                calBtn={calBtn}
                calDate={value.toDateString()}
                calDateOptions={calDateOptions}
                calDateID={dateFormat(value, "yyyymmdd") + "0" + calBtn}
                goBack={backed}
              />
            </div>
          )}
        </div>
      </PopPop>
    </div>
  );
}
