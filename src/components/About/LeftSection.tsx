import { ABOUT, PROFILE_TITLE, RESUME_URL, socialLinks } from 'constant'
import Link from 'next/link'

export const LeftSection = () => (
  <aside className="md:grid grid-cols-6  p-3 md:p-0  w-full my-8 lg:my-0   h-full ">
    <div className="col-span-2 ">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Wassim Nassour
      </h1>
      <span className="block text-lg font-normal mt-4 tracking-tight text-slate-200 sm:text-xl">
        {PROFILE_TITLE}
      </span>
      <ul className="lg:mt-10 space-y-4 lg:block hidden">
        {['About', 'Experience', 'Skills', 'Education'].map(link => (
          <a className="group flex items-center py-3 " href={'#' + link} key={link}>
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {link}
            </span>
          </a>
        ))}
      </ul>
      <ul className="flex gap-x-7 grid-cols-4  mt-10 lg:mt-6  lg:sticky bottom-6">
        {socialLinks?.map(li => (
          <li key={li.url}>
            <a href={li.url} aria-label={li.label}>
              {li.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <AboutMe />
  </aside>
)

const AboutMe = () => {
  return (
    <div className="w-full col-span-4 mt-4 md:mt-0">
      <div className="mb-12 space-y-4 leading-7 text-portfolio-muted scroll-mt-24" id="About">
        <h2 className="text-2xl font-semibold text-portfolio-ink">About me</h2>
        <p>{ABOUT}</p>
        <p>
          At Maltem Africa, I work on digital lending and internal sales dashboards. My work
          includes configurable multi-step forms, reusable components, automated testing, and
          mentoring junior developers. I also build REST APIs with Java and Spring Boot.
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/blog" className="underline decoration-secondary underline-offset-4">
            Read my articles
          </Link>
          <a href={RESUME_URL} className="underline decoration-secondary underline-offset-4">
            View résumé
          </a>
        </p>
      </div>
    </div>
  )
}
