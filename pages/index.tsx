import type { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { PROFILE_DESCRIPTION, PROFILE_TITLE } from 'constant'
import { Portfolio, type Writing } from 'components/Home/Portfolio'
import { getAllPosts } from '../lib/blogUtils'
import { getAllNotes } from '../lib/notesUtility'

interface Props {
  notes: Writing[]
  articles: Writing[]
  year: number
}

const title = `Wassim Nassour | ${PROFILE_TITLE}`
const description = PROFILE_DESCRIPTION
const url = 'https://www.wassimnassour.com/'

const Home = ({ notes, articles, year }: Props) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{ title, description, url }}
    />
    <Portfolio notes={notes} articles={articles} year={year} />
  </>
)

Home.standalone = true

export default Home

const fields = [
  'slug',
  'title',
  'excerpt',
  'date',
  'homepageCategory',
  'homepageTitle',
  'homepageSummary'
]

function selectWriting(entries: Record<string, string>[], route: '/note' | '/posts'): Writing[] {
  return entries
    .filter(entry => entry.homepageCategory)
    .slice(0, 3)
    .map(entry => ({
      href: `${route}/${entry.slug}`,
      title: entry.homepageTitle || entry.title,
      summary: entry.homepageSummary || entry.excerpt,
      category: entry.homepageCategory,
      date: entry.date
    }))
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    notes: selectWriting(getAllNotes(fields), '/note'),
    articles: selectWriting(getAllPosts(fields), '/posts'),
    year: new Date().getUTCFullYear()
  },
  revalidate: 86400
})
