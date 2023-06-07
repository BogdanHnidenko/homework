// BASE
const candy = 15.678;
const cheese = 123.965;
const milk = 90.2345;

let products = [candy, cheese, milk];
let max = Math.max(...products);
let min = Math.min(...products);
document.writeln('Max price: ' + max);
document.writeln('Min price: ' + min);

let price = Number(candy + cheese + milk);
document.writeln('Sum of price: ' + price);

let integers = Number(Math.trunc(candy) + Math.trunc(cheese) + Math.trunc(milk))
document.writeln('Sum of integers: ' + integers);

let roundPrice = Math.round(price / 100) * 100;
document.writeln('Round price: ' + roundPrice);

let floorPrice = Math.floor(price);
document.writeln('Floor price: ' + floorPrice);

let isEven = (floorPrice % 2) == 0;
document.writeln('Boolean: ' + isEven);

let remainder = 500 - price;
document.writeln('Remainder: ' + remainder);

let valueSum = (price / products.length).toFixed(2);
document.writeln('Value Sum: ' + valueSum);

// HARD
let randomSale = (Math.random() * 100).toFixed(0);
document.writeln('Random sale: ' + randomSale);

let salePrice = (price - price * randomSale / 100).toFixed(2);
document.writeln('Sale price: ' + salePrice);

let priceOfProfit = (price / 2 - (price * randomSale / 100)).toFixed(2);
document.writeln('Profit: ' + priceOfProfit);

// ADVANCED
let allString = `
Max price: ${max}
Min price: ${min}
Sum of products: ${price}
Sum of integers: ${integers}
Round price: ${roundPrice}
Floor price: ${floorPrice}
Boolean: ${isEven}
Remainder: ${remainder}
Value Sum: ${valueSum}
Random sale: ${randomSale}
Sale price: ${salePrice}
Profit: ${priceOfProfit}
`;
console.log(allString);