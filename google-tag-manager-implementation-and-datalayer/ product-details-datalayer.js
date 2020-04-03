// Measure a view of product details. This example assumes the detail view occurs on pageload,
// and also tracks a standard pageview of the details page.
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'list': 'Apparel Gallery',    // 'detail' actions have an optional list property.
  'products': [{
    'product_name': 'Triblend Android T-Shirt',         // Name or ID is required.
    'product_id': '12345',
    'product_price': '15.25',
    'product_brand': 'Google',
    'product_category': 'Apparel',
    'product_variant': 'Gray'
  }]
});