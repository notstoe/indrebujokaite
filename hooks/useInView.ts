import { MutableRefObject, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

export function useInView<T extends HTMLElement>(options: IntersectionObserverInit, reverse = false): [MutableRefObject<T | null>, boolean] {
  const [inView, setInView] = useState<boolean>(false);
  const { elementRef } = useIntersectionObserver<T>((entries) => {
    if (entries[0].isIntersecting) {
      setInView(true);
    } else if (reverse === true) {
      setInView(false);
    }
  }, options);

  return [elementRef, inView];
}
