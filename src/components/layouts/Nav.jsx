import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Nav = () => {
    const pathname = usePathname()
    
    const navItems = [
        { href: '/', icon: 'fad fa-lightbulb', label: 'Funfact' },
        { href: '/trivia', icon: 'fad fa-question-circle', label: 'Trivia' },
        { href: '/quotes', icon: 'fad fa-quote-right', label: 'Quotes' },
        { href: '/riddles', icon: 'fad fa-puzzle-piece', label: 'Riddles' },
        { href: '/jokes', icon: 'fad fa-laugh-squint', label: 'Jokes' },
    ];
    
    return (
        <div className='flex items-center justify-between'>
            <nav className="flex bg-background px-3 py-2 rounded-lg border border-stroke gap-5">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-text ${pathname == item.href ? '!text-primary' : ''}`} // Tambahkan kelas aktif jika path sesuai
                    >
                        <i className={item.icon}></i>
                        <span className='hidden sm:inline sm:ml-1'>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="flex gap-2">
                <button className='bg-background px-3 py-2 rounded-lg border border-stroke'>
                    <i className="fad fa-sync"></i>
                </button>
                <ThemeToggle/>
            </div>
        </div>
    )
}

export default Nav