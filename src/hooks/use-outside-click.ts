/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect, useState } from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};



export function useMediaQuery(query: any) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
  
      const handleChange = () => setMatches(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);
  
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);
  
    return matches;
  }
  