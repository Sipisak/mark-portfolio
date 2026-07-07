import { useState } from "react";

/* ─── hover / focus state hook ────────────────────── */

// Tracks pointer hover AND keyboard focus as a single "active" flag, so
// interactive elements light up the same way whether reached by mouse or
// keyboard. Returns the flag plus the handlers to spread onto the element.
export function useHover(): [
  boolean,
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
  }
] {
  const [active, setActive] = useState(false);
  const on = () => setActive(true);
  const off = () => setActive(false);
  return [active, { onMouseEnter: on, onMouseLeave: off, onFocus: on, onBlur: off }];
}
