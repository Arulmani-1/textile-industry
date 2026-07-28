/* 
   STACKLY PREMIUM TEXTILE INDUSTRY WEBSITE 
   Counter Animation
*/

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-value');
  const speed = 200; // The lower the slower

  if (counters.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to fast
            const inc = target / speed;

            // Check if target is reached
            if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = Math.ceil(count + inc);
              // Call function every ms
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };
          
          updateCount();
          observer.unobserve(counter); // Only animate once
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }
});
