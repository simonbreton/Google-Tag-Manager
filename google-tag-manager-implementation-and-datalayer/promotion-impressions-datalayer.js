
// An example of measuring promotion views. This example assumes that
// information about the promotions displayed is available when the page loads.
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event':'Promotion Impressions'
  'promotions': [                     // Array of promoFieldObjects.
    {
    'id': 'JUNE_PROMO13',            // ID or Name is required.
    'name': 'June Sale',
    'creative': 'banner1',
    'position': 'slot1'
    },
    {
    'id': 'FREE_SHIP13',
    'name': 'Free Shipping Promo',
    'creative': 'skyscraper1',
    'position': 'slot2'
  }]
});