import { siteImages } from '@/lib/siteImages'

const industryContent = [
  {
    id: 'ecommerce',
    label: 'E-commerce',
    title: 'Digital commerce & retail platforms',
    body: 'Storefronts, payments, catalog systems, and ERP integrations that keep revenue channels resilient at scale.',
    heroImage: siteImages.industries.ecommerce.hero,
    pageImage: siteImages.industries.ecommerce.page,
    highlights: [
      'Headless commerce and omnichannel storefronts',
      'Payments, tax, and fraud-aware checkout flows',
      'Catalog, pricing, and inventory synchronization',
      'ERP, WMS, and marketplace integrations',
    ],
    support: {
      intro:
        'Retail and digital commerce teams operate under constant pressure—peak seasons, promotions, and new channels cannot wait for slow delivery cycles. MoonSofts embeds with your product, engineering, and operations leaders to keep revenue paths stable while you modernize.',
      detail:
        'We assign senior architects and squad leads who understand catalog complexity, payment risk, and the integration sprawl typical of growing commerce brands. You get a named delivery lead, weekly executive-ready status, and direct access to engineers—not a ticket queue hidden behind account management.',
      services: [
        'Discovery and roadmap alignment with merchandising and engineering stakeholders',
        'Dedicated squads for storefront, platform, and integration workstreams',
        '24/7 escalation paths during launches, migrations, and peak trading windows',
        'Runbooks, observability, and handoff documentation your team owns after go-live',
        'Post-launch tuning: performance, conversion bottlenecks, and technical debt paydown',
      ],
    },
    cta: { label: 'Discuss commerce solutions', to: '/contact' },
  },
  {
    id: 'logistics',
    label: 'Logistics',
    title: 'Supply chain & fulfillment software',
    body: 'Warehouse visibility, carrier integrations, and last-mile coordination across complex operational networks.',
    heroImage: siteImages.industries.logistics.hero,
    pageImage: siteImages.industries.logistics.page,
    highlights: [
      'Warehouse and yard management systems',
      'Carrier APIs, routing, and rate shopping',
      'Last-mile tracking and exception handling',
      'Demand forecasting and inventory visibility',
    ],
    support: {
      intro:
        'Logistics programs fail when software does not reflect how warehouses, carriers, and customer service teams actually work. MoonSofts starts on the operations floor—mapping handoffs, exceptions, and data gaps before we commit to a build plan.',
      detail:
        'Our consultants stay accountable to throughput and reliability metrics, not just story points. We coordinate across time zones with clear ownership, so your operations directors always know who to call when a carrier API changes or a peak season hits early.',
      services: [
        'Operational discovery with warehouse, transport, and customer-experience teams',
        'Integration specialists for TMS, WMS, ERP, and carrier network APIs',
        'Pilot deployments in one node or lane before enterprise-wide rollout',
        'Training and enablement for floor supervisors and dispatch coordinators',
        'Ongoing support retainers for exception handling, new carriers, and site expansions',
      ],
    },
    cta: { label: 'Optimize your supply chain', to: '/contact' },
  },
  {
    id: 'financial',
    label: 'Financial services',
    title: 'Regulated & data-sensitive programs',
    body: 'Platforms engineered with auditability, least-privilege access, and counsel-aware delivery practices.',
    heroImage: siteImages.industries.financial.hero,
    pageImage: siteImages.industries.financial.page,
    highlights: [
      'Audit trails, controls, and evidence-ready delivery',
      'Least-privilege access and segregation of duties',
      'Core banking and payments-adjacent integrations',
      'Regulatory change management with product teams',
    ],
    support: {
      intro:
        'Financial services clients need more than speed—they need evidence. MoonSofts treats compliance, security, and delivery as one conversation, with controls designed in from discovery rather than bolted on before release.',
      detail:
        'We integrate with your risk, legal, and internal audit functions early. Every sprint produces artifacts your stakeholders can review: access logs, change records, test evidence, and clear ownership. Our teams have supported programs where counsel and engineering sit in the same rhythm—not opposing forces.',
      services: [
        'Joint planning with risk, compliance, and product leadership',
        'Least-privilege access, segregation of duties, and audit-ready delivery trails',
        'Secure SDLC practices aligned to your control framework',
        'Vendor and core-system integration without weakening control posture',
        'Executive reporting tailored for board, risk, and technology committees',
      ],
    },
    cta: { label: 'Talk to our team', to: '/contact' },
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Healthcare operations & platforms',
    body: 'Patient-facing portals, clinical workflows, and secure integrations engineered for privacy, uptime, and regulated care delivery.',
    heroImage: siteImages.industries.healthcare.hero,
    pageImage: siteImages.industries.healthcare.page,
    highlights: [
      'Patient portals and scheduling experiences',
      'Clinical workflow and care coordination tools',
      'HIPAA-aware integrations and data handling',
      'Operational dashboards for providers and administrators',
    ],
    support: {
      intro:
        'Healthcare organizations cannot afford downtime or ambiguous data handling. MoonSofts supports clinical, operational, and IT leaders with delivery that respects HIPAA, uptime expectations, and the reality of understaffed technology teams.',
      detail:
        'We partner with your security and privacy officers from week one—documenting data flows, access patterns, and integration boundaries before code ships. Clinicians and administrators see progress in terms they understand: fewer manual steps, clearer schedules, and systems that stay available when care teams need them.',
      services: [
        'Privacy and security review integrated into every delivery phase',
        'Clinical and operations stakeholder workshops before build commitments',
        'Patient-facing and back-office squads with shared release coordination',
        'BAA-aware vendor coordination and integration governance',
        'Hypercare support after go-live with defined clinical escalation paths',
      ],
    },
    cta: { label: 'Explore healthcare delivery', to: '/contact' },
  },
  {
    id: 'construction',
    label: 'Construction',
    title: 'Construction & field operations',
    body: 'Project controls, workforce coordination, and site-to-office systems that connect schedules, assets, and stakeholders across build programs.',
    heroImage: siteImages.industries.construction.hero,
    pageImage: siteImages.industries.construction.page,
    highlights: [
      'Project controls, budgets, and change management',
      'Field workforce and subcontractor coordination',
      'Site-to-office reporting and document control',
      'Equipment, materials, and asset tracking',
    ],
    support: {
      intro:
        'Construction technology only works when field crews, project managers, and finance share the same picture. MoonSofts helps general contractors and developers connect site activity to headquarters—without forcing trades to fight unfamiliar software.',
      detail:
        'We design for low-connectivity environments, mobile-first workflows, and the document-heavy reality of build programs. Your project controls team gets dashboards they trust; supers and subcontractors get tools that fit how work actually gets done on site.',
      services: [
        'Field discovery sessions on active jobsites before platform design',
        'Rollout playbooks by project phase—mobilization, execution, closeout',
        'Integrations with estimating, ERP, and document management systems',
        'On-site training and champion programs for supers and PMs',
        'Retained support for new projects, acquisitions, and portfolio expansions',
      ],
    },
    cta: { label: 'Discuss construction software', to: '/contact' },
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    title: 'Manufacturing & industrial operations',
    body: 'MES, quality systems, supply planning, and shop-floor software that connects production lines, inventory, and enterprise ERP without brittle spreadsheets.',
    heroImage: siteImages.industries.manufacturing.hero,
    pageImage: siteImages.industries.manufacturing.page,
    highlights: [
      'Manufacturing execution and work-instruction systems',
      'Quality, traceability, and non-conformance workflows',
      'Production planning tied to demand and materials',
      'OT/IT integration with ERP, PLM, and warehouse systems',
    ],
    support: {
      intro:
        'Manufacturers need software that survives shift changes, partial connectivity on the floor, and auditors who ask for evidence—not screenshots. MoonSofts embeds with operations, quality, and IT to modernize without stopping the line.',
      detail:
        'We map value streams before we commit to platforms: where data is created, who owns exceptions, and what must stay available when a line goes down. Squads include engineers comfortable with industrial integrations, not only greenfield web apps.',
      services: [
        'Gemba-style discovery with production, quality, and maintenance leaders',
        'MES-adjacent workflows, dashboards, and mobile tools for operators',
        'Integration with ERP, PLM, SCADA, and warehouse systems',
        'Pilot lines or plants before enterprise rollout with clear success metrics',
        'Retained support for new SKUs, plants, acquisitions, and compliance changes',
      ],
    },
    cta: { label: 'Discuss manufacturing programs', to: '/contact' },
  },
  {
    id: 'education',
    label: 'Education',
    title: 'Education & learning platforms',
    body: 'Learning management, student information, and campus operations built for accessibility, privacy, and the pace of academic calendars.',
    heroImage: siteImages.industries.education.hero,
    pageImage: siteImages.industries.education.page,
    highlights: [
      'LMS, cohort, and assessment experiences',
      'Student information and enrollment workflows',
      'Accessibility and inclusive design by default',
      'Integrations with SIS, payment, and identity providers',
    ],
    support: {
      intro:
        'Schools, universities, and training providers run on tight calendars and diverse stakeholders—faculty, registrars, students, and parents. MoonSofts delivers platforms that respect FERPA-style privacy expectations and the reality of understaffed IT teams.',
      detail:
        'We partner with academic and operations leaders to phase rollouts around terms and accreditation cycles. Faculty see tools that fit how courses actually run; administrators get reporting they trust; students get experiences that work on mobile and assistive technology.',
      services: [
        'Stakeholder workshops with academic affairs, IT, and student success teams',
        'Privacy-by-design delivery with documented data flows and access controls',
        'LMS extensions, portals, and custom learning workflows',
        'SIS, identity, and payment integrations with clear ownership',
        'Term-based hypercare and enhancement retainers aligned to academic calendars',
      ],
    },
    cta: { label: 'Explore education solutions', to: '/contact' },
  },
] as const

export const industries = industryContent

export type Industry = (typeof industries)[number]

export function industryPath(id: string) {
  return `/industries/${id}`
}

export function getIndustryBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return industries.find((sector) => sector.id === slug)
}
