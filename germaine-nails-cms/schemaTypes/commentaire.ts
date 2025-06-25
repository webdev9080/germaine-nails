export default {
  name: 'commentaire',
  title: 'Commentaire',
  type: 'document',
  fields: [
    {
      name: 'article',
      title: 'Article lié',
      type: 'reference',
      to: [{ type: 'blog' }],
    },
    {
      name: 'nom',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}