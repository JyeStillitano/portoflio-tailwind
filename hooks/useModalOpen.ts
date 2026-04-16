import { useState, useEffect } from "react";

export function useModalOpen() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsOpen(document.body.classList.contains("modal-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isOpen;
}
