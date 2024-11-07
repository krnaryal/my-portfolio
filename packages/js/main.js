/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// Close modal when clicking outside
modalViews.forEach((modalView) => {
  modalView.addEventListener("click", (e) => {
    if (e.target === modalView) {
      modalView.classList.remove("active-modal");
    }
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let portfolioSwiper = new Swiper(".portfolio__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 48,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

/*==================== TESTIMONIAL ====================*/
let testimonialSwiper = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 48,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// EmailJS initialization
(function() {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
})();

// Contact form functionality
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const btn = this.querySelector('button[type="submit"]');
    
    // Disable the button and show loading state
    btn.disabled = true; 
    btn.innerHTML = 'Sending...';

    try {
        const result = await emailjs.sendForm(serviceID, templateID, this);
        console.log('SUCCESS!', result.text);
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    } catch (error) {
        console.error('FAILED...', error.text);
        alert('Oops! Something went wrong. Please try again later.');
    } finally {
        // Re-enable the button and restore original text
        btn.disabled = false;
        btn.innerHTML = 'Send message <i class="uil uil-message button__icon"></i>';
    }
});

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.services__content');
    const modalCloses = document.querySelectorAll('.services__modal-close');
    const modals = document.querySelectorAll('.services__modal');

    // Open modal when clicking anywhere on the card
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('active-modal');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal functions
    const closeModal = (modal) => {
        modal.classList.remove('active-modal');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    // Close with X button
    modalCloses.forEach(close => {
        close.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            const modal = close.closest('.services__modal');
            closeModal(modal);
        });
    });

    // Close when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                closeModal(modal);
            });
        }
    });
});

// Portfolio scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.portfolio__container');
    const leftArrow = document.querySelector('.portfolio__arrow-left');
    const rightArrow = document.querySelector('.portfolio__arrow-right');
    
    // Scroll amount for each click (width of one card plus gap)
    const scrollAmount = 370; // 350px card width + 20px gap

    leftArrow.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Optional: Hide arrows at scroll limits
    container.addEventListener('scroll', () => {
        leftArrow.style.opacity = container.scrollLeft === 0 ? '0.5' : '1';
        rightArrow.style.opacity = 
            container.scrollLeft >= container.scrollWidth - container.clientWidth 
            ? '0.5' 
            : '1';
    });
});

// Portfolio slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.portfolio__content');
    const leftArrow = document.querySelector('.portfolio__arrow-left');
    const rightArrow = document.querySelector('.portfolio__arrow-right');
    let currentIndex = 0;

    // Show initial project
    projects[currentIndex].classList.add('active');

    // Function to update active project
    const showProject = (index) => {
        projects.forEach(project => project.classList.remove('active'));
        projects[index].classList.add('active');
    };

    // Previous project
    leftArrow.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
        showProject(currentIndex);
    });

    // Next project
    rightArrow.addEventListener('click', () => {
        currentIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
        showProject(currentIndex);
    });

    // Optional: Auto-play
    const autoPlay = setInterval(() => {
        currentIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
        showProject(currentIndex);
    }, 5000); // Change slide every 5 seconds

    // Stop auto-play on hover
    document.querySelector('.portfolio__container').addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Data
    const portfolioData = [
        {
            title: 'Healthcare Patient Management',
            description: 'Modern Canvas App featuring book tracking, member management, check-in/out system, and analytics dashboard.',
            image: 'assets/img/healthcare-app.jpg',
            technologies: ['Canvas App', 'Dataverse', 'Power Automate']
        },
        {
            title: 'Manufacturing Inventory System',
            description: 'Model-driven app with real-time stock tracking, order management, and supplier portal integration.',
            image: 'assets/img/inventory-system.jpg',
            technologies: ['Model-driven App', 'Power BI', 'PCF Components']
        },
        {
            title: 'Employee Onboarding Portal',
            description: 'Streamlined onboarding process with document management, task tracking, and automated workflows.',
            image: 'assets/img/onboarding-portal.jpg',
            technologies: ['Canvas App', 'SharePoint', 'Power Automate']
        },
        {
            title: 'Customer Service Portal',
            description: 'Integrated case management, knowledge base, and customer communication tools with custom dashboards.',
            image: 'assets/img/customer-service.jpg',
            technologies: ['Model-driven App', 'Portals', 'Power BI']
        }
    ];

    // Testimonial Data
    const testimonialData = [
        {
            name: 'Sarah Johnson',
            role: 'Project Manager, Healthcare Solutions',
            image: 'assets/img/testimonial1.jpg',
            text: 'The Canvas app developed for our patient management system streamlined our entire workflow.'
        },
        {
            name: 'Michael Chen',
            role: 'Operations Director, Manufacturing Inc.',
            image: 'assets/img/testimonial2.jpg',
            text: 'The inventory tracking Power App integrated perfectly with our existing systems.'
        },
        {
            name: 'Emily Martinez',
            role: 'HR Manager, Education Services',
            image: 'assets/img/testimonial3.jpg',
            text: 'Our employee onboarding process was transformed with the custom Power Apps solution.'
        },
        {
            name: 'David Thompson',
            role: 'IT Director, Retail Solutions',
            image: 'assets/img/testimonial4.jpg',
            text: 'The model-driven app for our customer service team exceeded expectations.'
        }
    ];

    // Initialize Portfolio Slider
    function initializePortfolio() {
        const portfolioWrapper = document.querySelector('.portfolio__wrapper');
        const portfolioLeftArrow = document.querySelector('.portfolio__container .nav__arrow-left');
        const portfolioRightArrow = document.querySelector('.portfolio__container .nav__arrow-right');
        const portfolioDots = document.querySelector('.portfolio__container .dots__container');
        let currentPortfolioIndex = 0;

        // Function to update portfolio content
        function updatePortfolio() {
            const item = portfolioData[currentPortfolioIndex];
            portfolioWrapper.innerHTML = `
                <div class="portfolio__content">
                    <img src="${item.image}" alt="${item.title}" class="portfolio__img">
                    <div class="portfolio__data">
                        <h3 class="portfolio__title">${item.title}</h3>
                        <p class="portfolio__description">${item.description}</p>
                        <div class="portfolio__stack">
                            ${item.technologies.map(tech => `<span class="portfolio__stack-item">${tech}</span>`).join('')}
                        </div>
                        <a href="#" class="demo__button">
                            Demo <i class="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;

            // Update dots
            portfolioDots.innerHTML = portfolioData.map((_, index) => 
                `<span class="dot ${index === currentPortfolioIndex ? 'active' : ''}"></span>`
            ).join('');
        }

        // Event listeners for portfolio navigation
        portfolioLeftArrow.addEventListener('click', () => {
            currentPortfolioIndex = (currentPortfolioIndex - 1 + portfolioData.length) % portfolioData.length;
            updatePortfolio();
        });

        portfolioRightArrow.addEventListener('click', () => {
            currentPortfolioIndex = (currentPortfolioIndex + 1) % portfolioData.length;
            updatePortfolio();
        });

        // Initialize portfolio
        updatePortfolio();
    }

    // Initialize Testimonials Slider
    function initializeTestimonials() {
        const testimonialWrapper = document.querySelector('.testimonial__wrapper');
        const testimonialLeftArrow = document.querySelector('.testimonial__container .nav__arrow-left');
        const testimonialRightArrow = document.querySelector('.testimonial__container .nav__arrow-right');
        const testimonialDots = document.querySelector('.testimonial__container .dots__container');
        let currentTestimonialIndex = 0;

        // Function to update testimonial content
        function updateTestimonial() {
            const item = testimonialData[currentTestimonialIndex];
            testimonialWrapper.innerHTML = `
                <div class="testimonial__content">
                    <div class="testimonial__header">
                        <img src="${item.image}" alt="" class="testimonial__img">
                        <div>
                            <h3 class="testimonial__name">${item.name}</h3>
                            <span class="testimonial__client">${item.role}</span>
                        </div>
                    </div>
                    <p class="testimonial__description">${item.text}</p>
                </div>
            `;

            // Update dots
            testimonialDots.innerHTML = testimonialData.map((_, index) => 
                `<span class="dot ${index === currentTestimonialIndex ? 'active' : ''}"></span>`
            ).join('');
        }

        // Event listeners for testimonials navigation
        testimonialLeftArrow.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialData.length) % testimonialData.length;
            updateTestimonial();
        });

        testimonialRightArrow.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialData.length;
            updateTestimonial();
        });

        // Initialize testimonials
        updateTestimonial();
    }

    // Initialize Portfolio Slider
    initializePortfolio();

    // Initialize Testimonials Slider
    initializeTestimonials();
});

// Add touch swipe support
function addSwipeSupport(element, onSwipeLeft, onSwipeRight) {
    let touchstartX = 0;
    let touchendX = 0;

    element.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    element.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // minimum distance for swipe
        if (touchendX < touchstartX - swipeThreshold) onSwipeLeft();
        if (touchendX > touchstartX + swipeThreshold) onSwipeRight();
    }
}

// Add to your initialization code
const portfolioWrapper = document.querySelector('.portfolio__wrapper');
const testimonialWrapper = document.querySelector('.testimonial__wrapper');

addSwipeSupport(portfolioWrapper, 
    () => portfolioRightArrow.click(), 
    () => portfolioLeftArrow.click()
);

addSwipeSupport(testimonialWrapper, 
    () => testimonialRightArrow.click(), 
    () => testimonialLeftArrow.click()
);

// Create a reusable slider function
function createSlider(options) {
    const {
        containerId,
        data,
        template,
        autoplay = false
    } = options;

    const container = document.querySelector(containerId);
    const wrapper = container.querySelector('.wrapper');
    const arrows = {
        left: container.querySelector('.nav__arrow-left'),
        right: container.querySelector('.nav__arrow-right')
    };
    const dots = container.querySelector('.dots__container');
    
    let currentIndex = 0;

    function updateContent() {
        wrapper.innerHTML = template(data[currentIndex]);
        updateDots();
    }

    function updateDots() {
        dots.innerHTML = data.map((_, index) => 
            `<span class="dot ${index === currentIndex ? 'active' : ''}"></span>`
        ).join('');
    }

    function navigate(direction) {
        currentIndex = (currentIndex + direction + data.length) % data.length;
        updateContent();
    }

    // Event Listeners
    arrows.left.addEventListener('click', () => navigate(-1));
    arrows.right.addEventListener('click', () => navigate(1));
    
    // Touch Support
    addSwipeSupport(wrapper, 
        () => navigate(1),
        () => navigate(-1)
    );

    // Initialize
    updateContent();
}
