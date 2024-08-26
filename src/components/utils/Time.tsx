import { useEffect, useState } from "react";
import useConfig from "../../shared/hooks/useConfig";

export default function Time() {
  const { config } = useConfig();

  const [time, setTime] = useState("00:00");
  const [isOff, setIsOff] = useState(false);

  function updateTime() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: config.global.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "shortOffset",
    };

    const formatter = new Intl.DateTimeFormat([], options);
    const currentTime = formatter.format(new Date().getTime());
    setTime(currentTime);
    setIsOff(isWithinRange(currentTime));
  }

  function isWithinRange(currentTime: string): boolean {
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

    config.global.inactiveHours?.start_hour.split(":").forEach((part, i) => {
      const minutes = parseInt(part) * (i === 0 ? 60 : 1);
      initialMinutes += minutes;
    });

    config.global.inactiveHours?.end_hour.split(":").forEach((part, i) => {
      const minutes = parseInt(part) * (i === 0 ? 60 : 1);
      finalMinutes += minutes;
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
  });

  return (
    <span>
      {time} {isOff ? "🌙" : "🧑‍💻"}
    </span>
  );
}
