export default {
  name: 'prestation',
  type: 'document',
  title: 'Prestation',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre de la prestation',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }],
    },
  ],
}