import React, { useCallback, useState } from "react";

export default function AdminView() {
  const [bookedSessions, setBookedSessions] = useState([]);
  const [showData, setShowData] = useState(false);

  function Calendars() {
    if (showData == false) {
      fetch(`https://mjs-capstone-project-backend.herokuapp.com/getCalendars`, {
        method: "GET",
      })
        .then((response) => {
          const text = response.text();
          if (response.ok) {
            return text;
          } else {
            throw Error(text);
          }
        })
        .then((text) => {
          //  console.log("text", text);
          setBookedSessions(JSON.parse(text));
          setShowData(true);
          console.log(bookedSessions);
          return text;
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  return (
    <div className="admin">
      {Calendars()}
      <h2>These are the currently booked sessions:</h2>
      <div className="admin-view">
        {showData
          ? bookedSessions.map((session, i) => {
              console.log(session, i);
              return (
                <div key={i} className="session-scheduled">
                  <div> Name: {session.name} </div>
                  <div> Email: {session.email} </div>
                  <div> Phone: {session.phone} </div>
                  <div> Address: {session.address} </div>
                  <div> Date: {session.calDate} </div>
                  <div> Time: {session.calDateOptions} </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
