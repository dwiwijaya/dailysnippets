import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { useRefetch } from '@/contexts/RefetchContext'

const Nav = () => {
    const pathname = usePathname()
    const { triggerRefetch } = useRefetch();

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
                        className={`group text-text ${pathname == item.href ? '!text-primary' : ''}`} // Tambahkan kelas aktif jika path sesuai
                    >
                        <i className={`${item.icon} group-active:scale-90 transition-all duration-300 ease-in-out`}></i>
                        <span className={` hidden sm:inline sm:ml-1 ${pathname == item.href ? '!inline ml-1' : ''}`}>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="flex gap-2">
                <button onClick={triggerRefetch} className='group bg-background px-3 py-2 rounded-lg border border-stroke'>
                    <i className=" group-active:scale-90 transition-all duration-300 ease-in-out fad fa-sync"></i>
                </button>
                <ThemeToggle/>
            </div>
        </div>
    )
}

export default Nav