"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typography, { type Variant } from "@/components/Typography";
import { useModalOpen } from "@/hooks/useModalOpen";

gsap.registerPlugin(useGSAP);

export type Direction = "left" | "right";

interface Props {
  text?: string;
  variant?: Variant;
  children?: React.ReactNode;
  direction?: Direction;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const items = Array(4).fill(null);

export default function Marquee({
  text,
  variant = "h1",
  children,
  direction = "left",
  speed = 1,
  pauseOnHover = false,
  className = "",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const isModalOpen = useModalOpen();

  useEffect(() => {
    if (isModalOpen) {
      tweenRef.current?.pause();
    } else {
      tweenRef.current?.play();
    }
  }, [isModalOpen]);

  useGSAP(() => {
    if (direction === "right") gsap.set(trackRef.current, { xPercent: -50 });
    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: direction === "left" ? -50 : 0,
      duration: 36 / speed,
      ease: "none",
      repeat: -1,
    });
  });

  const set = text
    ? items.map((_, i) => (
        <Typography
          key={i}
          variant={variant}
          className="pr-16 text-white uppercase"
        >
          {text}
        </Typography>
      ))
    : Array(8).fill(null).map((_, i) => (
        <div key={i} className="flex">
          {children}
        </div>
      ));

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={pauseOnHover ? () => tweenRef.current?.pause() : undefined}
      onMouseLeave={pauseOnHover ? () => tweenRef.current?.play() : undefined}
    >
      <div ref={trackRef} className="flex whitespace-nowrap">
        <div className="flex">{set}</div>
        <div className="flex">{set}</div>
      </div>
    </div>
  );
}
