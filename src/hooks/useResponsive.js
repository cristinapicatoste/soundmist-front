import { useEffect, useState } from 'react';

const deviceSizes = {
  MOBILE: 756,
  SMALL_DESKTOP: 1080,
  DESKTOP: 1224,
};

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isDesktop, setIsDesktop] = useState(windowSize.width >= deviceSizes.DESKTOP);
  const [isMobile, setIsMobile] = useState(windowSize.width <= deviceSizes.MOBILE);

  const [time, setTime] = useState(0);

  const play = () => {
    library.play;
  };

  const pause = () => {
    const time = library.pause;
    setTime(time);
  };

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsDesktop(window.innerWidth >= deviceSizes.DESKTOP);

      setIsMobile(window.innerWidth <= deviceSizes.MOBILE);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return { play, pause, time };
};

export default useResponsive;
