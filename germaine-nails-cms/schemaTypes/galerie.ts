// germaine-nails-cms/schemas/galerie.ts

export default {
  name: 'galerie',
  type: 'document',
  title: 'Galerie',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre de l’image',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texte alternatif',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Catégorie',
      options: {
        list: ['Manucure', 'Pédicure', 'Soins Visage'],
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],
}