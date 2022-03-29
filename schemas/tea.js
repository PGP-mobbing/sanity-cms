export default {
  name: 'tea',
  title: 'Tea',
  type: 'document',

  fields: [
    { name: 'title', title: 'Title', type: 'string' }, 
    { name: 'tagline', title: 'Tagline', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'stock', title: 'Stock', type: 'number' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 100 } },
    { name: 'details', title: 'Details', type: 'document', 
      fields: [
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'ingredients', title: 'Ingredients', type: 'array', of: [{ type: 'string' }] },
        { name: 'intructions', title: 'Instructions', type: 'text' },
        { name: 'caffeine', title: 'Caffeine', type: 'number' },
      ] },
  ]
}
