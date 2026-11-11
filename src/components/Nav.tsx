import Link from 'next/link'
import { useRef, useState } from 'react'
import { EMAIL } from 'constant'

const frame = 'mx-auto w-full max-w-[1240px] px-[22px] min-[601px]:px-[34px] min-[1101px]:px-12'
const linkStyle =
  'inline-flex min-h-11 items-center gap-[13px] text-xs text-portfolio-ink hover:underline decoration-secondary underline-offset-4'
const mail = `mailto:${EMAIL}`
const navigation = [
  ['Notes', '/notes'],
  ['Articles', '/blog'],
  ['About', '/about'],
  ['Contact', '/#contactMe']
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <header
      className="sticky top-0 z-20 border-b border-portfolio-ink/[0.07] bg-primary/95 font-portfolio text-portfolio-ink backdrop-blur-lg [&_a:focus-visible]:outline [&_button:focus-visible]:outline"
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          setOpen(false)
          menuButton.current?.focus()
        }
      }}
    >
      <div
        className={`${frame} relative flex h-[69px] items-center justify-between gap-8 min-[601px]:h-[82px]`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Wassim Nassour, home"
          className="whitespace-nowrap font-mono text-[25px] font-bold tracking-[-2px]"
        >
          W<span className="text-secondary">/</span>N<span className="text-secondary">.</span>
        </Link>
        <button
          ref={menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="portfolio-nav"
          onClick={() => setOpen(!open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[5px] border border-portfolio-border min-[601px]:hidden"
        >
          <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path
              d={open ? 'M5 5l14 14M19 5L5 19' : 'M4 6h16M4 12h16M4 18h16'}
              strokeLinecap="round"
            />
          </svg>
        </button>
        <nav
          id="portfolio-nav"
          aria-label="Main navigation"
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full flex-col border-b border-portfolio-border bg-portfolio-card px-[22px] py-3 min-[601px]:static min-[601px]:flex min-[601px]:flex-row min-[601px]:gap-[18px] min-[601px]:border-0 min-[601px]:bg-transparent min-[601px]:p-0 min-[851px]:gap-[38px]`}
        >
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`${linkStyle} tracking-[0.03em]`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={mail}
          className={`${linkStyle} hidden whitespace-nowrap rounded-[5px] border border-portfolio-border px-[17px] font-bold hover:border-secondary min-[601px]:inline-flex`}
        >
          Contact{' '}
          <span aria-hidden="true" className="text-secondary">
            ↗
          </span>
        </a>
      </div>
    </header>
  )
}
