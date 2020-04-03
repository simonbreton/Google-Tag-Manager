// Measure adding a product to a shopping cart by using an 'add' actionFieldObject
// and a list of productFieldObjects.
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'addToCart',
  'currencyCode': 'EUR',          // 'add' actionFieldObject measures.
  'products': [{                        //  adding a product to a shopping cart.
    'product_name': 'Triblend Android T-Shirt',
    'product_id': '12345',
    'product_price': '15.25',
    'product_brand': 'Google',
    'product_category': 'Apparel',
    'product_variant': 'Gray',
    'product_quantity': 1
  }]
});