export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom du produit',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nom', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'prix',
      title: 'Prix',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: ['vernis', 'diluant', 'chaussures', 'accessoires', 'soins visage', 'autres'],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'disponible',
      title: 'Disponible en stock',
      type: 'boolean',
      initialValue: true,
    },
  ],
}