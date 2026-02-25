import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = ['Início', 'Sobre', 'Serviços', 'Galeria', 'Depoimentos', 'Contato']

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold" style={{ color: 'var(--green-dark)', fontFamily: 'Playfair Display' }}>O-Tita</h1>

                {/* Desktop */}

                <ul className="hidden md:flex gap-8 text-sm">
                    {links.map(link => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} className="hover:text-green-700 transition">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className="md:hidden px-6 pb-4 space-y-3">
                    {links.map(link => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} className="block text-sm" onClick={() => setMenuOpen(false)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}