var maxProfit = function (prices: number[]) {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < cheapestPrice) cheapestPrice = price;

    const curProfit = price - cheapestPrice;
    maxProfit = Math.max(curProfit, maxProfit);
  }

  return maxProfit;
};

module.exports = maxProfit;
