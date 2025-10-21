/* AlphaTON Capital IR Website - API Configuration */

// Multi-source API Configuration for ATON stock data
const API_CONFIG = {
  // Primary API: Yahoo Finance (disabled due to CORS issues)
  YAHOO_FINANCE: {
    BASE_URL: "https://query1.finance.yahoo.com/v8/finance/chart",
    ENABLED: false, // CORS issues prevent direct browser access
    PRIORITY: 1,
  },

  // Alternative: Yahoo Finance via different proxy (disabled due to CORS issues)
  YAHOO_FINANCE_ALT: {
    BASE_URL:
      "https://api.allorigins.win/raw?url=" +
      encodeURIComponent("https://query1.finance.yahoo.com/v8/finance/chart"),
    ENABLED: false, // CORS issues prevent direct browser access
    PRIORITY: 2,
  },

  // Secondary API: IEX Cloud (free tier available, good for newer listings)
  IEX_CLOUD: {
    BASE_URL: "https://cloud.iexapis.com/stable",
    API_KEY: "", // Add your IEX Cloud API key here (free tier available)
    ENABLED: false, // Set to true if you get an IEX Cloud API key
    PRIORITY: 2,
  },

  // Primary API: Polygon.io (excellent for newer listings like ATON)
  POLYGON: {
    BASE_URL: "https://api.polygon.io/v2",
    API_KEY: "ZHWLHcDebVSrHAxvIM5jCHwcw2hiReTD",
    ENABLED: true, // Now enabled with your API key
    PRIORITY: 1, // Highest priority - most likely to have ATON
  },

  // Secondary API: Alpha Vantage (as fallback)
  ALPHA_VANTAGE: {
    BASE_URL: "https://www.alphavantage.co/query",
    API_KEY: "WV9LXP7ACKWPOG6B",
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

// Export configuration for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = API_CONFIG;
}
