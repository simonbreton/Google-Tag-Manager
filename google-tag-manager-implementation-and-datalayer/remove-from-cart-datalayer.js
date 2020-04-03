// Measure the removal of a product from a shopping cart.
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'removeFromCart',                            // 'remove' actionFieldObject measures.
  'products': [{                          //  removing a product to a shopping cart.
    'name': 'Triblend Android T-Shirt',
    'id': '12345',
    'price': '15.25',
    'brand': 'Google',
    'category': 'Apparel',
    'variant': 'Gray',
    'quantity': 1
  }]
});