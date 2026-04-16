"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Backdrop from "./Backdrop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const DURATION_IN = 0.6;

export interface ProjectModalProps {
  name: string;
  content: string;
  image: string;
  github?: string | null;
  link?: string;
  onClose: () => void;
}

export default function ProjectModal({
  name,
  image,
  content,
  github,
  link,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        modalRef.current,
        { y: "100%" },
        { y: "0%", duration: DURATION_IN, ease: "power3.out" },
      );
    },
    { dependencies: [mounted] },
  );

  function handleClose() {
    gsap.to(modalRef.current, {
      y: "100%",
      duration: DURATION_IN / 4,
      ease: "none",
      onComplete: onClose,
    });
  }

  if (!mounted) return null;

  return createPortal(
    <>
      <Backdrop onClick={handleClose} />
      <div
        ref={modalRef}
        className="fixed right-0 bottom-0 left-0 z-50 rounded-t-2xl bg-white shadow-xl"
      >
        <div className="mx-auto w-full max-w-4xl px-6 pt-4 pb-8">
          {/* Close button */}
          <div className="mb-4 flex justify-end">
            <button onClick={handleClose} aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-brand-primary hover:fill-brand-secondary size-6"
              >
                <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Image — full width mobile, 50% desktop */}
            <div className="md:w-1/2">
              <img
                src={image}
                alt={name}
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Text + buttons — full width mobile, 50% desktop */}
            <div className="flex flex-col justify-between md:w-1/2">
              <div>
                <h2 className="text-brand-primary mb-3 text-2xl font-bold tracking-tight">
                  {name}
                </h2>
                <p className="text-brand-primary text-sm sm:text-base">
                  {content}
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    className="bg-brand-primary hover:bg-brand-secondary flex items-center gap-2 rounded-full px-4 py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm font-semibold text-white">
                      GitHub
                    </span>
                  </Link>
                )}
                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    className="bg-brand-primary hover:bg-brand-secondary flex items-center gap-2 rounded-full px-4 py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                    </svg>
                    <span className="text-sm font-semibold text-white">
                      Visit
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
