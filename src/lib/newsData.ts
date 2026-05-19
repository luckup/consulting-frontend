import { siteImages } from '@/lib/siteImages'

export type NewsSection = {
  heading?: string
  paragraphs: string[]
}

export type NewsArticle = {
  id: string
  date: string
  category: string
  filter: 'company' | 'insights'
  image: string
  title: string
  excerpt: string
  sections: NewsSection[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'global-launch-ai-cloud',
    date: '15 May 2026',
    category: 'Company news',
    filter: 'company',
    image: siteImages.news.launch,
    title: 'MoonSofts Launches as a Global Software Consulting Partner for AI, Cloud, and Scalable Engineering',
    excerpt:
      'MoonSofts enters the market as a full-spectrum consulting partner—uniting AI-assisted delivery, cloud-native architecture, and accountable engineering squads for enterprises that need to ship faster without sacrificing control.',
    sections: [
      {
        paragraphs: [
          'MoonSofts today announced its formal launch as a global software consulting partner focused on artificial intelligence, cloud infrastructure, and scalable engineering. Founded in May 2025, the firm has spent its first year building delivery discipline, industry practices, and a client base that spans high-growth startups and enterprise programs across North America, Europe, and Asia-Pacific.',
          'Unlike traditional staff augmentation, MoonSofts positions every engagement around accountable outcomes: named delivery leads, transparent executive reporting, and engineers that clients can speak with directly. Leadership emphasized that the company is not a body shop—it is a consulting partner built for organizations that measure success in production releases, not slide decks.',
        ],
      },
      {
        heading: 'A delivery model built for distributed teams',
        paragraphs: [
          'At the center of MoonSofts’ offering is a delivery platform that unifies rituals, access control, documentation, and client-ready handoffs. Squads operate across time zones with shared definitions of done, security gates, and integration standards—so product and engineering leaders always know what shipped, what is at risk, and what decisions require their input.',
          'Clients engage MoonSofts for end-to-end programs: discovery and roadmap definition, platform modernization, AI-enabled product development, and long-term scale-up support. Security, access hygiene, and audit-ready practices are embedded from day one—not bolted on before a compliance review.',
          'Early clients report shorter release cycles, clearer stakeholder alignment, and fewer surprises in production—outcomes leadership attributes to senior judgment on every program, not tooling alone.',
        ],
      },
      {
        heading: 'AI and cloud as first-class capabilities',
        paragraphs: [
          'MoonSofts treats AI as an accelerator inside a governed SDLC, not a replacement for engineering accountability. Teams use AI-assisted workflows for requirements synthesis, test generation, observability analysis, and migration planning—while architects retain ownership of trade-offs, data handling, and production readiness.',
          'On cloud, the firm delivers landing zones, CI/CD pipelines, infrastructure as code, and observability stacks on AWS, Azure, and Google Cloud. Programs are designed to compound: each release should make the next one safer, faster, and easier to operate.',
        ],
      },
      {
        heading: 'Industry depth from day one',
        paragraphs: [
          'MoonSofts launches with dedicated practices in e-commerce, healthcare, financial services, logistics, and construction—sectors where integration complexity, compliance, and uptime expectations shape every architectural decision. Sector leads work alongside client stakeholders from discovery through hypercare, pairing domain context with reusable engineering accelerators.',
          '“Global customers do not need more vendors—they need a partner that understands operations, compliance, and the pressure of live revenue systems,” leadership said in the launch announcement. “MoonSofts exists to earn trust one release at a time.”',
        ],
      },
      {
        heading: 'What’s next',
        paragraphs: [
          'The firm is expanding its engineering bench, delivery platform capabilities, and client success functions through 2026. Prospective clients can explore industry solutions, client voices, and engagement models at moonsofts.com or contact the consulting team to discuss upcoming programs.',
        ],
      },
    ],
  },
  {
    id: 'ceo-vision-may-2025',
    date: '12 May 2025',
    category: 'Company news',
    filter: 'company',
    image: siteImages.news.ceoVision,
    title: 'CEO Vision Speech: MoonSofts Founded in May 2025 with a Mission to Support Global Customers',
    excerpt:
      'In a founding address to partners and early clients, MoonSofts leadership outlined a simple promise: world-class engineering with the reliability global businesses expect—and the humility to earn trust one release at a time.',
    sections: [
      {
        paragraphs: [
          'MoonSofts was founded in May 2025 with a clear mission: support global customers who need more than code—they need a technology partner that understands operations, compliance, and the pressure of live revenue systems. In an inaugural vision address, leadership described why the firm exists and how it will measure success.',
          'The speech rejected the hype cycle around AI and cloud as magic bullets. Instead, it framed MoonSofts as a disciplined engineering company for the modern era: pragmatic AI in the SDLC, human judgment on architecture and risk, and squads that integrate with client product organizations rather than hiding behind account management layers.',
        ],
      },
      {
        heading: 'Trust as the product',
        paragraphs: [
          'Leadership argued that consulting firms fail when they optimize for utilization instead of outcomes—when engineers rotate off programs without documentation, when executives lose visibility after kickoff, and when “agile” becomes an excuse for unpredictability.',
          'MoonSofts’ answer is structural: every engagement has a named delivery lead accountable to releases and stakeholder communication. Clients should always know who to call when priorities shift, integrations break, or a production incident demands senior attention.',
          'The vision centers on long-term partnerships across e-commerce, healthcare, financial services, logistics, and construction—industries where software failure has real operational cost, not just a line item in a retrospective.',
        ],
      },
      {
        heading: 'Building for the AI and cloud era—without hype',
        paragraphs: [
          'On artificial intelligence, leadership described a simple rule: augment engineers, never replace accountability. AI can accelerate boilerplate, surface documentation drift, and stress-test integration assumptions—but architects and tech leads must own security, data handling, and the decision to ship.',
          'On cloud, the firm committed to landing zones and delivery pipelines that clients can operate after handoff. MoonSofts will not build black-box platforms that only its own consultants understand; knowledge transfer and runbooks are part of the definition of done.',
        ],
      },
      {
        heading: 'A global mindset from the start',
        paragraphs: [
          'Although young, MoonSofts was conceived as a globally distributed firm from inception—engineering talent collaborating across regions with U.S.-side accountability for enterprise clients. Leadership emphasized respect for local regulations, data residency, and the operational reality of teams that cannot wait twelve hours for an answer.',
          'Early partners and design clients attended the address. Several cited the clarity of the engagement model and the willingness to say no to scope that would compromise quality—a rarity in an industry that often rewards optimism over evidence.',
        ],
      },
      {
        heading: 'Looking ahead',
        paragraphs: [
          'The address closed with a commitment to transparency: MoonSofts will publish how it works, share client outcomes where permitted, and invite scrutiny from security and procurement teams before contracts are signed.',
          '“We are not asking for blind faith,” leadership said. “We are asking for a chance to prove that world-class engineering and honest delivery can coexist—and that global customers deserve both.”',
        ],
      },
    ],
  },
  {
    id: 'ai-powered-development',
    date: '28 Apr 2026',
    category: 'Industry insights',
    filter: 'insights',
    image: siteImages.news.aiDevelopment,
    title: "AI-Powered Software Development: MoonSofts' Approach to Smarter Business Solutions",
    excerpt:
      'MoonSofts applies AI where it accelerates quality and clarity—requirements synthesis, test generation, observability, and migration analysis—while keeping humans accountable for architecture, security, and client outcomes.',
    sections: [
      {
        paragraphs: [
          'MoonSofts published its framework for AI-powered software development—a practical guide for enterprises that want speed without surrendering control. The document reflects a year of delivery experience across regulated and high-scale environments where “move fast” cannot mean “move blindly.”',
          'The framework’s central thesis is simple: AI should reduce friction in the SDLC, not remove responsibility from the humans who sign releases, answer auditors, and explain outages to customers.',
        ],
      },
      {
        heading: 'Where AI belongs in the lifecycle',
        paragraphs: [
          'MoonSofts identifies high-value touchpoints: turning workshop notes into structured requirements drafts, generating test cases from acceptance criteria, summarizing pull requests for reviewers, detecting documentation drift against production behavior, and simulating integration failure modes before code merges.',
          'Each touchpoint is governed. Prompts run inside client-approved tooling; outputs are reviewed; sensitive data is excluded by policy; and retention rules are documented for counsel and security teams. AI assists—the squad still owns the merge.',
          'The firm explicitly discourages “AI-only” modules in regulated paths: payments, identity, clinical workflows, and ledger-adjacent systems require human design review, threat modeling, and evidence-ready testing regardless of how fast a model can generate code.',
        ],
      },
      {
        heading: 'Governance that security teams can approve',
        paragraphs: [
          'For data-sensitive clients, MoonSofts maps every AI touchpoint to access controls, logging, and escalation paths. Models are not trained on client secrets; unmanaged personal accounts are prohibited; and incident playbooks include AI-specific failure modes such as hallucinated APIs or insecure defaults in generated configs.',
          'Security reviews happen before pilots expand—not after an executive demo impresses a board. This discipline, leadership argues, is why early programs report shorter cycle times on well-scoped workstreams without increasing production incident rates.',
        ],
      },
      {
        heading: 'Outcomes clients are seeing',
        paragraphs: [
          'Teams using the framework report faster refinement of ambiguous requirements, earlier detection of integration mismatches, and more consistent onboarding documentation for new engineers joining mid-program.',
          'MoonSofts cautions that AI does not fix organizational problems: unclear ownership, absent product judgment, or architecture debt still require leadership attention. The framework is a multiplier on good practice—not a substitute for it.',
        ],
      },
      {
        heading: 'Getting started responsibly',
        paragraphs: [
          'The firm recommends starting with one bounded workstream—internal tooling, a non-critical integration, or a greenfield module—before expanding AI assistance across a monolith. Success criteria should include cycle time, defect escape rate, and reviewer satisfaction, not just lines of code generated.',
          'Organizations interested in adopting the approach can engage MoonSofts for an assessment workshop, pilot squad configuration, and playbook customization aligned to their control framework.',
        ],
      },
    ],
  },
  {
    id: 'industry-specific-solutions',
    date: '10 Apr 2026',
    category: 'Industry insights',
    filter: 'insights',
    image: siteImages.news.industrySolutions,
    title: 'Building Industry-Specific Solutions for E-Commerce, Healthcare, Fintech, and Logistics',
    excerpt:
      'Generic platforms fail when they ignore sector reality. MoonSofts industry practices pair domain context with reusable engineering accelerators—so clients get software that fits how they actually operate.',
    sections: [
      {
        paragraphs: [
          'MoonSofts detailed its industry-specific solution strategy—how the firm delivers software that respects sector constraints instead of forcing every client through the same template. The announcement coincides with dedicated industry pages, client voices, and sector leads embedded in new programs.',
          'Leadership argued that integration complexity, compliance, and uptime expectations vary so widely across sectors that “horizontal SaaS thinking” often fails enterprise buyers who need systems that mirror operational reality.',
        ],
      },
      {
        heading: 'E-commerce and digital commerce',
        paragraphs: [
          'For retail and digital commerce, MoonSofts brings expertise in catalog systems, payments, tax, fraud-aware checkout, and ERP integrations that keep revenue channels resilient at peak. Squads understand that a promotion weekend is not the time to discover a brittle integration.',
          'Programs typically begin with mapping order-to-cash flows, identifying single points of failure, and sequencing modernization so revenue-critical paths stay online while improvements land behind the scenes.',
        ],
      },
      {
        heading: 'Healthcare operations and platforms',
        paragraphs: [
          'Healthcare engagements embed privacy and security reviews from week one. MoonSofts supports patient-facing portals, clinical workflows, and secure integrations with HIPAA-aware data handling, BAA coordination, and operational dashboards providers can trust.',
          'Clinicians and administrators see progress in terms they understand: fewer manual steps, clearer scheduling, and systems that stay available when care teams need them—not in story points alone.',
        ],
      },
      {
        heading: 'Financial services and fintech',
        paragraphs: [
          'Financial services programs align engineering to auditability, least-privilege access, and counsel-aware delivery. MoonSofts engineers for evidence-ready releases: access logs, change records, test artifacts, and clear ownership that risk committees can review without translation layers.',
          'The firm supports core banking adjacency, payments integrations, and regulatory change management alongside product teams who cannot pause the roadmap for a three-month compliance project.',
        ],
      },
      {
        heading: 'Logistics and supply chain',
        paragraphs: [
          'Logistics clients receive operations-first discovery—warehouse handoffs, carrier APIs, exception handling, and last-mile visibility—before build commitments. MoonSofts has connected systems that were siloed for years, with squads that communicate clearly across time zones.',
          'Reusable accelerators for data pipelines, API integration patterns, and cloud landing zones speed delivery without erasing the nuance that makes each network unique.',
        ],
      },
      {
        heading: 'One standard, many contexts',
        paragraphs: [
          'Despite sector specialization, MoonSofts applies one delivery standard globally: accountable leads, transparent reporting, security gates, and handoff documentation clients own. Industry depth changes what you build—not whether you build it responsibly.',
          'Prospective clients can explore sector pages, read client testimonials, and contact consultants to map an engagement to their operational reality.',
        ],
      },
    ],
  },
  {
    id: 'reliable-technology-partner',
    date: '22 Mar 2026',
    category: 'Industry insights',
    filter: 'insights',
    image: siteImages.news.reliablePartner,
    title: 'Why Global Businesses Need a Reliable Technology Partner in the AI and Cloud Era',
    excerpt:
      'Cloud sprawl and AI experimentation create momentum—and risk. MoonSofts argues that global businesses win when a single accountable partner aligns architecture, delivery, and governance across borders.',
    sections: [
      {
        paragraphs: [
          'In a thought-leadership piece, MoonSofts examines why global businesses need a reliable technology partner as artificial intelligence and cloud adoption accelerate. The thesis is blunt: velocity without governance creates rework, incidents, and executive fatigue—and the antidote is accountability, not more vendors.',
          'Vendors multiply, data crosses regions, and internal teams are asked to modernize legacy systems while shipping new product lines—often with the same headcount. Something breaks unless someone owns the whole delivery system.',
        ],
      },
      {
        heading: 'Failure modes MoonSofts sees repeatedly',
        paragraphs: [
          'Handoffs without documentation. Consultants who disappear after kickoff. AI pilots that never acquire production controls. Architecture decisions made in slides but not reflected in repositories. Procurement optimizing for rate cards instead of outcomes.',
          'Each pattern erodes trust. Product leaders stop believing dates; security teams block releases; finance questions every invoice. The organization learns to expect disappointment—and top engineers leave.',
          'MoonSofts positions accountable consulting as the counterweight: named delivery leads, shared rituals, transparent status for executives, and engineers accessible across time zones without a ticket queue hidden behind account management.',
        ],
      },
      {
        heading: 'What “reliable” means in practice',
        paragraphs: [
          'Reliability is not perfection—it is predictability under stress. It means escalation paths that work at 2 a.m., access hygiene that auditors understand, and releases that ship with evidence attached.',
          'It also means honesty about trade-offs. MoonSofts argues that partners earn trust when they say no to scope that will break a date, when they document why a shortcut was taken, and when they stay through hypercare after go-live.',
        ],
      },
      {
        heading: 'AI and cloud require a single thread of ownership',
        paragraphs: [
          'AI experiments scattered across teams without a control model create compliance debt. Cloud accounts sprawl without landing-zone standards and create cost and security surprises. A single accountable partner aligns architecture, delivery, and governance so experiments can graduate to production—or stop before they become liabilities.',
          'MoonSofts integrates AI assistance inside governed SDLC rituals and cloud foundations designed for operate—not demo.',
        ],
      },
      {
        heading: 'Evidence that trust compounds',
        paragraphs: [
          'The piece highlights client renewal and expansion as the metric that matters. Programs that start with a bounded pilot and grow into multi-year partnerships indicate delivery that compounds—not transactions that reset trust every quarter.',
          'MoonSofts invites leaders evaluating partners to ask simple questions: Who owns the release? Who can my executives call? What evidence will security receive? What will my team operate after you leave?',
          '“Transformation” is easy to promise,” the piece concludes. “Predictable delivery is harder—and that is what global businesses need now.”',
        ],
      },
    ],
  },
]

/** First one or two sentences for newsroom cards and previews. */
export function firstSentences(text: string, count = 2) {
  const trimmed = text.trim()
  if (!trimmed) return ''
  const sentences = trimmed.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g)
  if (!sentences?.length) return trimmed
  return sentences
    .slice(0, count)
    .join('')
    .trim()
}

export { newsPath } from '@/lib/newsPath'

export function getNewsBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return newsArticles.find((article) => article.id === slug)
}

