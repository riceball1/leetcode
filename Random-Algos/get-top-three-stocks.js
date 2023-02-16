function getTopThreeStocks(stocks, prices) {

    const stockData = {}
  
    // sum the average stockData for each
    // since prices is n * m square the time complexity is n * m
    for(let i = 0; i < prices.length; i++) {
      for (let j = 0; j < prices[0].length; j++) {
        // used an object to store the prices based on the stock name
        stockData[stocks[j]] =  stockData.hasOwnProperty(stocks[j]) ? stockData[stocks[j]] + prices[i][j] : prices[i][j]
      }
    }
  
    // turn price sum to the average of the stockData using the stock name 
    for(const price in stockData) {
      const avg = stockData[price] / prices.length;
      stockData[price] = avg;
    }
  
  // sort the array in descending order based on the average value
  const sorted = Object.entries(stockData).sort((a,b) => b[1]-a[1])
  
  // return only the top 3
  return [sorted[0][0], sorted[1][0], sorted[2][0]]
  }
  
  
  const stocks = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA']
  const prices = [[5, 10, 12, 10, 4, 8], [1, 2, 3, 4, 5, 6]]
const prices2 = [[5.8, 10.5, 12.8, 10.8, 4.5, 8.7], [1.6, 2.5, 3.7, 4.2, 5.5, 6.8]]
  
  
  console.log(getTopThreeStocks(stocks, prices)) 
  // [ 'EQIX', 'GOOG', 'ULTA' ]

  console.log(getTopThreeStocks(stocks, prices2))
//   [ 'EQIX', 'ULTA', 'GOOG' ]