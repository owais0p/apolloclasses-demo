import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

const Counter = ({ value, duration = 2, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return <span ref={ref}><AnimatedText value={rounded} />{suffix}</span>;
};

const AnimatedText = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  
  useEffect(() => {
    return value.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [value]);

  return <>{displayValue}</>;
};

export default Counter;
