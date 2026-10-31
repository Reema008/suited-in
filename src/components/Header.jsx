import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  { href: '#about', label: 'ABOUT' },
  { href: '#manifesto', label: 'MANIFESTO' },
  { href: '#questions', label: 'QUESTIONS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Suited In homepage" onClick={close}>
          <Logo />
          <span className="wordmark">SUITED IN</span>
        </a>
        <nav id="site-nav" className={open ? 'open' : ''}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <span className="eyebrow est">EST. 2026</span>
        <button
          className={`menu-toggle${open ? ' open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
