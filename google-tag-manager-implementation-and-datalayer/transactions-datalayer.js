
// Send transaction data.
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'purchases',
  'order_id': 'T12345',  
  'order_revenue': '35.43',
  'order_tax':'4.90',
  'order_shipping': '5.99',
  'order_coupon': 'SUMMER_SALE',
  'currency': 'USD',   
  'order_products': [{                            // List of productFieldObjects.
    'product_name': 'Product1',     // Name or ID is required.
    'product_id': '12345',
    'product_price': '15.25',
    'product_brand': 'Google',
    'product_category': 'Apparel',
    'product_variant': 'Gray',
    'product_quantity': 1,
    'product_coupon': ''                            // Optional fields may be omitted or set to empty string.
    },
    {
    'product_name': 'Product2',
    'product_id': '67890',
    'product_price': '33.75',
    'product_brand': 'Google',
    'product_category': 'Apparel',
    'product_variant': 'Black',
    'product_quantity': 1
    }]
});