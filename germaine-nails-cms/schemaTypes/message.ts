export default {
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'contenu',
      title: 'Contenu',
      type: 'text',
    },
    {
      name: 'type',
      title: 'Type de message',
      type: 'string',
      options: {
        list: ['annonce', 'promotion', 'événement', 'mise à jour'],
      },
    },
    {
      name: 'date',
      title: 'Date de publication',
      type: 'datetime',
    },
  ],
}