import { MutableRefObject, useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface ScrollToTopProps {
  el: MutableRefObject<HTMLElement>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
  const { el } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(el);
    el.current?.scrollTo(0, 0);
  }, [pathname, el]);

  return null;
}

export default ScrollToTop;