"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useDrag } from "@use-gesture/react";

interface Props {
  children: React.ReactNode;
}

export default function ProjectGallery({ children }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const velocityRef = useRef(0);
  const setWidthRef = useRef(0);

  useLayoutEffect(() => {
    const track = trackRef.current!;
    const set = setRef.current!;

    setWidthRef.current = set.offsetWidth;

    const onWheel = (e: WheelEvent) => {
      if (document.body.classList.contains("modal-open")) return;
      velocityRef.current += e.deltaY * 0.05;
    };

    const tick = () => {
      velocityRef.current *= 0.98;
      xRef.current -= velocityRef.current;
      if (xRef.current < -setWidthRef.current)
        xRef.current += setWidthRef.current;
      if (xRef.current > 0) xRef.current -= setWidthRef.current;
      gsap.set(track, { x: xRef.current });
    };

    window.addEventListener("wheel", onWheel);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      gsap.ticker.remove(tick);
    };
  }, []);

  const bind = useDrag(
    ({ delta: [dx], velocity: [vx], direction: [dirX], active, first }) => {
      if (document.body.classList.contains("modal-open")) return;
      if (first) velocityRef.current = 0;
      xRef.current += dx * 1.5;
      if (!active) {
        velocityRef.current = -vx * dirX * 24;
      }
    },
    {},
  );

  return (
    <div
      className="w-screen overflow-hidden"
      {...bind()}
      style={{ touchAction: "none" }}
    >
      <div ref={trackRef} className="flex">
        <div ref={setRef} className="flex flex-shrink-0">
          {children}
        </div>
        <div className="flex flex-shrink-0">{children}</div>
      </div>
    </div>
  );
}
