var cart = [
    { id: 1, name: "iphone 16", price: 164000, qty: 1 },
    { id: 2, name: "iphone 15", price: 84000, qty: 2 },
  ];
  
  const totalPrice = cart.reduce(function (sum, item) {
    return sum + item.price * item.qty;
  }, 0);
  console.log(totalPrice);