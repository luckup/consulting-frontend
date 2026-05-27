import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { MediaImage } from '@/components/MediaImage'
import { PageShell } from '@/components/PageShell'
import { firstSentences, newsArticles } from '@/lib/newsData'
import { newsPath } from '@/lib/newsPath'
import { newsNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

export function NewsPage() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')
  const filtered = filter ? newsArticles.filter((article) => article.filter === filter) : newsArticles

  return (
    <PageShell
      section="News"
      title="Newsroom"
      description="Company updates, industry insights, and perspectives from MoonSofts on AI, cloud, and accountable engineering for global businesses."
      breadcrumbs={[{ label: 'News' }]}
      heroCta={{ label: 'View all articles', to: '/news#articles' }}
      heroImage={siteImages.hero.news}
      sidebarTitle="Browse"
      sidebarItems={newsNav}
    >
      <div className="mb-[32px] flex flex-wrap gap-[8px]">
        <Link
          to="/news"
          aria-pressed={!filter}
          className={`rounded-[4px] border px-[14px] py-[8px] text-sm font-medium transition ${
            !filter ? 'border-brand bg-brand-light text-brand' : 'border-ink-900/10 text-ink-600 hover:border-brand'
          }`}
        >
          All
        </Link>
        <Link
          to="/news?filter=company"
          aria-pressed={filter === 'company'}
          className={`rounded-[4px] border px-[14px] py-[8px] text-sm font-medium transition ${
            filter === 'company'
              ? 'border-brand bg-brand-light text-brand'
              : 'border-ink-900/10 text-ink-600 hover:border-brand'
          }`}
        >
          Company news
        </Link>
        <Link
          to="/news?filter=insights"
          aria-pressed={filter === 'insights'}
          className={`rounded-[4px] border px-[14px] py-[8px] text-sm font-medium transition ${
            filter === 'insights'
              ? 'border-brand bg-brand-light text-brand'
              : 'border-ink-900/10 text-ink-600 hover:border-brand'
          }`}
        >
          Industry insights
        </Link>
      </div>

      <div id="articles" className="scroll-mt-[120px] space-y-[24px]">
        {filtered.map((article) => (
          <article
            key={article.id}
            className="card grid overflow-hidden transition hover:border-brand/30 md:grid-cols-[220px,1fr]"
          >
            <MediaImage src={article.image} className="min-h-[160px] md:min-h-full" overlay="subtle" />
            <div className="flex flex-col p-[28px]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{article.category}</p>
              <p className="mt-[8px] text-sm text-ink-500">{article.date}</p>
              <h2 className="mt-[12px] text-lg font-semibold leading-snug text-ink-900">{article.title}</h2>
              <p className="mt-[12px] flex-1 text-sm leading-relaxed text-ink-600">
                {firstSentences(article.excerpt, 2)}
              </p>
              <Link
                to={newsPath(article.id)}
                className="mt-[20px] inline-flex w-fit items-center gap-[8px] rounded-[4px] border border-brand bg-brand px-[18px] py-[10px] text-sm font-semibold text-ink-900 transition hover:bg-brand-600"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-[32px] border-t border-ink-900/10 pt-[24px] text-sm text-ink-500">
        For press, speaking requests, or interview opportunities,{' '}
        <Link to="/contact#press" className="font-medium text-brand hover:text-brand-600">
          contact our media team
        </Link>
        .
      </p>
    </PageShell>
  )
}
