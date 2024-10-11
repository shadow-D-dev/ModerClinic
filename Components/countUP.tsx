"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
interface countUpProp {
  end: number;
  duration: number;
  suffix?: string;
}
export default function CountUpComp({ end, duration, suffix }: countUpProp) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true); // Only start animation on client
  }, []);

  return (
    <div className="flex">
      {startAnimation && <CountUp end={end} duration={duration} />}
      {suffix ? <div>{suffix}</div> : <div></div>}
    </div>
  );
}
