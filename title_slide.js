document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.scroll-title');
    const title   = section.querySelector('.titre');

    function onScroll() {
      const sectionTop    = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY       = window.scrollY;

      // how far we are inside the section (0 = top, 1 = bottom)
      const progress = (scrollY - sectionTop) / sectionHeight;

      if (progress >= 0 && progress <= 1) {
        const maxTranslate = 200; // max horizontal movement in px
        const x = progress * maxTranslate; // move to the right
        // or use `-progress * maxTranslate` to move to the left
        title.style.transform = `translateX(${x}px)`;
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // run once on load
});
