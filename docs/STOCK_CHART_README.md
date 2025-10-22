# AlphaTON Stock Chart Implementation

## Overview

This implementation adds an interactive stock chart for AlphaTON Capital Corp. (NASDAQ: ATON) using the Alpha Vantage API and Chart.js. The chart displays real-time stock data with multiple timeframe options and integrates seamlessly with the existing design system.

## Features

- **Real-time Stock Data**: Fetches live stock data from Alpha Vantage API
- **Interactive Chart**: Built with Chart.js for smooth interactions
- **Multiple Timeframes**: 1D, 5D, 1M, 3M chart options
- **Responsive Design**: Adapts to different screen sizes
- **Loading States**: Shows loading spinners and error handling
- **Price Updates**: Displays current price, change, and percentage
- **Design Integration**: Matches AlphaTON's existing visual style

## Files Added/Modified

### New Files
- `assets/js/stock-chart.js` - Main chart functionality
- `assets/js/api-config.js` - API configuration and settings

### Modified Files
- `index.html` - Updated stock ticker section with chart
- `assets/css/unified.css` - Added chart-specific styles

## Setup Instructions

### 1. Get Alpha Vantage API Key

1. Visit [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. Sign up for a free account
3. Get your API key from the dashboard

### 2. Configure API Key

Edit `assets/js/api-config.js` and replace the demo key:

```javascript
const API_CONFIG = {
    // Replace 'demo' with your actual Alpha Vantage API key
    ALPHA_VANTAGE_API_KEY: 'YOUR_API_KEY_HERE',
    // ... rest of config
};
```

### 3. Test the Implementation

1. Open `index.html` in your browser
2. The chart should load automatically
3. Test different timeframe buttons (1D, 5D, 1M, 3M)
4. Verify price updates and chart interactions

## API Endpoints Used

- **Intraday Data**: `TIME_SERIES_INTRADAY` for 1-day charts
- **Daily Data**: `TIME_SERIES_DAILY` for longer timeframes
- **Symbol**: ATON (AlphaTON Capital Corp.)

## Chart Configuration

### Timeframes
- **1D**: Shows intraday data (5-minute intervals)
- **5D**: Shows last 5 trading days
- **1M**: Shows last 30 trading days  
- **3M**: Shows last 90 trading days

### Styling
- **Colors**: Green for positive, red for negative price movement
- **Theme**: Dark theme matching AlphaTON design
- **Responsive**: Adapts to mobile and desktop screens

## Error Handling

The implementation includes comprehensive error handling:

- **API Rate Limits**: Shows user-friendly messages
- **Network Errors**: Displays retry options
- **Data Validation**: Handles missing or invalid data
- **Loading States**: Shows spinners during data fetch

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: Canvas API, Fetch API, ES6+ JavaScript

## Performance Considerations

- **Data Caching**: Limits API calls with reasonable data points
- **Chart Optimization**: Uses Chart.js performance features
- **Responsive Images**: Adapts chart size to container

## Troubleshooting

### Common Issues

1. **Chart Not Loading**
   - Check API key configuration
   - Verify network connection
   - Check browser console for errors

2. **API Rate Limits**
   - Alpha Vantage free tier has limits
   - Consider upgrading to premium for higher limits

3. **Data Not Updating**
   - Check if API key is valid
   - Verify symbol (ATON) is correct
   - Check Alpha Vantage service status

### Debug Mode

Enable debug logging by adding to `api-config.js`:

```javascript
const API_CONFIG = {
    // ... existing config
    DEBUG: true
};
```

## Future Enhancements

Potential improvements for future versions:

- **Real-time Updates**: WebSocket integration for live data
- **Technical Indicators**: Moving averages, RSI, etc.
- **Volume Charts**: Separate volume visualization
- **Export Features**: Chart image export
- **More Timeframes**: Weekly, yearly options
- **Comparison Charts**: Compare with other stocks

## Support

For issues or questions:

1. Check Alpha Vantage documentation
2. Review Chart.js documentation
3. Check browser console for errors
4. Verify API key and network connectivity

## License

This implementation follows the same license as the main AlphaTON IR website.
