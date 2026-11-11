import { NextSeo } from 'next-seo'
import { PROFILE_DESCRIPTION } from 'constant'
import { Layout } from 'components'
import { ExperienceAndAbout, LeftSection } from 'components/About'

const skills = [
  [
    'Frontend',
    'React, Next.js, React Native, TypeScript, Tailwind CSS, accessibility and performance'
  ],
  ['Backend', 'Java, Spring Boot, Spring Security, Hibernate, Node.js and REST APIs'],
  ['Data and messaging', 'PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ and Liquibase'],
  [
    'Testing and delivery',
    'React Testing Library, Vitest, Jest, Playwright, JUnit, Docker and CI/CD'
  ]
]

const About = () => {
  return (
    <Layout>
      <NextSeo title="About Wassim Nassour" description={PROFILE_DESCRIPTION} />
      <div className="max-w-5xl lg:mt-10 p-2 sm:p-6  gap-x-10 mx-auto">
        <LeftSection />
        <ExperienceAndAbout />
        <section aria-labelledby="Skills" className="mb-12 px-4 md:px-0">
          <h2 id="Skills" className="mb-6 scroll-mt-24 text-2xl font-semibold text-portfolio-ink">
            Skills
          </h2>
          <dl className="grid gap-5 sm:grid-cols-2">
            {skills.map(([label, detail]) => (
              <div key={label} className="border-t border-portfolio-border pt-4">
                <dt className="font-semibold text-portfolio-ink">{label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-portfolio-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section aria-labelledby="Education" className="px-4 md:px-0">
          <h2
            id="Education"
            className="mb-6 scroll-mt-24 text-2xl font-semibold text-portfolio-ink"
          >
            Education
          </h2>
          <ul className="space-y-4 text-portfolio-muted">
            <li>
              <strong className="text-portfolio-ink">Self-directed study</strong>
              <br />
              Software architecture, distributed systems, and frontend and backend engineering ·
              2018–present
            </li>
            <li>
              <strong className="text-portfolio-ink">Baccalaureate in Physics</strong>
              <br />
              Abou Bakr Essedik, Mohammedia, Morocco · 2018
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About
