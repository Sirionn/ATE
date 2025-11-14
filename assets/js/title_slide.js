document.addEventListener('DOMContentLoaded', () => {
      const tracks = Array.from(document.querySelectorAll('.scroll-title .titre-track'));
      if (!tracks.length) return;

      const factor = 0.4;
      const widths = new Map();

      function recalc() {
        tracks.forEach(track => {
          widths.set(track, track.scrollWidth);
        });
      }

      function onScroll() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        tracks.forEach(track => {
          const trackWidth = widths.get(track) || track.scrollWidth || 1;
          const x = (scrollY * factor) % trackWidth;
          track.style.transform = `translateX(${-x}px)`;
        });
      }

      recalc();
      onScroll();

      window.addEventListener('resize', () => {
        recalc();
        onScroll();
      });

      window.addEventListener('scroll', onScroll, { passive: true });
    });