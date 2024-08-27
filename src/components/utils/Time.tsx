import { useEffect, useState } from "react";
import useConfig from "../../shared/hooks/useConfig";

export default function Time() {
  const { config } = useConfig();

  if (!shouldDisplayTimeZone(config)) {
    return <></>;
  }

  const [time, setTime] = useState("00:00");
  const [isOff, setIsOff] = useState(false);

  function updateTime() {
    const currentTime = formatCurrentTime(config.global.timeZone);
    setTime(currentTime);

    if (config.global.inactiveHours) {
      setIsOff(isWithinRange(currentTime));
    }
  }

  function formatCurrentTime(timeZone?: string): string {
    const options: Intl.DateTimeFormatOptions = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "shortOffset",
    };

    const formatter = new Intl.DateTimeFormat([], options);
    return formatter.format(new Date().getTime());
  }

  function shouldDisplayTimeZone(config: any): boolean {
    return config.global.timeZone && config.head.showTimeZone;
  }

  function isWithinRange(currentTime: string): boolean {
    const currentMinutes = convertTimeToMinutes(currentTime);
    const initialMinutes = convertTimeToMinutes(config.global.inactiveHours?.start_hour);
    const finalMinutes = convertTimeToMinutes(config.global.inactiveHours?.end_hour);

    if (initialMinutes > finalMinutes) {
      return currentMinutes >= initialMinutes || currentMinutes <= finalMinutes;
    } else {
      return currentMinutes >= initialMinutes && currentMinutes <= finalMinutes;
    }
  }

  function convertTimeToMinutes(time: string | undefined): number {
    if (!time) return 0;

    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function renderStatusIcon(): string {
    if (!config.global.inactiveHours || !config.head.indicateStatus) {
      return "";
    }

    return isOff ? "🌙" : "🧑‍💻";
  }

  useEffect(() => {
    updateTime();
    const id = setInterval(updateTime, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {time} {renderStatusIcon()}
    </span>
  );
}
