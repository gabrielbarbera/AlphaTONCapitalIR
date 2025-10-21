/* AlphaTON Capital IR Website - Main JavaScript */

document.addEventListener("DOMContentLoaded", function () {
  // ===== ESSENTIAL FUNCTIONALITY =====

  // ===== HEADER SCROLL EFFECT =====
  const header = document.querySelector("header");
  if (header) {
    function handleHeaderScroll() {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", handleHeaderScroll);
  }

  // ===== MOBILE MENU TOGGLE =====
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector("nav");

  if (mobileMenuToggle && nav) {
    // Function to open mobile menu
    function openMobileMenu() {
      nav.classList.add("active");
      mobileMenuToggle.classList.add("active");
      mobileMenuToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("mobile-menu-open");

      // Focus first menu item for accessibility
      const firstNavLink = nav.querySelector("a");
      if (firstNavLink) {
        firstNavLink.focus();
      }
    }

    // Function to close mobile menu
    function closeMobileMenu() {
      nav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("mobile-menu-open");

      // Return focus to toggle button
      mobileMenuToggle.focus();
    }

    // Toggle mobile menu
    mobileMenuToggle.addEventListener("click", function () {
      if (nav.classList.contains("active")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu when clicking on nav links
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        closeMobileMenu();
      });
    });

    // Close mobile menu with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("active")) {
        closeMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    // Handle window resize - close menu if screen becomes large
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1023 && nav.classList.contains("active")) {
        closeMobileMenu();
      }
    });
  }

  // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
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
  const skipLink = document.querySelector(".skip-link");
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
