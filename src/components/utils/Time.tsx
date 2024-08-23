import { useEffect, useState } from "react";

export default function Time({
  time_zone = "America/Mexico_City",
  off_time = ["21:27", "12:20"],
}: {
  time_zone?: string;
  off_time?: Array<string>;
}) {
  const [time, setTime] = useState("00:00");
  const [isOff, setIsOff] = useState(false);

  function updateTime() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: time_zone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "shortOffset",
    };

    let formatter = new Intl.DateTimeFormat([], options);
    const currentTime = formatter.format(new Date().getTime());
    setTime(currentTime);
    setIsOff(isWithinRange(currentTime, off_time));
  }

  function isWithinRange(currentTime: string, offTime: string[]): boolean {
    let currentMinutes = 0;
    let initialMinutes = 0;
    let finalMinutes = 0;

    currentTime
      .split(" ")[0]
      .split(":")
      .forEach((part, index) => {
        if (index === 0) {
          currentMinutes += parseInt(part) * 60;
        } else if (index === 1) {
          currentMinutes += parseInt(part);
        }
      });

    offTime.forEach((time, index) => {
      time.split(":").forEach((part, i) => {
        const minutes = parseInt(part) * (i === 0 ? 60 : 1);
        if (index === 0) {
          initialMinutes += minutes;
        } else if (index === 1) {
          finalMinutes += minutes;
        }
      });
    });

    if (initialMinutes > finalMinutes) {
      return currentMinutes >= initialMinutes || currentMinutes <= finalMinutes;
    } else {
      return currentMinutes >= initialMinutes && currentMinutes <= finalMinutes;
    }
  }

  useEffect(() => {
    updateTime();
    const id = setInterval(updateTime, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {time} {isOff ? "🌙" : "🧑‍💻"}
    </span>
  );
}
