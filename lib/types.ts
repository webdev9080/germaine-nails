export interface Message {
  _id: string
  titre: string
  contenu: string
  type: string // 'annonce' | 'promotion' | 'événement' | 'mise à jour'
  date: string
}