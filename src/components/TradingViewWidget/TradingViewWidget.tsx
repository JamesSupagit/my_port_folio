// TradingViewWidget.tsx
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

const WidgetContainer = styled.div`
  width: 100%; // Ensure the widget container takes full width
`;

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null); // Type the ref correctly

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "980",
      "height": "610",
      "symbol": "COINBASE:BTCUSD",
      "interval": "15",
      "timezone": "Asia/Bangkok",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "backgroundColor": "rgba(0, 0, 0, 1)",
      "hide_top_toolbar": true,
      "allow_symbol_change": true,
      "calendar": false,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "support_host": "https://www.tradingview.com"
    });

    // Check if the container is available before appending the script
    if (container.current) {
      // Remove existing widget if it exists
      const existingWidget = container.current.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');
      if (existingWidget) {
        container.current.removeChild(existingWidget);
      }

      container.current.appendChild(script);
    }

    // Cleanup function to remove the script on component unmount
    return () => {
      if (container.current) {
        const widgetScript = container.current.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');
        if (widgetScript) {
          container.current.removeChild(widgetScript);
        }
      }
    };
  }, []);

  return (
    <Container>
      <h2>TradingView Chart</h2>
      <WidgetContainer ref={container} className="tradingview-widget-container"></WidgetContainer>
    </Container>
  );
}

export default memo(TradingViewWidget);
