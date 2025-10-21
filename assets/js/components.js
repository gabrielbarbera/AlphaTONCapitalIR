// Global Navigation Component
class NavbarComponent {
  constructor() {
    this.navbarHTML = `
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

  render(containerId = "navbar-container") {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = this.navbarHTML;
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
    this.footerHTML = `
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
                                <a href="assets/AlphaTON Capital Branding Guide.pdf" target="_blank" rel="noopener noreferrer" class="block text-gray-300 hover:text-alphaton-primary transition-colors duration-200 text-lg py-1">Press Kit</a>
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
                                    <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L8.084 4.126H6.117z"/>
                                    </svg>
                                </a>
                                <a href="https://t.me/AlphaTONCapital" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-alphaton-primary transition-all duration-200 hover:scale-110">
                                    <span class="sr-only">Telegram</span>
                                    <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/alphaton-capital/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-alphaton-primary transition-all duration-200 hover:scale-110">
                                    <span class="sr-only">LinkedIn</span>
                                    <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
  }

  render(containerId = "footer-container") {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = this.footerHTML;
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

    if (
      lowerContent.includes("partnership") ||
      lowerContent.includes("collaboration")
    ) {
      return "Partnership";
    } else if (
      lowerContent.includes("treasury") ||
      lowerContent.includes("investment") ||
      lowerContent.includes("acquisition")
    ) {
      return "Strategic Initiative";
    } else if (
      lowerContent.includes("speak") ||
      lowerContent.includes("summit") ||
      lowerContent.includes("conference")
    ) {
      return "Press Release";
    } else if (
      lowerContent.includes("price") ||
      lowerContent.includes("market") ||
      lowerContent.includes("trading")
    ) {
      return "Market Analysis";
    }

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
             class="read-more-btn group inline-flex items-center space-x-2 bg-alphaton-primary/10 hover:bg-alphaton-primary/20 text-alphaton-primary hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 border border-alphaton-primary/20 hover:border-alphaton-primary/40">
            <span>Read More</span>
            <svg class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
          <div class="text-xs text-gray-500">
            ${item.category}
          </div>
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
    const displayedItems = (this.currentPage + 1) * this.itemsPerPage;
    const remainingItems = totalItems - displayedItems;

    if (displayedItems >= totalItems) {
      this.loadMoreBtn.style.display = "none";
    } else {
      this.loadMoreBtn.style.display = "inline-block";
      this.loadMoreBtn.innerHTML = `
        <span class="flex items-center space-x-2">
          <span>Load More News</span>
          <span class="bg-alphaton-primary/20 text-alphaton-primary px-2 py-1 rounded-full text-xs font-semibold">
            ${remainingItems} more
          </span>
        </span>
      `;
    }
  }

  loadMore() {
    this.currentPage++;

    // Show loading state on button
    if (this.loadMoreBtn) {
      this.loadMoreBtn.disabled = true;
      this.loadMoreBtn.innerHTML = `
        <span class="flex items-center space-x-2">
          <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Loading...</span>
        </span>
      `;
    }

    // Simulate loading delay for better UX
    setTimeout(() => {
      this.displayItems();
      this.updateLoadMoreButton();

      if (this.loadMoreBtn) {
        this.loadMoreBtn.disabled = false;
      }

      // Smooth scroll to show new content
      const newItems = this.feedContainer.querySelectorAll(".news-item");
      if (newItems.length > 0) {
        const lastNewItem = newItems[newItems.length - 1];
        lastNewItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }, 500);
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
document.addEventListener("DOMContentLoaded", function () {
  // Initialize navbar
  const navbar = new NavbarComponent();
  navbar.render();

  // Initialize footer
  const footer = new FooterComponent();
  footer.render();

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
