const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Coffee Maker", price: 100, category: "Home Appliances" },
  { name: "Desk Maker", price: 100, category: "Home Appliances" },
  { name: "Mixer", price: 150, category: "Home Appliances" },
  { name: "Desk Chair", price: 200, category: "Furniture" }
];
const productName = products.map(product => product.name)
console.log(productName);
// foreach
products.forEach(product => console.log(product.name))

// filter
const Electronics = products.filter(product => product.category === 'Electronics')
// console.log(Electronics);

const affordableHomeAppliancefilter = products.filter(product => product.category === "Home Appliances" && product.price < 150);
console.log(affordableHomeAppliancefilter);

// find
const affordableHomeAppliance = products.find(product => product.category === "Home Appliances" && product.price < 150);
console.log(affordableHomeAppliance);



