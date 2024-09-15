import ExchangeRate from "./ExchangeRate";

/**
 * Список курса вылют
 */

const currencyRates = [
    { currencyName: 'USD MOEX', rate: 63.52, yesterdayRate: 62.02 },
    { currencyName: 'EUR MOEX', rate: 70.86, yesterdayRate: 69.52 },
    { currencyName: 'Нефть', rate: 64.90, yesterdayRate: 70.00 },
  ];

const ExchangeRateList = () => {
    return (
      <div>
        {currencyRates.map((currency, index) => (
          <ExchangeRate key={index} {...currency} />
        ))}
      </div>
    );
  };
  
  export default ExchangeRateList;