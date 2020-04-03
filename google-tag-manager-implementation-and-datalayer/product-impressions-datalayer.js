// Measures product impressions and also tracks a standard
// pageview for the tag configuration.
// Product impressions are sent by pushing an impressions object
// containing one or more impressionFieldObjects.

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event':'impressions'
  'currencyCode': 'EUR',
  'impressions': '3',     // number of impressions                      
  'product_impressions': [
     {
       'product_name': 'Triblend Android T-Shirt',       // Name or ID is required.
       'product_id': '12345',
       'product_price': '15.25',
       'product_brand': 'Google',
       'product_category': 'Apparel',
       'product_variant': 'Gray',
       'list': 'Search Results',   // where product impressions occured.
       'product_position': 1     // Position of the product within the list.   
     },
     {
       'product_name': 'Donut Friday Scented T-Shirt',
       'product_id': '67890',
       'product_price': '33.75',
       'product_brand': 'Google',
       'product_category': 'Apparel',
       'product_variant': 'Black',
       'list': 'Search Results',
       'product_position': 2
     }]
  }
});