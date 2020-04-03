/**
 * Call this function when a user clicks on a product link. This function uses the event
 * callback datalayer variable to handle navigation after the ecommerce data has been sent
 * to Google Analytics.
 * @param {Object} productObj An object representing a product.
 */
 window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'productClick',
  'list': 'Search Results', //list of product impressions
  'products': [{
    'product_name': 'name',                      // Name or ID is required.
    'product_id': 'id',
    'product_price': 'price',
    'product_brand': 'brand',
    'product_category': 'cat',
    'product_variant': 'variant',
    'product_position': 'position'   // position of clicked product in the impression list
    }]
  });