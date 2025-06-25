import { sanity } from './sanity'

export const getMessages = async () => {
  return await sanity.fetch(`
    *[_type == "message"] | order(date desc){
      _id,
      titre,
      contenu,
      type,
      date
    }
  `)
}