/* 
   STACKLY PREMIUM TEXTILE INDUSTRY WEBSITE 
   Main JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. PRELOADER
  const preloader = document.querySelector('.preloader');
  const percentageEl = document.querySelector('.loading-percentage');
  
  if (preloader) {
    let loadProgress = 0;
    const interval = setInterval(() => {
      loadProgress += Math.floor(Math.random() * 10) + 5;
      if (loadProgress >= 100) {
        loadProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }, 300);
      }
      if (percentageEl) {
        percentageEl.textContent = `${loadProgress}%`;
      }
    }, 50);
  }

  // 2. STICKY NAVBAR
  const navbar = document.querySelector('.navbar-premium');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  // 3. SCROLL PROGRESS BAR
  const progressBar = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    if (progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }
  });

  // 4. CUSTOM MOUSE CURSOR
  const cursor = document.querySelector('.cursor');
  const cursorGlow = document.querySelector('.cursor-glow');
  
  if (cursor && cursorGlow && window.innerWidth > 991) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Delay for glow effect
      setTimeout(() => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      }, 50);
    });

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll('a, button, .hover-target');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }

  // 5. BACK TO TOP
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // 6. RIPPLE EFFECT FOR BUTTONS
  const buttons = document.querySelectorAll('.btn-premium');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      let x = e.clientX - e.target.getBoundingClientRect().left;
      let y = e.clientY - e.target.getBoundingClientRect().top;

      let ripples = document.createElement('span');
      ripples.classList.add('ripple-effect');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      this.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 600);
    });
  });

  // 7. SET ACTIVE NAV LINK BASED ON URL
  let currentLocation = location.pathname.split('/').pop() || 'index.html';
  
  // Remove all existing active classes
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    link.classList.remove('active');
  });

  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    
    const hrefFile = href.split('/').pop();
    
    if (hrefFile === currentLocation) {
      link.classList.add('active');
      
      // Highlight parent dropdown toggle if applicable
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const dropdownToggle = parentDropdown.querySelector('.dropdown-toggle');
        if (dropdownToggle) dropdownToggle.classList.add('active');
      }
    }
  });

  // 8. MOBILE MENU BODY LOCK
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse) {
    navbarCollapse.addEventListener('show.bs.collapse', () => {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    });
    navbarCollapse.addEventListener('hide.bs.collapse', () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    });
  }

});
