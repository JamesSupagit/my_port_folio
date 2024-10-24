import React, { useEffect, useRef, memo } from 'react';
import styled from 'styled-components';

// Define the styled Container
export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  .tradingview-widget-container {
    background-color: #111; // Dark background for the widget
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 1000px; // Max width for the widget to make it centered
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: var(--green);
  }

  @media only screen and (max-width: 480px) {
    .tradingview-widget-container {
      max-width: 100%;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          ["Apple", "AAPL|1D"],
          ["Google", "GOOGL|1D"],
          ["NASDAQ:NVDA|1D"],
          ["COINBASE:BTCUSD|1D"],
          ["OANDA:XAUUSD|1D"]
        ],
        "chartOnly": false,
        "width": 1000,
        "height": 500,
        "locale": "en",
        "colorTheme": "dark",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "headerFontSize": "medium",
        "backgroundColor": "rgba(8, 8, 8, 1)",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current.innerHTML = ''; // Cleanup
      }
    };
  }, []);

  return (
    <Container>
      <h2>My Favorite Symbol</h2>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </Container>
  );
};

export default memo(TradingViewWidget);
