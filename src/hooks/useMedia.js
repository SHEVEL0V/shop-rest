/** @format */

import { useEffect, useState } from "react";

export default function useMedia(width = 768) {
  const [boolean, setBoolean] = useState();
  useEffect(() => {
    window
      .matchMedia(`(min-width: ${width}px)`)
      .addEventListener("change", (e) => {
        setBoolean(e.matches);
      });
  }, [width]);

  return { boolean };
}
