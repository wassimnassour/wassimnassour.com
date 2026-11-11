import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { SITE_URL } from 'constant'
import { getAllPosts } from '../lib/blogUtils'

const title = 'Wassim Nassour | Articles'
const description =
  'Writing on software engineering, from application design and testing to backend systems and databases.'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC'
})

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description, url: `${SITE_URL}blog` }}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1240px] px-[22px] pb-20 pt-14 font-portfolio text-portfolio-ink min-[601px]:px-[34px] md:pt-20 min-[1101px]:px-12">
        <div className="max-w-4xl">
          <h1 className="text-[44px] font-semibold leading-[1.08] tracking-[-0.065em] sm:text-[clamp(44px,4.4vw,60px)]">
            Articles<span className="text-secondary">.</span>
          </h1>
          <p className="mb-8 mt-4 max-w-[60ch] leading-relaxed text-portfolio-muted">
            {description}
          </p>
          <ul className="divide-y divide-portfolio-border border-y border-portfolio-border">
            {posts.map(post => (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="group grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-ink sm:py-8"
                >
                  <div>
                    {post.date && (
                      <time
                        dateTime={post.date.iso}
                        className="font-mono text-xs uppercase text-portfolio-muted"
                      >
                        {post.date.label}
                      </time>
                    )}
                    <h2 className="mt-2 break-words text-xl font-bold leading-snug tracking-tight group-hover:text-secondary motion-safe:transition-colors sm:text-2xl">
                      {post.title}
                    </h2>
                    {post.summary && (
                      <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-portfolio-muted">
                        {post.summary}
                      </p>
                    )}
                  </div>
                  <span aria-hidden="true" className="mt-1 text-xl text-secondary">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Blog

export const getStaticProps = (async () => {
  const posts = getAllPosts(['slug', 'title', 'date', 'excerpt', 'homepageSummary']).map(post => {
    const [day, month, year] = (post.date ?? '').split('/')
    const iso =
      year && month && day ? `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}` : ''
    const timestamp = Date.parse(iso)
    const excerpt = (post.homepageSummary || post.excerpt || '')
      .replace(/<\/?Tag>|`/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    const summary =
      excerpt.length <= 180
        ? excerpt
        : `${excerpt
            .slice(0, 181)
            .replace(/\s+\S*$/, '')
            .trimEnd()}…`

    return {
      slug: post.slug,
      title: post.title.trim(),
      summary,
      date: Number.isFinite(timestamp) ? { iso, label: dateFormatter.format(timestamp) } : null
    }
  })
  posts.sort((a, b) => (b.date?.iso ?? '').localeCompare(a.date?.iso ?? ''))

  return { props: { posts } }
}) satisfies GetStaticProps
