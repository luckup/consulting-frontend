import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { PageShell } from '@/components/PageShell'
import { SectionReveal } from '@/components/SectionReveal'
import { getNewsBySlug, newsArticles } from '@/lib/newsData'
import { newsPath } from '@/lib/newsPath'
import { newsNav } from '@/lib/pageNav'

export function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getNewsBySlug(slug)

  useEffect(() => {
    if (!article) return
    document.title = `${article.title} | MoonSofts`
  }, [article])

  if (!article) {
    return <Navigate to="/news" replace />
  }

  const related = newsArticles.filter((item) => item.id !== article.id).slice(0, 3)

  return (
    <PageShell
      section="News"
      title={article.title}
      description={article.excerpt}
      breadcrumbs={[{ label: 'News', to: '/news' }, { label: article.category }]}
      heroCta={{ label: 'Back to newsroom', to: '/news' }}
      heroImage={article.image}
      sidebarTitle="Browse"
      sidebarItems={newsNav}
    >
      <article className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{article.category}</p>
        <p className="mt-[8px] text-sm text-ink-500">{article.date}</p>

        <p className="mt-[28px] text-xl font-medium leading-relaxed text-ink-800 sm:text-2xl">{article.excerpt}</p>

        <div className="mt-[32px] space-y-[32px]">
          {article.sections.map((section) => (
            <SectionReveal
              as="section"
              key={section.heading ?? section.paragraphs[0].slice(0, 40)}
              accent
            >
              {section.heading ? (
                <h2 className="text-lg font-semibold text-ink-900 sm:text-xl">{section.heading}</h2>
              ) : null}
              <div className={section.heading ? 'prose-body mt-[16px]' : 'prose-body'}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 60)}>{paragraph}</p>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>

        <Link
          to="/news"
          className="mt-[48px] inline-flex items-center gap-[8px] text-sm font-semibold text-brand hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all news
        </Link>
      </article>

      {related.length > 0 ? (
        <div className="mt-[56px] border-t border-ink-900/10 pt-[40px]">
          <h2 className="text-lg font-semibold text-ink-900">More from the newsroom</h2>
          <ul className="mt-[20px] space-y-[16px]">
            {related.map((item) => (
              <li key={item.id}>
                <Link to={newsPath(item.id)} className="text-sm font-medium text-brand hover:text-brand-600">
                  {item.title}
                </Link>
                <p className="mt-[4px] text-xs text-ink-500">{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </PageShell>
  )
}
