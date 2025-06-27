'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function EnConstruction() {
  return (
    <motion.div
      className="h-100 flex flex-col justify-items-center mt-5 justify-content-center text-center px-4 py-5 rounded-3 border-0 shadow-sm bg-light"
      style={{ height: "150vh", }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Image
          src="/images/construction.jpg"
          alt="Page en construction"
          width={200}
          height={200}
          className="mb-6"
        />
      </motion.div>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        Page en cours de développement
      </motion.h2>

      <motion.p
        className="text-gray-600 text-base md:text-lg mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        Cette section sera bientôt disponible. Merci pour votre patience !
      </motion.p>

      {/* Bouton animé */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link href="/" className="bg-pink-600 hover:bg-pink-700 text-pink rounded-5 lead p-2 text-decoration-none font-medium px-6 py-3 rounded-full shadow-lg transition">
          Retour à l’accueil
        </Link>
      </motion.div>
      
    </motion.div>
  )
}