
// Global Datalayer. Implement this datalayer on all pages before the GTM container code. 
// snake_case
// pass null value if unknown, undefined, not available etc...
window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 
  'event':  'globalDataLayer',
  'log_in':  'yes',   //or no
  'user_id': 'xxxxx', //null if undefined
  'environement': 'prod', //staging 
  'framework': 'react', //php
  'page_category': 'page template' // or page categorie
  })