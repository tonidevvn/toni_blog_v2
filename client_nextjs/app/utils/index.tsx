export const scrollToSection = (section: string, duration: number = 500) => {
  console.log(section);
  const expertiseElement = document.getElementById(section);
  if (expertiseElement) {
    const startPosition = window.scrollY;
    const targetPosition =
      expertiseElement.getBoundingClientRect().top + startPosition;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const scrollPosition =
        startPosition +
        (targetPosition - startPosition) * easeInOutQuad(progress);
      window.scrollTo(0, scrollPosition);
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        // console.log("Scrolling to:", expertiseElement);
        // Debugging: Ensure the element is found
      }
    };
    requestAnimationFrame(animateScroll);
  } else {
    console.error('Element with id "expertise" not found');
  }
};
