export type BrandItem = {
  name: string
  slug: string
}

/** simple-icons package version on jsDelivr (reliable SVG hosting) */
const SIMPLE_ICONS_VERSION = '13.0.0'

export const workflowTools: BrandItem[] = [
  { name: 'Slack', slug: 'slack' },
  { name: 'Figma', slug: 'figma' },
  { name: 'ClickUp', slug: 'clickup' },
  { name: 'Miro', slug: 'miro' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Notion', slug: 'notion' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Linear', slug: 'linear' },
]

export type TechStackItem = BrandItem

export type TechStackGroup = {
  title: string
  items: TechStackItem[]
}

export const techStackGroups: TechStackGroup[] = [
  {
    title: 'Product & web',
    items: [
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Vite', slug: 'vite' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'TanStack Query', slug: 'reactquery' },
      { name: 'React Router', slug: 'reactrouter' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Express', slug: 'express' },
      { name: 'Zod', slug: 'zod' },
      { name: 'tRPC', slug: 'trpc' },
      { name: 'Auth', slug: 'auth0' },
    ],
  },
  {
    title: 'Data & persistence',
    items: [
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'Redis', slug: 'redis' },
      { name: 'Amazon S3', slug: 'amazons3' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Docker', slug: 'docker' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'AWS', slug: 'amazonwebservices' },
      { name: 'Google Cloud', slug: 'googlecloud' },
      { name: 'Terraform', slug: 'terraform' },
      { name: 'Grafana', slug: 'grafana' },
      { name: 'Sentry', slug: 'sentry' },
    ],
  },
  {
    title: 'AI engineering',
    items: [
      { name: 'OpenAI', slug: 'openai' },
      { name: 'Anthropic', slug: 'anthropic' },
      { name: 'LangChain', slug: 'langchain' },
      { name: 'Vector search', slug: 'milvus' },
    ],
  },
  {
    title: 'Data engineering',
    items: [
      { name: 'dbt', slug: 'dbt' },
      { name: 'Apache Airflow', slug: 'apacheairflow' },
      { name: 'Snowflake', slug: 'snowflake' },
      { name: 'Apache Kafka', slug: 'apachekafka' },
    ],
  },
]

/** Alternate slugs when primary icon is missing on the CDN */
export const brandSlugFallback: Record<string, string> = {
  amazonwebservices: 'amazon',
  reactquery: 'react',
}

export function brandIconUrl(slug: string) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`
}
