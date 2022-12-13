import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.addEventListener("mousedown", listener);
    };
  }, [handler, ref]);
};

export default useOnClickOutside;
