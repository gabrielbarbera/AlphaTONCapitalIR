/* AlphaTON Capital IR Website - Main JavaScript */

document.addEventListener("DOMContentLoaded", function () {
  // ===== MOBILE MENU FUNCTIONALITY =====
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (mobileMenuButton && mobileMenu) {
    // Function to open mobile menu
    function openMobileMenu() {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("animate-slide-down");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    // Function to close mobile menu
    function closeMobileMenu() {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("animate-slide-down");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    // Toggle mobile menu
    mobileMenuButton.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });

    // Close menu when clicking on menu items
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !mobileMenu.classList.contains("hidden") &&
        !mobileMenu.contains(e.target) &&
        !mobileMenuButton.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  // ===== NEWSLETTER FORM FUNCTIONALITY =====
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("newsletter-email").value;

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Show success message
      alert(
        "Thank you for subscribing! You will receive investor updates from AlphaTON Capital."
      );
      e.target.reset();
    });
  }

  // ===== ACTIVE PAGE NAVIGATION =====
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      // Add active class and update text color
      link.classList.add("active");
      link.classList.remove("text-gray-300");
      link.classList.add("text-white");
    } else {
      // Remove active class and update text color
      link.classList.remove("active");
      link.classList.remove("text-white");
      link.classList.add("text-gray-300");
    }
  });

  // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== BASIC FORM VALIDATION =====
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    // Skip newsletter form as it's handled above
    if (form.classList.contains("newsletter-form")) return;

    form.addEventListener("submit", function (e) {
      const requiredFields = this.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }

        // Email validation
        if (field.type === "email" && field.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            field.classList.add("error");
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert("Please fill in all required fields correctly.");
      }
    });
  });

  // ===== ACCESSIBILITY IMPROVEMENTS =====
  // Skip to main content link
  const skipLink = document.querySelector('a[href="#main-content"]');
  if (skipLink) {
    skipLink.addEventListener("click", function (e) {
      e.preventDefault();
      const mainContent = document.querySelector("main");
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }

  // ===== INITIALIZATION COMPLETE =====
  console.log("AlphaTON Capital IR Website initialized successfully");
  document.body.classList.add("loaded");
});
