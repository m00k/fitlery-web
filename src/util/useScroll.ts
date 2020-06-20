import { useRef } from "react"

const useScroll = () => {
  const ref = useRef<HTMLElement>(null)
  const scrollTo = () => ref.current && window.scrollTo(0, ref?.current?.offsetTop);

  return [scrollTo, ref]
}

export default useScroll;