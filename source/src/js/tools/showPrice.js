// Extract Matching Price To The Current Currency Of The Site

export default function showPrice(prices, currentCurrency){
  let found = false;
  let returnValue = "";

  // Looking For Match To Current Currency
  for(const price of prices){
    if(price.currency.label === currentCurrency){
      returnValue = `${price.currency.symbol}${price.amount}`;
      found = true;
      break;

    }

  }

  // ? No Match For Current Currency
  // Fallback To The First Currency In The Product Prices Array
  if(found === false){
    returnValue =
    <>
      {prices[0].currency.symbol}
      {prices[0].amount}
      <span className="notAvailableCurrency">(Not Available In: {currentCurrency})</span>
    </>;

  }

  return returnValue;

}
