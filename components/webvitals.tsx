"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

const WebVitals = ({ value}:any)=> {
  const [values, setValue] = useState(value);
  const ref = useRef(null)
  const isInView = useInView(ref)

  if (isInView === true) { // I want to 
    const interval = setInterval(() => {
      setValue((v: any) => (v >= values ? values : v + 10));
    }, 9000);
    clearInterval(interval);
  }

  return (
    <div className="relative h-full w-full">
      <CircularProgress
      ref={ref}
        aria-label="Loading..."
        classNames={
          {
          svg: "w-36 h-36 drop-shadow-md text-green-300",
          track: "stroke-black/10",
          value: "text-3xl font-semibold text-green-900 dark:text-green-300",
          indicator: "shadow-xl",
        }
      }
        size="lg"
        value={values}
        color="success"
        showValueLabel={true}
      />
    </div>
  );
}

export default WebVitals;