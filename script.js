// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.getElementById("home");
    // Check if the animation has already run
    if (!sessionStorage.getItem("heroAnimationPlayed")) {
      // Add class to animate hero content
      heroSection.classList.add("animate");
      // Set flag so that on subsequent refreshes the animation won't run
      sessionStorage.setItem("heroAnimationPlayed", "true");
    } else {
      // Immediately show the hero content without animation
      heroSection.querySelector('.hero-content').style.opacity = 1;
      heroSection.querySelector('.hero-content').style.transform = 'translateY(0)';
    }
  });
    
 
  document.querySelector('.nav-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#hero').scrollIntoView({
      behavior: 'smooth' // Smooth scrolling effect
    });
  });
  
  // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the "Contact" navigation link by its href attribute
  const contactLink = document.querySelector('a[href="#contact"]');
  
  // If the link exists, attach a click event listener
  if (contactLink) {
    contactLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // Find the contact section using its id
      const contactSection = document.querySelector('#contact');
      
      // Scroll to the contact section smoothly
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.getElementById('contact');
  const cards = contactSection.querySelectorAll('.card');
  
  const observerOptions = {
    threshold: 0.5  // Trigger when 50% of the contact section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        // Add the appropriate animation class:
        if(cards[0]) cards[0].classList.add('animate-left');
        if(cards[1]) cards[1].classList.add('animate-right');
        // Stop observing after animation triggers
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(contactSection);
});
