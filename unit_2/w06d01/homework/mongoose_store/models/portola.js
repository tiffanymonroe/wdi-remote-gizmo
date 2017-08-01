const mongoose = require('mongoose');

const portola = [
  {
    name: "Elida Honey",
    description: "Stewed Peaches, Black Cherry, Vanilla, Candied Lemon",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/566630a1d82d5ed3d73b6434/1449538175635/108_EHLOT5.jpg?format=1000w",
    price: 20,
    qty: 0
  },
  {
    name: "Elida Natural",
    description:"Black Currant, Mango, Orange Blossom, Cocoa",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/566632459cadb6bd7433a0c8/1449538164720/108_ENLOT26.jpg?format=1000w",
    price: 20,
    qty: 0
  },
  {
    name: "Terra Incognita - Espresso Blend",
    description: "Floral, cane sugar; ripe red fruit, dark chocolate, caramel, and dried stone fruit",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/566634f85a56681efd48e08f/1449538828264/108_terraincog.jpg?format=1000w",
    price: 16,
    qty: 100
  },
  {
    name: "Alchemist",
    description: "Baker's Chocolate, Dried Red Fruit, Toasted Almonds and Spice",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/5666374b0ab3770764d303c7/1449539407454/108_alchem.jpg?format=1000w",
    price: 16,
    qty: 100
  },
  {
    name: "Decaf Sumatra Mandheling",
    description: "Dark fruit, earthy, chocolate, sweet herb",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/566638b4b204d5891f094b28/1449539764330/108_decafsum.jpg?format=1000w",
    price: 17,
    qty: 50
  },
  {
    name: "El Burro - Honey Geisha",
    description: "Pineapple, peach, rainier cherry, jasmine, cane sugar",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/56d2379701dbae76ad91a46a/1456618057787/El+Burro+Honey.jpg?format=2500w",
    price: 40,
    qty: 0
  },
  {
    name: "La Milagrosa 'Mixto'",
    description: "Red Plum, Apricot, Caramel, Almond, Milk Chocolate",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/56d23c527da24f7ba20abd32/1456618582324/DSC06546.JPG?format=2500w",
    price: 16,
    qty: 0
  },
  {
    name: "La Milagrosa Geisha",
    description: "Red Plum, Apricot, Caramel, Almond, Milk Chocolate",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/56d24722c6fc087c73fb4ba0/1456621349584/La+Milagrosa+Geisha1.jpg?format=2500w",
    price: 30,
    qty: 25
  },
  {
    name: "Kiamabara AA",
    description: "Merlot, Cranberry, Pineapple, Oolong Tea, Milk Chocolate",
    img: "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/5642d782e4b0b66656be5260/583de8bc197aea2450150409/1499182984630/kiamabara_web.jpg?format=2500w",
    price: 20,
    qty: 25
  }
];

module.exports = portola;
