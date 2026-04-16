"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MailForm from "./MailForm";
import IconButton from "./IconButton";
import Backdrop from "./Backdrop";

gsap.registerPlugin(useGSAP);

const DURATION = 0.5;

export default function ContactTab() {
  const drawerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", open);
  }, [open]);

  useGSAP(() => {
    gsap.set(drawerRef.current, { x: formRef.current!.offsetWidth });
  });

  function handleToggle() {
    if (isOpen.current) {
      isOpen.current = false;
      setOpen(false);
      gsap.to(drawerRef.current, {
        x: formRef.current!.offsetWidth,
        duration: DURATION / 2,
        ease: "none",
        overwrite: true,
      });
    } else {
      isOpen.current = true;
      setOpen(true);
      const totalWidth = drawerRef.current!.offsetWidth;
      const centeredX = -(window.innerWidth - totalWidth) / 2;
      gsap.to(drawerRef.current, {
        x: centeredX,
        duration: DURATION,
        ease: "power3.out",
        overwrite: true,
      });
    }
  }

  return (
    <>
      {open && <Backdrop onClick={handleToggle} className="z-20" />}
      <div className="pointer-events-none fixed top-20 right-0 bottom-36 z-30 flex items-center">
        <div
          ref={drawerRef}
          className="pointer-events-auto flex items-start shadow-xl"
        >
          {/* Tab — rounded-l-full fills the full button area */}
          <IconButton
            label="Contact"
            onClick={handleToggle}
            className="text-brand-primary hover:text-brand-secondary rounded-l-full bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="size-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </IconButton>

          {/* Form panel — rounded on all corners except top-left */}
          <div
            ref={formRef}
            className="max-h-[calc(100vh-8rem)] w-80 max-w-[calc(100vw-4rem)] min-w-64 overflow-y-auto rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white px-6"
          >
            <MailForm />
          </div>
        </div>
      </div>
    </>
  );
}
