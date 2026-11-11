import Link from 'next/link'
import { type ReactNode } from 'react'
import { ABOUT, EMAIL, EXPERIENCE_YEARS, jobs, PROFILE_TITLE, socialLinks } from 'constant'

export interface Writing {
  href: string
  title: string
  summary: string
  category: string
  date: string
}

const frame = 'mx-auto w-full max-w-[1240px] px-[22px] min-[601px]:px-[34px] min-[1101px]:px-12'
const section = 'scroll-mt-24 pt-[74px] min-[651px]:pt-[100px]'
const eyebrow = 'font-mono text-[11px] uppercase tracking-[0.09em]'
// Coral stays decorative at small sizes, where it falls short of AA text contrast.
const accentLabel = `${eyebrow} text-portfolio-ink decoration-secondary underline decoration-2 underline-offset-[6px]`
const heading =
  'text-[44px] min-[651px]:text-[clamp(37px,4.4vw,60px)] font-semibold leading-[1.08] tracking-[-0.065em]'
const linkStyle =
  'inline-flex min-h-11 items-center gap-[13px] text-xs text-portfolio-ink hover:underline decoration-secondary underline-offset-4'
const button =
  'inline-flex min-h-[52px] items-center justify-center gap-[18px] rounded-[5px] bg-secondary px-[21px] py-[17px] text-[13px] font-bold text-black hover:bg-portfolio-ink motion-safe:transition-colors'
const mail = `mailto:${EMAIL}`
const focusAreas = [
  ['Application architecture', 'Configurable workflows and reusable components'],
  ['Backend engineering', 'REST APIs, Spring Boot, Node.js, and database migrations'],
  ['Software quality', 'Automated testing, performance, and accessibility']
]
const technologies = ['React', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker']
const facts = [
  [EXPERIENCE_YEARS, 'Professional experience'],
  ['Applications & APIs', 'Web, mobile, and backend'],
  ['Casablanca', 'Morocco']
]
const github = socialLinks.find(({ url }) => url.startsWith('https://github.com/'))?.url

function Arrow({ className = 'text-secondary' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={className}>
      ↗
    </span>
  )
}

function Hero() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className={`${frame} grid gap-[50px] pb-[65px] pt-[60px] min-[601px]:pb-[75px] min-[601px]:pt-[74px] min-[851px]:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] min-[851px]:items-center min-[851px]:gap-11 min-[851px]:pb-[108px] min-[851px]:pt-[104px] min-[1101px]:gap-[76px]`}
      >
        <div>
          <p className={`${eyebrow} flex items-center gap-[11px] tracking-[0.12em]`}>
            <span aria-hidden="true" className="h-px w-[22px] shrink-0 bg-secondary" />
            Wassim Nassour / {PROFILE_TITLE}
          </p>
          <h1
            id="hero-heading"
            className="mb-[30px] mt-6 text-[clamp(51px,12vw,67px)] font-[650] leading-[1.02] tracking-[-0.07em] min-[601px]:mt-[33px] min-[601px]:text-[clamp(56px,6vw,78px)] min-[1101px]:text-[clamp(56px,6vw,86px)] min-[601px]:tracking-[-0.077em]"
          >
            <span className="block">Building for</span>
            <span className="block text-portfolio-muted">the real</span>
            <span className="block text-secondary">world.</span>
          </h1>
          <p className="max-w-[580px] text-[15px] leading-[1.77] tracking-[-0.012em] text-portfolio-muted min-[601px]:text-[17px]">
            I&apos;m Wassim, a software engineer. I build web and mobile applications, design
            configurable workflows, and develop REST APIs with Java and Spring Boot. I write about
            how software works, from React internals to database indexes.
          </p>
          <div className="mt-[38px] flex flex-wrap items-center gap-x-[22px] gap-y-3">
            <a className={button} href="#notes">
              Explore my notes <Arrow className="text-[18px] font-normal" />
            </a>
            <a
              className={`${linkStyle} gap-[15px] border-b border-portfolio-muted text-[13px] font-bold`}
              href="#articles"
            >
              Read articles <Arrow />
            </a>
          </div>
          <dl className="mt-[45px] flex flex-wrap gap-x-[17px] gap-y-5 min-[851px]:mt-[65px] min-[601px]:gap-x-[27px]">
            {facts.map(([value, label]) => (
              <div
                key={label}
                className="border-r border-portfolio-border pr-4 last:border-0 last:pr-0 min-[601px]:pr-[27px]"
              >
                <dt className="text-[17px] font-semibold tracking-[-0.04em] min-[601px]:text-[19px]">
                  {value}
                </dt>
                <dd className="mt-[7px] text-[11px] tracking-[0.02em] text-portfolio-muted">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <aside
          aria-labelledby="focus-heading"
          className="w-full border-l border-portfolio-border pl-5 min-[601px]:pl-7 min-[851px]:ml-auto min-[851px]:max-w-[430px] min-[851px]:py-2 min-[851px]:pl-[43px]"
        >
          <p className={`${accentLabel} mb-[23px]`}>What I work on</p>
          <h2
            id="focus-heading"
            className="mb-[27px] text-[28px] font-semibold leading-[1.25] tracking-[-0.045em] min-[601px]:text-[clamp(25px,2.6vw,34px)]"
          >
            Interfaces, systems,
            <br className="hidden min-[851px]:block" /> and everything between.
          </h2>
          <dl className="border-b border-portfolio-border min-[601px]:grid min-[601px]:grid-cols-3 min-[601px]:gap-[22px] min-[851px]:block">
            {focusAreas.map(([label, detail]) => (
              <div
                key={label}
                className="border-t border-portfolio-border py-[14px] min-[601px]:py-[17px] min-[851px]:py-5"
              >
                <dt className="text-sm font-semibold tracking-[-0.015em]">{label}</dt>
                <dd className="mt-[7px] text-[13px] leading-[1.6] text-portfolio-muted">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
      <div className="border-y border-portfolio-border bg-portfolio-card">
        <div
          className={`${frame} flex min-h-[79px] flex-wrap items-center gap-x-[22px] gap-y-[13px] py-5 min-[1101px]:py-0`}
        >
          <span
            className={`${eyebrow} w-full text-[10px] tracking-[0.06em] text-portfolio-muted min-[1101px]:w-auto`}
          >
            Technologies
          </span>
          <ul
            className="flex flex-wrap gap-x-6 gap-y-[13px] text-[13px] text-portfolio-muted min-[1101px]:flex-1 min-[1101px]:justify-between"
            aria-label="Technologies"
          >
            {technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function SectionHeading({
  id,
  label,
  title,
  children,
  link
}: {
  id: string
  label: string
  title: string
  children: ReactNode
  link: { href: string; text: string }
}) {
  return (
    <>
      <div className="mb-4 flex flex-col items-start justify-between gap-4 min-[651px]:flex-row min-[651px]:items-end min-[651px]:gap-6">
        <div>
          <p className={`${accentLabel} mb-[14px]`}>{label}</p>
          <h2 id={id} className={heading}>
            {title}
            <span className="text-secondary">.</span>
          </h2>
        </div>
        <Link className={`${linkStyle} whitespace-nowrap`} href={link.href}>
          {link.text} <Arrow />
        </Link>
      </div>
      <p className="mb-[33px] max-w-[650px] text-[15px] leading-[1.7] text-portfolio-muted">
        {children}
      </p>
    </>
  )
}

function WritingMeta({ category, date }: Pick<Writing, 'category' | 'date'>) {
  const [day, month, year] = date.split('/')
  const iso = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  const label = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${iso}T00:00:00Z`))

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-[10px] gap-y-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.02em]">
      <span className="text-portfolio-ink decoration-secondary underline underline-offset-4">
        {category}
      </span>
      <time className="text-portfolio-muted" dateTime={iso}>
        {label}
      </time>
    </div>
  )
}

function FeaturedNotes({ notes }: { notes: Writing[] }) {
  return (
    <section id="notes" tabIndex={-1} aria-labelledby="notes-heading" className={section}>
      <SectionHeading
        id="notes-heading"
        label="Short reads"
        title="Notes"
        link={{ href: '/notes', text: 'All notes' }}
      >
        Small things I learn while exploring software engineering, explained simply.
      </SectionHeading>
      <div className="grid gap-3 min-[651px]:grid-cols-2 min-[651px]:gap-[18px] min-[901px]:grid-cols-3">
        {notes.map(note => (
          <article
            key={note.href}
            className="min-[651px]:last:col-span-2 min-[901px]:last:col-span-1"
          >
            <Link
              href={note.href}
              aria-label={`Read note: ${note.title}`}
              className="flex h-full flex-col rounded-lg border border-portfolio-border bg-portfolio-card px-[26px] pb-6 pt-7 hover:border-secondary hover:bg-portfolio-surface motion-safe:transition-colors min-[651px]:min-h-[263px]"
            >
              <WritingMeta category={note.category} date={note.date} />
              <h3 className="mb-[10px] mt-6 text-xl font-semibold leading-[1.32] tracking-[-0.035em] min-[651px]:mt-8">
                {note.title}
              </h3>
              <p className="mb-6 text-[13px] leading-[1.75] text-portfolio-muted">{note.summary}</p>
              <span className="mt-auto flex items-center justify-between gap-3 border-t border-portfolio-border pt-[15px] text-xs font-semibold">
                Read note <Arrow className="text-[19px] font-normal text-secondary" />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedArticles({ articles }: { articles: Writing[] }) {
  return (
    <section
      id="articles"
      tabIndex={-1}
      aria-labelledby="articles-heading"
      className="scroll-mt-24 pt-[74px] min-[651px]:pt-[92px]"
    >
      <SectionHeading
        id="articles-heading"
        label="Long-form writing"
        title="Articles"
        link={{ href: '/blog', text: 'All articles' }}
      >
        Deeper explanations, practical guides, and ideas from building software.
      </SectionHeading>
      <ol className="divide-y divide-portfolio-border border-y border-portfolio-border">
        {articles.map((article, index) => (
          <li key={article.href}>
            <Link
              href={article.href}
              className="group grid grid-cols-[minmax(0,1fr)_26px] items-start gap-[10px] py-[27px] min-[651px]:grid-cols-[55px_minmax(0,1fr)_38px] min-[651px]:gap-[23px] min-[651px]:py-[31px]"
            >
              <span
                aria-hidden="true"
                className="mt-7 hidden font-mono text-xs text-portfolio-muted min-[651px]:block"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="max-w-max">
                  <WritingMeta category={article.category} date={article.date} />
                </div>
                <h3 className="mb-[9px] mt-[13px] text-xl font-bold leading-[1.3] tracking-[-0.038em] group-hover:text-secondary motion-safe:transition-colors min-[651px]:text-[clamp(20px,2.3vw,27px)]">
                  {article.title}
                </h3>
                <p className="max-w-[820px] text-[13px] leading-[1.7] text-portfolio-muted min-[651px]:text-sm">
                  {article.summary}
                </p>
              </div>
              <Arrow className="mt-[21px] justify-self-end text-[23px] text-secondary min-[651px]:mt-[25px]" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className="scroll-mt-24 pb-20 pt-[90px] min-[651px]:pb-[100px] min-[651px]:pt-[110px]"
    >
      <p className={`${accentLabel} mb-[14px]`}>About</p>
      <div className="grid gap-7 min-[601px]:grid-cols-[0.83fr_1.17fr] min-[601px]:gap-10 min-[851px]:gap-[95px]">
        <div>
          <h2 id="about-heading" className={heading}>
            About me<span className="text-secondary">.</span>
          </h2>
          <div className="mt-[30px] space-y-4 text-base leading-[1.8] text-portfolio-muted">
            <p>{ABOUT}</p>
            <Link href="/about" className={linkStyle}>
              More about my experience <Arrow />
            </Link>
          </div>
        </div>
        <ol
          aria-label="Professional experience"
          className="divide-y divide-portfolio-border border-y border-portfolio-border min-[601px]:mt-[7px]"
        >
          {jobs.map(job => (
            <li
              key={job.name}
              className="grid grid-cols-[92px_minmax(0,1fr)] gap-4 py-[25px] min-[851px]:grid-cols-[112px_minmax(0,1fr)] min-[851px]:gap-5"
            >
              <p className="pt-[5px] font-mono text-[11px] leading-relaxed text-portfolio-muted">
                {job.date.split(' / ')[0]}
              </p>
              <div>
                <h3 className="text-[17px] font-semibold tracking-[-0.025em]">{job.role}</h3>
                <p className="mt-2 text-xs text-portfolio-muted">{job.name}</p>
                <p className="mt-3 font-mono text-[10px] leading-relaxed text-portfolio-muted">
                  {job.technologies.slice(0, 3).join(' / ')}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Portfolio({
  notes,
  articles,
  year
}: {
  notes: Writing[]
  articles: Writing[]
  year: number
}) {
  return (
    <div className="min-h-screen bg-primary font-portfolio text-portfolio-ink antialiased [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-[5px] [&_a:focus-visible]:outline-portfolio-ink [&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:outline-portfolio-ink">
      <main id="main-content" tabIndex={-1} className="scroll-mt-24">
        <Hero />
        <div className={frame}>
          <FeaturedNotes notes={notes} />
          <FeaturedArticles articles={articles} />
          <About />
        </div>
        <section
          id="contactMe"
          tabIndex={-1}
          aria-labelledby="contact-heading"
          className="scroll-mt-24 border-t border-portfolio-border bg-portfolio-card py-[72px] min-[601px]:py-[90px]"
        >
          <div className={frame}>
            <p className={accentLabel}>Contact</p>
            <h2
              id="contact-heading"
              className="my-6 text-[clamp(49px,11vw,70px)] font-semibold leading-[1.04] tracking-[-0.075em] min-[601px]:text-[clamp(54px,6.2vw,82px)]"
            >
              Let&apos;s work <span className="text-secondary">together.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-[30px]">
              <p className="max-w-[440px] text-[15px] leading-[1.75] text-portfolio-muted">
                I&apos;m always happy to exchange ideas, talk engineering, or hear about an
                interesting challenge.
              </p>
              <a href={mail} className={`${button} gap-[35px] px-[23px] py-[18px]`}>
                Start a conversation <Arrow className="text-[18px] font-normal" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer
        className={`${frame} flex flex-col items-start justify-between gap-[15px] py-8 font-mono text-[11px] text-portfolio-muted min-[601px]:flex-row min-[601px]:flex-wrap min-[601px]:items-center`}
      >
        <p>© {year} WASSIM NASSOUR</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-[25px]">
          {github && (
            <a href={github} className={`${linkStyle} font-mono text-[11px] text-portfolio-muted`}>
              GitHub <Arrow />
            </a>
          )}
          <Link href="/about" className={`${linkStyle} font-mono text-[11px] text-portfolio-muted`}>
            Experience <Arrow />
          </Link>
          <a href={mail} className={`${linkStyle} font-mono text-[11px] text-portfolio-muted`}>
            Email <Arrow />
          </a>
        </nav>
        <a
          href="#top"
          className={`${linkStyle} font-mono text-[11px] uppercase text-portfolio-muted`}
        >
          Back to top{' '}
          <span aria-hidden="true" className="text-secondary">
            ↑
          </span>
        </a>
      </footer>
    </div>
  )
}
