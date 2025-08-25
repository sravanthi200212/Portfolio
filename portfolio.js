// ==================== AOS INIT ====================
AOS.init({
  duration: 1000,
  once: true
});

// ==================== BACK TO TOP ====================
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==================== SMOOTH NAVBAR ACTIVE LINK ====================
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("text-accent");
    } else {
      link.classList.remove("text-accent");
    }
  });
});

// ==================== CONTACT FORM SUCCESS ALERT ====================
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", function () {
    setTimeout(() => {
      alert("✅ Thank you! Your message has been sent successfully.");
    }, 500);
  });
}
