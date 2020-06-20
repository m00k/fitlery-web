import { useRef, RefObject } from "react"

const useScrollTo = <T extends HTMLElement>(): [RefObject<T>, () => void] => {
  const ref = useRef<T>(null)
  const scrollTo = () => {
    if (ref.current) {
      console.log('###', ref.current);
      ref.current.scrollIntoView();
    }
  };

  return [ref, scrollTo];
}

export default useScrollTo;