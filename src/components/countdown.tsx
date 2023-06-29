import {
  faCakeCandles,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const countdownDate: any = new Date();
    countdownDate.setFullYear(countdownDate.getFullYear() + 1);
    countdownDate.setMonth(4); // May is represented as 4 (0-11)
    countdownDate.setDate(8);
    countdownDate.setHours(0);
    countdownDate.setMinutes(0);
    countdownDate.setSeconds(0);

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const remainingTime = countdownDate - currentTime;

      if (remainingTime <= 0) {
        setCountdownFinished(true);
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          padding: "0 70px",
          border: " 4px double rgba(28,110,164,0.43)",
          WebkitBorderRadius: "5px",
          borderRadius: "5px",
          letterSpacing: "3px",
          wordSpacing: "3px",
          fontSize: "3.5vw",
        }}
      >
        <FontAwesomeIcon
          icon={faCakeCandles}
          beatFade
          size="lg"
          style={{
            color: "#A1C9F1",
            marginRight: "20px",
          }}
        />
        SETH TIMER
      </span>
      {!countdownFinished ? (
        <div>
          <div>
            <span
              style={{
                letterSpacing: "3px",
                wordSpacing: "3px",
                fontSize: "2.5vw",
              }}
            >
              <FontAwesomeIcon
                icon={faHourglassStart}
                spin
                size="xs"
                style={{ color: "#A1C9F1", marginRight: "20px" }}
              />
              {days} : {hours} : {minutes} : {seconds}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <h1>HAPPY BIRTHDAY</h1>
        </div>
      )}
    </div>
  );
}

export default Countdown;
