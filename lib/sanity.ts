
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: '0k4zazrm',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN, // ← important si dataset privé
})

export const sanityWrite = createClient({
  projectId: '0k4zazrm',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // <- ce token a le droit de créer
})