// const gizmo = {start: 10, end: 6, location: "remote", type: "wdi"};
//
// //console log each value in the object.
//
// Object.keys(gizmo).forEach(function(key){
//   let value = gizmo[key]
//   console.log(value);
// })
//
// //console log both the key and value.
//
// Object.keys(gizmo).forEach(function(key){
//   console.log(key, gizmo[key]);
// })

// const arr = [[8, 8], ["eight", "eight"], ["ate"]];
//
// var flat = arr.reduce((a, b) => {
//   return a.concat(b);
// }, []);
//
// console.log(flat);


const stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

const filteredStockSymbols = stocks.filter(function(stock) {
  // create a new variable called filteredStockSymbols to create new array that only contains the objects with a price above 150 (hint: use filter).
  return stock.price >= 150.00;
}).map(function(stock) {
  // use the iterator pipeline (chaining) to make filteredStockSymbols contain only the stock symbol of these filtered objects (hint: use map).
  return stock.symbol;
}).forEach(function(symbol) {
  // continue using the pipeline and console log each of the symbols from the filteredStockSymbol array.
  console.log(symbol);
});
