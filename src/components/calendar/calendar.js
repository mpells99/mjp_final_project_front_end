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

  function backed() {
    setPoppedClick(true);
  }

  // async function funcky() {
  //   // let docuFuncky = JSON.stringify(

  //   console.log(
  //     "docu" +
  //       (await document.querySelector(
  //         "body > div:nth-child(5) > div > div:nth-child(2)"
  //       ))
  //   );
  // }

  // function popColor() {
  //   (document.querySelector(
  //     "body > div:nth-child(5) > div > div:nth-child(2)"
  //   ).className += "pop-color");
  // }

  return (
    <div>
      <Calendar
        onChange={(value) => {
          onChange(value);
          setShowPop(true);

          // console.log("You clicked on: " + value);
        }}
        value={value}
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
              {/* {showPop ? (
                (document.querySelectorAll(
                  "body > div:nth-child(5) > div > div:nth-child(2)"
                )[0].className += "pop-color")
              ) : (
                <div className="blue"></div>
              )} */}
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
