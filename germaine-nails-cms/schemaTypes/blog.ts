export default {
  name: 'blog',
  type: 'document',
  title: 'Article de blog',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (URL)',
      options: {
        source: 'titre',
        maxLength: 96,
      },
    },
    {
      name: 'imagePrincipale',
      type: 'image',
      title: 'Image principale',
      options: { hotspot: true },
    },
    {
      name: 'extrait',
      type: 'text',
      title: 'Extrait de l’article',
    },
    {
      name: 'contenu',
      type: 'array',
      title: 'Contenu',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date de publication',
    },
    {
      name: 'auteur',
      type: 'string',
      title: 'Auteur (facultatif)',
    },
    {
      name: 'categorie',
      type: 'string',
      title: 'Catégorie (soins, astuces, promo...)',
    },
  ],
};