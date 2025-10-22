/* AlphaTON Capital IR Website - Homepage Specific JavaScript */

// Environment-based API Configuration for ATON stock data
const API_CONFIG = {
  // Primary API: Polygon.io (excellent for newer listings like ATON)
  POLYGON: {
    BASE_URL: "https://api.polygon.io/v2",
    // API key should be set via environment variable or server-side proxy
    API_KEY:
      window.ALPHATON_API_KEYS?.POLYGON || "ZHWLHcDebVSrHAxvIM5jCHwcw2hiReTD",
    ENABLED: true,
    PRIORITY: 1, // Highest priority - most likely to have ATON
  },

  // Secondary API: Alpha Vantage (as fallback)
  ALPHA_VANTAGE: {
    BASE_URL: "https://www.alphavantage.co/query",
    // API key should be set via environment variable or server-side proxy
    API_KEY: window.ALPHATON_API_KEYS?.ALPHA_VANTAGE || "WV9LXP7ACKWPOG6B",
    ENABLED: true,
    PRIORITY: 2,
  },

  // Stock symbol for AlphaTON Capital Corp.
  STOCK_SYMBOL: "ATON",

  // Chart configuration
  CHART_CONFIG: {
    DEFAULT_TIMEFRAME: "1D",
    REFRESH_INTERVAL: 60000, // 1 minute in milliseconds
    MAX_DATA_POINTS: {
      "1D": 78, // ~6.5 hours of 5min data
      "5D": 5, // 5 trading days
      "1M": 30, // 30 trading days
      "3M": 90, // 90 trading days
    },
  },
};

// Security warning for production
if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  console.warn(
    "API keys are exposed in client-side code. Consider using server-side proxy for production."
  );
}

// Stock Chart Component
class StockChart {
  constructor() {
    // Load API configuration
    this.symbol = API_CONFIG.STOCK_SYMBOL;
    this.chart = null;
    this.currentTimeframe = API_CONFIG.CHART_CONFIG.DEFAULT_TIMEFRAME;
    this.chartData = null;
    this.currentApiSource = null;
    this.cachedData = null; // Store last successful API response
    this.cacheTimestamp = null; // When the cache was created
    this.cacheExpiryMinutes = 30; // Cache expires after 30 minutes

    console.log("StockChart initialized with:", {
      symbol: this.symbol,
      timeframe: this.currentTimeframe,
    });

    this.init();
  }

  init() {
    // Load initial data when DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.loadStockData());
    } else {
      this.loadStockData();
    }
  }

  // Cache management methods
  saveToCache(data, apiSource) {
    this.cachedData = {
      data: data,
      apiSource: apiSource,
      timeframe: this.currentTimeframe,
      timestamp: new Date(),
    };
    this.cacheTimestamp = new Date();
    console.log(
      `Cached data from ${apiSource} for timeframe ${this.currentTimeframe}`
    );
  }

  isCacheValid() {
    if (!this.cachedData || !this.cacheTimestamp) {
      return false;
    }

    const now = new Date();
    const cacheAge = (now - this.cacheTimestamp) / (1000 * 60); // Age in minutes

    return cacheAge < this.cacheExpiryMinutes;
  }

  loadFromCache() {
    if (!this.isCacheValid()) {
      console.log("Cache expired or not available");
      return false;
    }

    console.log(
      `Loading cached data from ${this.cachedData.apiSource} (${Math.round(
        (new Date() - this.cacheTimestamp) / (1000 * 60)
      )} minutes old)`
    );

    this.chartData = this.cachedData.data;
    this.currentApiSource = this.cachedData.apiSource;

    // Update price display with cached data
    this.updatePriceDisplay();

    this.hideLoading();
    this.renderChart();

    return true;
  }

  loadDemoData() {
    console.log("Loading demo data for ATON chart testing");

    // Generate realistic demo data for ATON
    const now = new Date();
    const dataPoints = [];
    let basePrice = 12.45; // Starting price

    // Generate data for the selected timeframe
    let pointCount = 0;
    let intervalMinutes = 0;

    switch (this.currentTimeframe) {
      case "1D":
        pointCount = 78; // ~6.5 hours of 5min data
        intervalMinutes = 5;
        break;
      case "5D":
        pointCount = 5;
        intervalMinutes = 1440; // 1 day
        break;
      case "1M":
        pointCount = 30;
        intervalMinutes = 1440; // 1 day
        break;
      case "3M":
        pointCount = 90;
        intervalMinutes = 1440; // 1 day
        break;
      default:
        pointCount = 78;
        intervalMinutes = 5;
    }

    for (let i = 0; i < pointCount; i++) {
      const timestamp = new Date(
        now.getTime() - (pointCount - i) * intervalMinutes * 60 * 1000
      );

      // Add some realistic price movement
      const change = (Math.random() - 0.5) * 0.1; // ±0.05 price change
      basePrice += change;

      const open = basePrice;
      const high = basePrice + Math.random() * 0.05;
      const low = basePrice - Math.random() * 0.05;
      const close = basePrice + (Math.random() - 0.5) * 0.02;

      dataPoints.push({
        timestamp: timestamp.toISOString(),
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: Math.floor(Math.random() * 100000) + 50000,
      });

      basePrice = close; // Next candle starts where this one closed
    }

    this.chartData = dataPoints;
    this.currentApiSource = "DEMO_DATA";

    // Update price display with demo data
    const latestData = dataPoints[dataPoints.length - 1];
    const previousData = dataPoints[dataPoints.length - 2];
    const change = latestData.close - previousData.close;
    const changePercent = (change / previousData.close) * 100;

    document.getElementById(
      "current-price"
    ).textContent = `$${latestData.close.toFixed(2)}`;
    document.getElementById("price-change").textContent = `${
      change >= 0 ? "+" : ""
    }${change.toFixed(2)} (${
      changePercent >= 0 ? "+" : ""
    }${changePercent.toFixed(2)}%)`;
    document.getElementById("price-change").className =
      change >= 0
        ? "text-green-400 font-semibold"
        : "text-red-400 font-semibold";
    document.getElementById(
      "last-updated"
    ).textContent = `Last updated: ${new Date().toLocaleTimeString()} (Demo Data)`;

    this.hideLoading();
    this.renderChart();

    console.log("Demo data loaded successfully");
  }

  async loadStockData() {
    try {
      this.showLoading();

      // Try APIs in priority order
      const apis = this.getEnabledApis();

      for (const api of apis) {
        try {
          console.log(`Trying API: ${api.name}`);
          this.currentApiSource = api.name;

          if (api.name === "POLYGON") {
            await this.fetchPolygonData();
          } else if (api.name === "ALPHA_VANTAGE") {
            await this.fetchAlphaVantageData();
          }

          this.updatePriceDisplay();
          this.renderChart();
          this.hideLoading();

          // Save successful data to cache
          this.saveToCache(this.chartData, api.name);

          console.log(`Successfully loaded data from ${api.name}`);
          return;
        } catch (error) {
          console.warn(`${api.name} failed:`, error.message);

          // If Alpha Vantage fails due to rate limit, try switching to daily data
          if (
            api.name === "ALPHA_VANTAGE" &&
            error.message.includes("rate limit") &&
            this.currentTimeframe === "1D"
          ) {
            console.log(
              "Rate limit hit on intraday, trying daily data instead"
            );
            this.currentTimeframe = "5D";
            try {
              await this.fetchAlphaVantageData();
              this.updatePriceDisplay();
              this.renderChart();
              this.hideLoading();

              // Save successful fallback data to cache
              this.saveToCache(this.chartData, api.name);

              console.log(
                `Successfully loaded daily data from ${api.name} after rate limit`
              );
              return;
            } catch (fallbackError) {
              console.warn(
                "Daily data fallback also failed:",
                fallbackError.message
              );
            }
          }

          continue;
        }
      }

      // If all APIs fail, try to load from cache
      console.log("All APIs failed, checking for cached data...");

      if (this.loadFromCache()) {
        console.log("Successfully loaded cached data");
        return;
      }

      // If no valid cache, show error
      throw new Error("All data sources failed and no valid cache available");
    } catch (error) {
      console.error("Error loading stock data:", error);
      this.showError();
    }
  }

  getEnabledApis() {
    const apis = [];

    if (API_CONFIG.POLYGON.ENABLED && API_CONFIG.POLYGON.API_KEY) {
      apis.push({ name: "POLYGON", priority: API_CONFIG.POLYGON.PRIORITY });
    }

    if (API_CONFIG.ALPHA_VANTAGE.ENABLED) {
      apis.push({
        name: "ALPHA_VANTAGE",
        priority: API_CONFIG.ALPHA_VANTAGE.PRIORITY,
      });
    }

    return apis.sort((a, b) => a.priority - b.priority);
  }

  async fetchPolygonData() {
    // Polygon.io implementation for historical data
    const interval = this.getPolygonInterval();
    const timespan = this.getPolygonTimespan();
    const from = this.getPolygonFromDate();
    const to = this.getPolygonToDate();

    const url = `${API_CONFIG.POLYGON.BASE_URL}/aggs/ticker/${this.symbol}/range/1/${timespan}/${from}/${to}?adjusted=true&sort=asc&apikey=${API_CONFIG.POLYGON.API_KEY}`;

    console.log("Fetching Polygon data from:", url);

    const response = await fetch(url);

    if (response.status === 429) {
      throw new Error(
        "Polygon.io API rate limit exceeded. Please wait a few minutes before trying again."
      );
    }

    if (!response.ok) {
      throw new Error(`Polygon API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Polygon Response:", data);

    if (!data.results || data.results.length === 0) {
      throw new Error("No data available from Polygon");
    }

    this.chartData = this.processPolygonData(data.results);

    if (!this.chartData || this.chartData.length === 0) {
      throw new Error("No processed data available from Polygon");
    }
  }

  getPolygonInterval() {
    switch (this.currentTimeframe) {
      case "1D":
        return "1"; // 1 minute intervals for 1D
      case "5D":
        return "1"; // 1 day intervals for 5D
      case "1M":
        return "1"; // 1 day intervals for 1M
      case "3M":
        return "1"; // 1 day intervals for 3M
      default:
        return "1";
    }
  }

  getPolygonTimespan() {
    switch (this.currentTimeframe) {
      case "1D":
        return "minute";
      case "5D":
        return "day";
      case "1M":
        return "day";
      case "3M":
        return "day";
      default:
        return "day";
    }
  }

  getPolygonFromDate() {
    const now = new Date();
    switch (this.currentTimeframe) {
      case "1D":
        // 1 day ago
        return new Date(now.getTime() - 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
      case "5D":
        // 5 days ago
        return new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
      case "1M":
        // 1 month ago
        return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
      case "3M":
        // 3 months ago
        return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
      default:
        return new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
    }
  }

  getPolygonToDate() {
    return new Date().toISOString().split("T")[0];
  }

  processPolygonData(polygonResults) {
    console.log("Processing Polygon data:", polygonResults.slice(0, 3)); // Log first 3 results

    const processedData = polygonResults.map((result) => ({
      timestamp: new Date(result.t).toISOString(),
      open: result.o,
      high: result.h,
      low: result.l,
      close: result.c,
      volume: result.v,
    }));

    console.log("Processed data:", processedData.slice(0, 3)); // Log first 3 processed results
    return processedData;
  }

  async fetchAlphaVantageData() {
    const functionType = this.getFunctionType();
    let url = `${API_CONFIG.ALPHA_VANTAGE.BASE_URL}?function=${functionType}&symbol=${this.symbol}&apikey=${API_CONFIG.ALPHA_VANTAGE.API_KEY}&outputsize=compact`;

    // Add interval parameter for intraday data
    if (functionType === "TIME_SERIES_INTRADAY") {
      url += "&interval=5min";
    }

    console.log("Fetching Alpha Vantage data from:", url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Alpha Vantage API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Alpha Vantage Response:", data);

    if (data["Error Message"]) {
      throw new Error(data["Error Message"]);
    }

    if (data["Note"]) {
      console.warn("Alpha Vantage rate limit hit:", data["Note"]);
      throw new Error(
        "Alpha Vantage API rate limit exceeded. Please try again in a few minutes."
      );
    }

    if (data["Information"]) {
      console.warn("Alpha Vantage info message:", data["Information"]);
      // Check if this is a rate limit message
      if (
        data["Information"].includes("rate limit") ||
        data["Information"].includes("premium")
      ) {
        throw new Error(
          "Alpha Vantage API rate limit exceeded. Please try again in a few minutes."
        );
      }
    }

    this.chartData = this.processAlphaVantageData(data);

    if (!this.chartData || this.chartData.length === 0) {
      throw new Error("No data available for the selected timeframe");
    }
  }

  getFunctionType() {
    switch (this.currentTimeframe) {
      case "1D":
        return "TIME_SERIES_INTRADAY";
      case "5D":
      case "1M":
      case "3M":
      default:
        return "TIME_SERIES_DAILY";
    }
  }

  processAlphaVantageData(data) {
    let timeSeriesKey;

    if (this.currentTimeframe === "1D") {
      timeSeriesKey = "Time Series (5min)";
    } else {
      timeSeriesKey = "Time Series (Daily)";
    }

    const timeSeries = data[timeSeriesKey];
    if (!timeSeries) return null;

    const processedData = [];
    const entries = Object.entries(timeSeries);

    // Sort by date (newest first)
    entries.sort((a, b) => new Date(b[0]) - new Date(a[0]));

    // Limit data points based on timeframe
    const maxPoints =
      API_CONFIG.CHART_CONFIG.MAX_DATA_POINTS[this.currentTimeframe] ||
      entries.length;
    const limit = Math.min(maxPoints, entries.length);

    // Take the most recent data points and reverse for chronological order
    const limitedEntries = entries.slice(0, limit).reverse();

    limitedEntries.forEach(([timestamp, values]) => {
      processedData.push({
        timestamp: timestamp,
        open: parseFloat(values["1. open"]),
        high: parseFloat(values["2. high"]),
        low: parseFloat(values["3. low"]),
        close: parseFloat(values["4. close"]),
        volume: parseInt(values["5. volume"]),
      });
    });

    return processedData;
  }

  updatePriceDisplay() {
    if (!this.chartData || this.chartData.length === 0) return;

    const latestData = this.chartData[this.chartData.length - 1];
    const previousData =
      this.chartData.length > 1
        ? this.chartData[this.chartData.length - 2]
        : latestData;

    const currentPrice = latestData.close;
    const previousPrice = previousData.close;
    const change = currentPrice - previousPrice;
    const changePercent = (change / previousPrice) * 100;

    // Update price display
    const priceElement = document.getElementById("current-price");
    const changeElement = document.getElementById("price-change");
    const updatedElement = document.getElementById("last-updated");

    if (priceElement) {
      priceElement.textContent = `$${currentPrice.toFixed(2)}`;
    }

    if (changeElement) {
      const changeText = `${change >= 0 ? "+" : ""}${change.toFixed(2)} (${
        changePercent >= 0 ? "+" : ""
      }${changePercent.toFixed(2)}%)`;
      changeElement.textContent = changeText;
      changeElement.className =
        change >= 0
          ? "text-green-400 font-semibold"
          : "text-red-400 font-semibold";
    }

    if (updatedElement) {
      const now = new Date();
      updatedElement.textContent = `Last updated: ${now.toLocaleTimeString()} (via ${
        this.currentApiSource
      })`;
    }
  }

  renderChart() {
    const ctx = document.getElementById("stockChart");
    if (!ctx || !this.chartData) return;

    // Destroy existing chart
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.chartData.map((d) => {
      const date = new Date(d.timestamp);
      if (this.currentTimeframe === "1D") {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      } else {
        return date.toLocaleDateString([], { month: "short", day: "numeric" });
      }
    });

    const prices = this.chartData.map((d) => d.close);

    // Determine if price is generally going up or down for color
    const firstPrice = prices[0];
    const lastPrice = prices[prices.length - 1];
    const isPositive = lastPrice >= firstPrice;

    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Price",
            data: prices,
            borderColor: isPositive ? "#10b981" : "#ef4444", // green or red
            backgroundColor: isPositive
              ? "rgba(16, 185, 129, 0.1)"
              : "rgba(239, 68, 68, 0.1)",
            borderWidth: 2,
            fill: true,
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: isPositive ? "#10b981" : "#ef4444",
            pointHoverBorderColor: "#ffffff",
            pointHoverBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderColor: "#3e7bfa",
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              title: function (context) {
                const dataIndex = context[0].dataIndex;
                const data = this.chart.data.datasets[0].data;
                return `Price: $${data[dataIndex].toFixed(2)}`;
              },
              label: function (context) {
                const dataIndex = context.dataIndex;
                const timestamp = this.chart.data.labels[dataIndex];
                return timestamp;
              },
            },
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
              drawBorder: false,
            },
            ticks: {
              color: "#9ca3af",
              font: {
                size: 11,
              },
              maxTicksLimit: 8,
            },
          },
          y: {
            display: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
              drawBorder: false,
            },
            ticks: {
              color: "#9ca3af",
              font: {
                size: 11,
              },
              callback: function (value) {
                return "$" + value.toFixed(2);
              },
            },
          },
        },
        elements: {
          point: {
            hoverBackgroundColor: "#ffffff",
          },
        },
      },
    });
  }

  showLoading() {
    const loadingElement = document.getElementById("chart-loading");
    const errorElement = document.getElementById("chart-error");

    if (loadingElement) loadingElement.style.display = "flex";
    if (errorElement) errorElement.classList.add("hidden");
  }

  hideLoading() {
    const loadingElement = document.getElementById("chart-loading");
    if (loadingElement) loadingElement.style.display = "none";
  }

  showError() {
    const loadingElement = document.getElementById("chart-loading");
    const errorElement = document.getElementById("chart-error");

    if (loadingElement) loadingElement.style.display = "none";
    if (errorElement) {
      errorElement.classList.remove("hidden");
      // Update error message with more helpful information
      const errorText = errorElement.querySelector("div");
      if (errorText) {
        errorText.innerHTML = `
          <div class="text-sm mb-2">Failed to load ATON stock data</div>
          <div class="text-xs text-gray-400 mb-2">
            API Rate Limits Hit:<br>
            • Polygon.io: 429 Too Many Requests<br>
            • Alpha Vantage: 25 requests/day exceeded<br><br>
            <strong>Solutions:</strong><br>
            • Wait 5-10 minutes before retrying<br>
            • Consider upgrading to premium API plans<br>
            • Previous data will be cached for 30 minutes
          </div>
          <button onclick="loadStockData()" class="text-xs text-alphaton-primary hover:underline mt-1">Retry</button>
        `;
      }
    }
  }

  async updateTimeframe(timeframe) {
    // Update button states
    document.querySelectorAll('[onclick^="updateChart"]').forEach((btn) => {
      btn.className =
        "px-3 py-1 text-xs bg-white/10 text-gray-300 rounded hover:bg-white/20 transition-colors";
    });

    const activeBtn = document.querySelector(
      `[onclick="updateChart('${timeframe}')"]`
    );
    if (activeBtn) {
      activeBtn.className =
        "px-3 py-1 text-xs bg-alphaton-primary/20 text-alphaton-primary rounded hover:bg-alphaton-primary/30 transition-colors";
    }

    this.currentTimeframe = timeframe;
    await this.loadStockData();
  }
}

// Homepage-specific functionality
class HomePageManager {
  constructor() {
    this.stockChart = null;
    this.isInitialized = false;

    console.log("HomePageManager initialized");
    this.init();
  }

  async init() {
    if (this.isInitialized) return;

    try {
      // Initialize stock chart directly (API config is now in same file)
      this.initStockChart();

      this.isInitialized = true;
      console.log("HomePageManager fully initialized");
    } catch (error) {
      console.error("Error initializing HomePageManager:", error);
    }
  }

  initStockChart() {
    if (this.stockChart) return;

    try {
      this.stockChart = new StockChart();
      console.log("Stock chart initialized successfully");
    } catch (error) {
      console.error("Error initializing stock chart:", error);
    }
  }

  // Public methods for global access
  updateChart(timeframe) {
    if (this.stockChart) {
      this.stockChart.updateTimeframe(timeframe);
    }
  }

  loadStockData() {
    if (this.stockChart) {
      this.stockChart.loadStockData();
    }
  }
}

// Global functions for HTML onclick handlers (maintain compatibility)
let homePageManager = null;

function updateChart(timeframe) {
  if (homePageManager) {
    homePageManager.updateChart(timeframe);
  }
}

function loadStockData() {
  if (homePageManager) {
    homePageManager.loadStockData();
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Only initialize on homepage
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === ""
  ) {
    console.log("Initializing homepage-specific functionality");
    homePageManager = new HomePageManager();
  }
});

// Export for potential use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { HomePageManager, StockChart, API_CONFIG };
}
