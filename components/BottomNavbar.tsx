'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaRegNewspaper, FaComments, FaShoppingBag } from 'react-icons/fa'

interface BadgeMap {
  [key: string]: number
}

const BottomNavbar = () => {
  const pathname = usePathname()

  const [badges, setBadges] = useState<BadgeMap>({
    blog: 0,
    messages: 0,
    shop: 0,
  })

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch('/api/blogs')
      const blogs = await res.json()
      const currentIds = blogs.map((a: any) => a._id)
      const read = localStorage.getItem('readBlogIds')
      const readIds = read ? JSON.parse(read) : []
      const newItems = currentIds.filter((id: string) => !readIds.includes(id))
      setBadges((prev) => ({ ...prev, blog: newItems.length }))
    }

    const fetchMessages = async () => {
      const res = await fetch('/api/messagesBottom')
      const messages = await res.json()
      const currentIds = messages.map((m: any) => m._id)
      const read = localStorage.getItem('readMessageIds')
      const readIds = read ? JSON.parse(read) : []
      const newItems = currentIds.filter((id: string) => !readIds.includes(id))
      setBadges((prev) => ({ ...prev, messages: newItems.length }))
    }

    const fetchShop = async () => {
      const res = await fetch('/api/articles')
      const articles = await res.json()
      const currentIds = articles.map((a: any) => a._id)
      const read = localStorage.getItem('readShopIds')
      const readIds = read ? JSON.parse(read) : []
      const newItems = currentIds.filter((id: string) => !readIds.includes(id))
      setBadges((prev) => ({ ...prev, shop: newItems.length }))
    }

    fetchBlog()
    fetchMessages()
    fetchShop()

    const interval = setInterval(() => {
      fetchBlog()
      fetchMessages()
      fetchShop()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', key: 'home', icon: <AiFillHome size={22} /> },
    { href: '/blog', label: 'Blog', key: 'blog', icon: <FaRegNewspaper size={20} /> },
    { href: '/messages', label: 'Messages', key: 'messages', icon: <FaComments size={20} /> },
    { href: '/shop', label: 'Shop', key: 'shop', icon: <FaShoppingBag size={20} /> },
  ]

  return (
    <nav className="navbar bg-light border-top position-fixed bottom-0 w-100 shadow-sm z-3">
      <div className="container d-flex justify-content-around text-center py-2">
        {navItems.map(({ href, label, key, icon }) => {
          const isActive = pathname === href
          const badgeCount = isActive ? 0 : badges[key] || 0

          return (
            <Link
              prefetch={key !== 'messages'}
              key={href}
              href={href}
              className={`position-relative text-decoration-none d-flex flex-column align-items-center small ${
                isActive ? 'text-dark fw-bold' : 'text-muted'
              }`}
            >
              <div className="position-relative">
                {icon}
                {badgeCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {badgeCount}
                    <span className="visually-hidden">{label} notifications</span>
                  </span>
                )}
              </div>
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNavbar
