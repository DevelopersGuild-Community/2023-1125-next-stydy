'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Tabs({ items }: { items: Array<{ text: string; href: string }> }) {
  const pathname = usePathname()

  return (
    <div className="tabs">
      {items.map((item, index) => (
        <h2 key={index}>
          <Link
            href={item.href}
            scroll={true}
            prefetch={false}
            className={item.href === pathname ? 'active' : ''}
          >
            {item.text}
          </Link>
        </h2>
      ))}
    </div>
  )
}

export default Tabs
