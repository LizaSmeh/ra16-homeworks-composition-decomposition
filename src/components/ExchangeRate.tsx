/**
 * Курс вылют
 */

interface ExchangeRateProps {
    currencyName: string;
    rate: number;
    yesterdayRate: number;
  }

const ExchangeRate: React.FC<ExchangeRateProps> = ({ currencyName, rate, yesterdayRate }) => {
    const rateChange = rate - yesterdayRate;
    const rateChangePercentage = ((rate - yesterdayRate) / yesterdayRate) * 100;
  
    return (
      <div>
          <strong>{currencyName}:</strong> {rate} ({rateChange.toFixed(2)}{' '}
          {rateChange > 0 ? '▲' : rateChange < 0 ? '▼' : ''}{' '}
          {Math.abs(rateChangePercentage).toFixed(2)}%)
      </div>
    );
  };
  
  export default ExchangeRate;