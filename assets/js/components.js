// Global Navigation Component
class NavbarComponent {
  constructor() {
    this.htmlFile = "components/header.html";
    this.fallbackHTML = `
      <nav class="bg-black/20 backdrop-blur-lg border-b border-white/10 fixed top-0 left-0 right-0 z-50" role="navigation" aria-label="Main navigation">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="index.html" class="flex items-center group">
                <img src="assets/img/Primary Logo Horizontal White.svg" alt="AlphaTON Capital" class="h-8 w-auto transition-transform duration-200 group-hover:scale-105">
              </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-3 flex items-center space-x-3">
                <a href="index.html" class="nav-link text-white hover:text-alphaton-primary px-1 py-0.5 text-sm font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="news.html" class="nav-link text-gray-300 hover:text-alphaton-primary px-2 py-0.5 text-sm font-medium transition-colors duration-200">
                  News
                </a>
                <a href="https://www.sec.gov/edgar/browse/?CIK=1095435&owner=exclude" target="_blank" rel="noopener noreferrer" class="nav-link text-gray-300 hover:text-alphaton-primary px-2 py-0.5 text-sm font-medium transition-colors duration-200">
                  SEC Fillings
                </a>
                <a href="governance.html" class="nav-link text-gray-300 hover:text-alphaton-primary px-2 py-0.5 text-sm font-medium transition-colors duration-200">
                  Corporate Governance
                </a>
                <a href="team.html" class="nav-link text-gray-300 hover:text-alphaton-primary px-2 py-0.5 text-sm font-medium transition-colors duration-200">
                  Team
                </a>
                <a href="faqs.html" class="nav-link text-gray-300 hover:text-alphaton-primary px-2 py-0.5 text-sm font-medium transition-colors duration-200">
                  FAQs
                </a>
                <a href="contact.html" class="nav-link text-gray-300 hover:text-alphaton-primary px-2 py-0.5 text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200" aria-expanded="false" aria-label="Toggle main menu">
                <!-- Hamburger icon -->
                <svg id="menu-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Close icon -->
                <svg id="close-icon" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-lg border-t border-white/10">
            <a href="index.html" class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              Home
            </a>
            <a href="news.html" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              News
            </a>
            <a href="https://www.sec.gov/edgar/browse/?CIK=1095435&owner=exclude" target="_blank" rel="noopener noreferrer" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              SEC Fillings
            </a>
            <a href="governance.html" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              Corporate Governance
            </a>
            <a href="team.html" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              Team
            </a>
            <a href="faqs.html" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              FAQs
            </a>
            <a href="contact.html" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-alphaton-primary transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </nav>
    `;
  }

  async loadHTML() {
    try {
      const response = await fetch(this.htmlFile);
      if (!response.ok) {
        throw new Error(`Failed to load ${this.htmlFile}: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.warn(
        "Using fallback navbar HTML due to CORS restrictions in development"
      );
      return this.fallbackHTML;
    }
  }

  async render(containerId = "navbar-container") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = await this.loadHTML();
    if (html) {
      container.innerHTML = html;
      this.setActivePage();
      this.initMobileMenu();
    }
  }

  setActivePage() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPage ||
        (currentPage === "" && href === "index.html")
      ) {
        link.classList.remove("text-gray-300");
        link.classList.add("text-white");
      } else {
        link.classList.remove("text-white");
        link.classList.add("text-gray-300");
      }
    });
  }

  initMobileMenu() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!mobileMenuButton || !mobileMenu) return;

    function toggleMobileMenu() {
      const isHidden = mobileMenu.classList.contains("hidden");

      if (isHidden) {
        // Open menu
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("animate-slide-down");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      } else {
        // Close menu
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("animate-slide-down");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    }

    function closeMobileMenu() {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("animate-slide-down");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    // Event listeners
    mobileMenuButton.addEventListener("click", toggleMobileMenu);

    // Close menu when clicking on menu items
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenu.classList.contains("hidden") &&
        !mobileMenu.contains(e.target) &&
        !mobileMenuButton.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }
}

// Global Footer Component
class FooterComponent {
  constructor() {
    this.htmlFile = "components/footer.html";
    this.fallbackHTML = `
      <footer class="bg-alphaton-dark border-t border-white/10 py-20" id="newsletter">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Main Footer Content -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <!-- Newsletter Section -->
            <div class="space-y-6 text-center">
              <div>
                <h4 class="text-2xl font-bold text-white mb-4">Newsletter</h4>
                <p class="text-gray-300 text-lg leading-relaxed">Sign up to receive AlphaTON Capital news, press releases, and SEC filing alerts.</p>
              </div>
              <form class="newsletter-form space-y-5">
                <div>
                  <label for="newsletter-email" class="sr-only">Email Address</label>
                  <input type="email" id="newsletter-email" name="email" class="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-alphaton-primary focus:border-transparent transition-all duration-200 text-lg text-center" placeholder="Enter your email" required>
                </div>
                <button type="submit" class="w-full bg-alphaton-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg hover:transform hover:scale-105">
                  Subscribe
                </button>
              </form>
              <p class="text-sm text-gray-400 leading-relaxed">By subscribing, you agree to receive investor communications from AlphaTON Capital. You can unsubscribe at any time.</p>
            </div>
            
            <!-- Investor Relations Section -->
            <div class="space-y-6 text-center">
              <div>
                <h4 class="text-2xl font-bold text-white mb-4">Investor Relations</h4>
              </div>
              <div class="space-y-4">
                <p class="text-white font-semibold text-lg">AlphaTON Capital Corp.</p>
                <div class="space-y-2">
                  <p class="text-gray-300">c/o Investor Relations</p>
                  <p class="text-gray-300">New York, NY, USA</p>
                </div>
                <p class="text-gray-300">
                  <a href="mailto:ir@alphatoncapital.com" class="text-alphaton-primary hover:text-blue-400 transition-colors duration-200 text-lg font-medium">
                    ir@alphatoncapital.com
                  </a>
                </p>
              </div>
            </div>
            
            <!-- Quick Links Section -->
            <div class="space-y-6 text-center">
              <div>
                <h4 class="text-2xl font-bold text-white mb-4">Quick Links</h4>
              </div>
              <div class="space-y-3">
                <a href="contact.html" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">Contact IR</a>
                <a href="https://www.sec.gov/edgar/browse/?CIK=1095435&owner=exclude" target="_blank" rel="noopener noreferrer" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">SEC Filings</a>
                <a href="assets/pdf/AlphaTON Capital Branding Guide.pdf" target="_blank" rel="noopener noreferrer" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">Press Kit</a>
                <a href="privacy.html" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">Privacy Policy</a>
                <a href="terms.html" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">Terms of Use</a>
                <a href="safe-harbor.html" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">Safe Harbor Statement</a>
              </div>
            </div>
          </div>
          
          <!-- Safe Harbor Statement -->
          <div class="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
            <h4 class="text-xl font-semibold text-white mb-4">Safe Harbor Statement</h4>
            <p class="text-gray-300 leading-relaxed">
              This website may contain forward-looking statements regarding AlphaTON Capital Corp.'s future performance. These statements involve risks and uncertainties, and actual results may differ materially. Please refer to our SEC filings for risk factors.
            </p>
          </div>
          
          <!-- Footer Bottom -->
          <div class="border-t border-white/10 pt-12">
            <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div class="flex items-center space-x-4">
                <img src="assets/img/Wordmark White.svg" alt="AlphaTON Capital" class="h-8 w-auto">
                <p class="text-gray-400 text-lg">&copy; 2025 AlphaTON Capital Corp. All rights reserved.</p>
              </div>
              
              <div class="flex space-x-8">
                <a href="https://x.com/AlphaTONCapital" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-alphaton-primary transition-all duration-200 hover:scale-110">
                  <span class="sr-only">X (Twitter)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
                <a href="https://t.me/AlphaTONCapital" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-alphaton-primary transition-all duration-200 hover:scale-110">
                  <span class="sr-only">Telegram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7">
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/alphaton-capital/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-alphaton-primary transition-all duration-200 hover:scale-110">
                  <span class="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7">
                    <path d="M8 11v5" />
                    <path d="M8 8v.01" />
                    <path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  async loadHTML() {
    try {
      const response = await fetch(this.htmlFile);
      if (!response.ok) {
        throw new Error(`Failed to load ${this.htmlFile}: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.warn(
        "Using fallback footer HTML due to CORS restrictions in development"
      );
      return this.fallbackHTML;
    }
  }

  async render(containerId = "footer-container") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = await this.loadHTML();
    if (html) {
      container.innerHTML = html;
      this.initNewsletterForm();
    }
  }

  initNewsletterForm() {
    const form = document.querySelector(".newsletter-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("newsletter-email").value;

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // Show success message (in a real implementation, this would submit to a server)
        alert(
          "Thank you for subscribing! You will receive investor updates from AlphaTON Capital."
        );
        form.reset();
      });
    }
  }
}

// RSS Feed Component
class RSSFeedComponent {
  constructor() {
    this.feedContainer = document.getElementById("rss-feed-content");
    this.loadMoreBtn = document.getElementById("load-more-btn");
    this.currentPage = 0;
    this.itemsPerPage = 4;
    this.allItems = [];
  }

  async loadRSSFeed() {
    if (!this.feedContainer) return;

    try {
      // Show loading state
      this.showLoadingState();

      // Try multiple methods to fetch RSS data
      const rssUrl = "https://alphatoncapital.com/feed/";

      // Method 1: Try direct fetch (will fail due to CORS)
      // Method 2: Use CORS proxy service
      // Method 3: Use RSS2JSON API

      let response;
      let xmlText;

      try {
        // First try direct fetch
        response = await fetch(rssUrl, {
          method: "GET",
          mode: "cors",
          headers: {
            Accept: "application/rss+xml, application/xml, text/xml",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        xmlText = await response.text();
      } catch (corsError) {
        console.log("Direct fetch failed due to CORS, trying proxy...");

        // Try CORS proxy service
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
          rssUrl
        )}`;

        try {
          response = await fetch(proxyUrl, {
            method: "GET",
            headers: {
              Accept: "application/rss+xml, application/xml, text/xml",
            },
          });

          if (!response.ok) {
            throw new Error(
              `Proxy HTTP ${response.status}: ${response.statusText}`
            );
          }

          xmlText = await response.text();
        } catch (proxyError) {
          console.log("CORS proxy failed, trying RSS2JSON...");

          // Try RSS2JSON API as fallback
          const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssUrl
          )}`;

          response = await fetch(rss2jsonUrl, {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(
              `RSS2JSON HTTP ${response.status}: ${response.statusText}`
            );
          }

          const jsonData = await response.json();

          if (jsonData.status === "ok" && jsonData.items) {
            // Convert RSS2JSON format to our format
            this.allItems = jsonData.items.slice(0, 8).map((item) => ({
              title: item.title || "",
              link: item.link || "",
              date: this.formatDate(item.pubDate || item.publishedDate || ""),
              category: this.determineCategory(
                item.title + " " + (item.description || item.content || "")
              ),
              description: this.cleanDescription(
                item.description || item.content || ""
              ),
            }));

            this.displayItems();
            this.updateLoadMoreButton();
            return;
          } else {
            throw new Error("RSS2JSON returned invalid data");
          }
        }
      }

      // Parse XML if we got it from direct fetch or proxy
      if (xmlText) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // Check for parsing errors
        const parseError = xmlDoc.querySelector("parsererror");
        if (parseError) {
          throw new Error("Failed to parse RSS feed");
        }

        // Extract items from RSS feed
        const items = xmlDoc.querySelectorAll("item");
        this.allItems = [];

        items.forEach((item, index) => {
          if (index >= 8) return; // Limit to 8 items

          const title = item.querySelector("title")?.textContent?.trim() || "";
          const link = item.querySelector("link")?.textContent?.trim() || "";
          const pubDate =
            item.querySelector("pubDate")?.textContent?.trim() || "";
          const description =
            item.querySelector("description")?.textContent?.trim() || "";

          if (title && link) {
            // Clean description (remove HTML tags)
            const cleanDescription = description.replace(/<[^>]*>/g, "");
            const truncatedDescription =
              cleanDescription.length > 200
                ? cleanDescription.substring(0, 200) + "..."
                : cleanDescription;

            // Determine category based on content
            const category = this.determineCategory(title + " " + description);

            // Format date
            const formattedDate = this.formatDate(pubDate);

            this.allItems.push({
              title: title,
              link: link,
              date: formattedDate,
              category: category,
              description: truncatedDescription,
            });
          }
        });

        if (this.allItems.length > 0) {
          this.displayItems();
          this.updateLoadMoreButton();
        } else {
          this.showFallbackContent();
        }
      }
    } catch (error) {
      console.error("RSS Feed Error:", error);
      this.showFallbackContent();
    }
  }

  showLoadingState() {
    this.feedContainer.innerHTML = `
      <div class="text-center py-8">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-alphaton-primary"></div>
        <p class="text-gray-400 mt-4">Loading latest news...</p>
      </div>
    `;
  }

  showErrorState(message) {
    this.feedContainer.innerHTML = `
      <div class="text-center py-8">
        <div class="text-red-400 mb-4">
          <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <p class="text-gray-400 mb-4">${message}</p>
        <button onclick="rssFeed.loadRSSFeed()" class="bg-alphaton-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
          Try Again
        </button>
      </div>
    `;
  }

  showFallbackContent() {
    // Static fallback content when RSS feed is not available
    this.allItems = [
      {
        title:
          "AlphaTON Capital Receives Nasdaq Congratulations for Groundbreaking Cancer Research Tokenization Initiative",
        link: "https://alphatoncapital.com/alphaton-capital-receives-nasdaq-congratulations-for-groundbreaking-cancer-research-tokenization-initiative/",
        date: "October 10, 2025",
        category: "Strategic Initiative",
        description:
          "AlphaTON Capital (NASDAQ: ATON), a specialized digital asset treasury company focused on developing the TON and Telegram ecosystem, and new pioneer in blockchain-based healthcare financing, today announced...",
      },
      {
        title:
          "Market Alert: AlphaTON Capital Continues in Growth Mode and Purchases an additional 300,000 TON",
        link: "https://alphatoncapital.com/market-alert-alphaton-capital-continues-in-growth-mode-and-purchases-an-additional-300000-ton/",
        date: "October 12, 2025",
        category: "Strategic Initiative",
        description:
          "Dover, DE, Oct. 12, 2025 (GLOBE NEWSWIRE) — AlphaTON Capital Corp. (Nasdaq: ATON) stated that during the market conditions of the past week, AlphaTON Capital is still expanding its TON Treasury...",
      },
      {
        title:
          "AlphaTON Capital Launches AI Vertical with MorpheusAI to Accelerate Agentic AI Development on TON and Telegram",
        link: "https://alphatoncapital.com/alphaton-capital-launches-ai-vertical-with-morpheusai-to-accelerate-agentic-ai-development-on-ton-and-telegram/",
        date: "October 13, 2025",
        category: "Partnership",
        description:
          "Landmark Strategic Partnership Establishes Morpheus as Preferred AI Infrastructure Provider for AlphaTON's Portfolio Companies...",
      },
      {
        title:
          "Enzo Villani, Chief Investment Officer of AlphaTON Capital, to Speak at the Vatican's 10th Anniversary World Changers Summit",
        link: "https://alphatoncapital.com/enzo-villani-chief-investment-officer-of-alphaton-capital-to-speak-at-the-vaticans-10th-anniversary-world-changers-summit/",
        date: "October 20, 2025",
        category: "Strategic Initiative",
        description:
          "Vatican City, Oct. 20, 2025 (GLOBE NEWSWIRE) — Enzo Villani, Chief Investment Officer of AlphaTON Capital (NASDAQ: ATON), has been invited to speak at the 10th Anniversary of the IASC World Changers...",
      },
    ];

    this.displayItems();
    this.updateLoadMoreButton();
  }

  determineCategory(content) {
    const lowerContent = content.toLowerCase();

    // AI & Technology
    if (
      lowerContent.includes("ai") ||
      lowerContent.includes("artificial intelligence") ||
      lowerContent.includes("machine learning") ||
      lowerContent.includes("technology") ||
      lowerContent.includes("digital transformation") ||
      lowerContent.includes("blockchain") ||
      lowerContent.includes("crypto") ||
      lowerContent.includes("tokenization") ||
      lowerContent.includes("defi") ||
      lowerContent.includes("web3")
    ) {
      return "Technology";
    }

    // Partnerships & Collaborations
    if (
      lowerContent.includes("partnership") ||
      lowerContent.includes("collaboration") ||
      lowerContent.includes("alliance") ||
      lowerContent.includes("joint venture") ||
      lowerContent.includes("strategic agreement") ||
      lowerContent.includes("mou") ||
      lowerContent.includes("memorandum of understanding") ||
      lowerContent.includes("cooperation")
    ) {
      return "Partnership";
    }

    // Financial & Investment Activities
    if (
      lowerContent.includes("treasury") ||
      lowerContent.includes("investment") ||
      lowerContent.includes("acquisition") ||
      lowerContent.includes("purchase") ||
      lowerContent.includes("funding") ||
      lowerContent.includes("financing") ||
      lowerContent.includes("capital") ||
      lowerContent.includes("equity") ||
      lowerContent.includes("debt") ||
      lowerContent.includes("revenue") ||
      lowerContent.includes("earnings") ||
      lowerContent.includes("financial results")
    ) {
      return "Financial";
    }

    // Market & Trading
    if (
      lowerContent.includes("price") ||
      lowerContent.includes("market") ||
      lowerContent.includes("trading") ||
      lowerContent.includes("stock") ||
      lowerContent.includes("nasdaq") ||
      lowerContent.includes("share") ||
      lowerContent.includes("valuation") ||
      lowerContent.includes("bullish") ||
      lowerContent.includes("bearish") ||
      lowerContent.includes("volatility")
    ) {
      return "Market Analysis";
    }

    // Speaking & Events
    if (
      lowerContent.includes("speak") ||
      lowerContent.includes("summit") ||
      lowerContent.includes("conference") ||
      lowerContent.includes("event") ||
      lowerContent.includes("presentation") ||
      lowerContent.includes("keynote") ||
      lowerContent.includes("panel") ||
      lowerContent.includes("webinar") ||
      lowerContent.includes("vatican") ||
      lowerContent.includes("world changers")
    ) {
      return "Events";
    }

    // Healthcare & Biotech
    if (
      lowerContent.includes("healthcare") ||
      lowerContent.includes("biotech") ||
      lowerContent.includes("cancer") ||
      lowerContent.includes("therapeutics") ||
      lowerContent.includes("clinical") ||
      lowerContent.includes("drug") ||
      lowerContent.includes("treatment") ||
      lowerContent.includes("medical") ||
      lowerContent.includes("pharmaceutical") ||
      lowerContent.includes("oncology")
    ) {
      return "Healthcare";
    }

    // Corporate Governance & Compliance
    if (
      lowerContent.includes("governance") ||
      lowerContent.includes("compliance") ||
      lowerContent.includes("regulatory") ||
      lowerContent.includes("sec") ||
      lowerContent.includes("filing") ||
      lowerContent.includes("disclosure") ||
      lowerContent.includes("board") ||
      lowerContent.includes("executive") ||
      lowerContent.includes("leadership") ||
      lowerContent.includes("corporate")
    ) {
      return "Corporate";
    }

    // Strategic Initiatives & Business Development
    if (
      lowerContent.includes("strategic") ||
      lowerContent.includes("initiative") ||
      lowerContent.includes("expansion") ||
      lowerContent.includes("growth") ||
      lowerContent.includes("development") ||
      lowerContent.includes("ecosystem") ||
      lowerContent.includes("platform") ||
      lowerContent.includes("infrastructure") ||
      lowerContent.includes("innovation") ||
      lowerContent.includes("roadmap")
    ) {
      return "Strategic Initiative";
    }

    // Awards & Recognition
    if (
      lowerContent.includes("award") ||
      lowerContent.includes("recognition") ||
      lowerContent.includes("congratulations") ||
      lowerContent.includes("achievement") ||
      lowerContent.includes("milestone") ||
      lowerContent.includes("honor") ||
      lowerContent.includes("distinction") ||
      lowerContent.includes("accolade")
    ) {
      return "Recognition";
    }

    // Telegram & TON Ecosystem
    if (
      lowerContent.includes("telegram") ||
      lowerContent.includes("ton") ||
      lowerContent.includes("toncoin") ||
      lowerContent.includes("mini app") ||
      lowerContent.includes("ecosystem") ||
      lowerContent.includes("validator") ||
      lowerContent.includes("staking") ||
      lowerContent.includes("network")
    ) {
      return "TON Ecosystem";
    }

    // Default fallback
    return "Press Release";
  }

  cleanDescription(description) {
    // Remove HTML tags and clean up the description
    const cleanDescription = description.replace(/<[^>]*>/g, "");
    const decodedDescription = cleanDescription.replace(
      /&[a-zA-Z0-9#]+;/g,
      (match) => {
        const entities = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
          "&nbsp;": " ",
        };
        return entities[match] || match;
      }
    );

    return decodedDescription.length > 200
      ? decodedDescription.substring(0, 200) + "..."
      : decodedDescription;
  }

  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Recent";
    }
  }

  displayItems() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const itemsToShow = this.allItems.slice(startIndex, endIndex);

    if (itemsToShow.length === 0) {
      this.feedContainer.innerHTML = `
        <div class="text-center py-8">
          <p class="text-gray-400">No news items available at this time.</p>
        </div>
      `;
      return;
    }

    const itemsHTML = itemsToShow
      .map(
        (item) => `
      <div class="news-item bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <div class="flex items-center space-x-3 mb-2">
              <span class="bg-alphaton-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${item.category}
              </span>
              <span class="text-gray-400 text-sm">${item.date}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 hover:text-alphaton-primary transition-colors duration-200">
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="hover:underline">
                ${item.title}
              </a>
            </h3>
            <p class="text-gray-300 leading-relaxed mb-4">${item.description}</p>
          </div>
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-white/10">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" 
             class="read-more-btn group inline-flex items-center space-x-1.5 bg-alphaton-primary/10 hover:bg-alphaton-primary/20 text-alphaton-primary hover:text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border border-alphaton-primary/20 hover:border-alphaton-primary/40">
            <span>Read More</span>
            <svg class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    `
      )
      .join("");

    this.feedContainer.innerHTML = itemsHTML;
  }

  updateLoadMoreButton() {
    if (!this.loadMoreBtn) return;

    const totalItems = this.allItems.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    const currentPage = this.currentPage + 1;

    if (totalPages <= 1) {
      this.loadMoreBtn.style.display = "none";
      return;
    }

    this.loadMoreBtn.style.display = "block";
    this.loadMoreBtn.innerHTML = this.createGlassmorphismPagination(
      currentPage,
      totalPages,
      totalItems
    );
  }

  createGlassmorphismPagination(currentPage, totalPages, totalItems) {
    const startItem = (currentPage - 1) * this.itemsPerPage + 1;
    const endItem = Math.min(currentPage * this.itemsPerPage, totalItems);

    let paginationHTML = `
      <div class="glassmorphism-pagination bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">
        <div class="flex flex-col items-center space-y-4">
          <!-- Page Info -->
          <div class="text-center">
            <p class="text-white/80 text-sm font-medium">
              Showing ${startItem}-${endItem} of ${totalItems} articles
            </p>
          </div>
          
          <!-- Pagination Controls -->
          <div class="flex items-center space-x-2">
    `;

    // Previous Button
    if (currentPage > 1) {
      paginationHTML += `
        <button onclick="rssFeed.goToPage(${currentPage - 1})" 
                class="glassmorphism-btn bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      `;
    }

    // Page Numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page + ellipsis
    if (startPage > 1) {
      paginationHTML += `
        <button onclick="rssFeed.goToPage(1)" 
                class="glassmorphism-btn bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-3 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm">
          1
        </button>
      `;
      if (startPage > 2) {
        paginationHTML += `<span class="text-white/40 px-2">...</span>`;
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      paginationHTML += `
        <button onclick="rssFeed.goToPage(${i})" 
                class="glassmorphism-btn ${
                  isActive
                    ? "bg-alphaton-primary/30 border-alphaton-primary/50 text-white"
                    : "bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/30 text-white/80"
                } px-3 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border">
          ${i}
        </button>
      `;
    }

    // Ellipsis + last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationHTML += `<span class="text-white/40 px-2">...</span>`;
      }
      paginationHTML += `
        <button onclick="rssFeed.goToPage(${totalPages})" 
                class="glassmorphism-btn bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-3 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm">
          ${totalPages}
        </button>
      `;
    }

    // Next Button
    if (currentPage < totalPages) {
      paginationHTML += `
        <button onclick="rssFeed.goToPage(${currentPage + 1})" 
                class="glassmorphism-btn bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      `;
    }

    paginationHTML += `
          </div>
        </div>
      </div>
    `;

    return paginationHTML;
  }

  goToPage(pageNumber) {
    this.currentPage = pageNumber - 1;
    this.displayItems();
    this.updateLoadMoreButton();

    // Smooth scroll to top of news section
    const newsSection = document.querySelector("#rss-feed-content");
    if (newsSection) {
      newsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  init() {
    if (this.feedContainer) {
      this.loadRSSFeed();

      if (this.loadMoreBtn) {
        this.loadMoreBtn.addEventListener("click", () => {
          this.loadMore();
        });
      }
    }
  }
}

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", async function () {
  // Initialize navbar
  const navbar = new NavbarComponent();
  await navbar.render();

  // Initialize footer
  const footer = new FooterComponent();
  await footer.render();

  // Initialize RSS feed if on news page
  if (document.getElementById("rss-feed-content")) {
    window.rssFeed = new RSSFeedComponent();
    rssFeed.init();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
