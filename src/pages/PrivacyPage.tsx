import { ContentBlock } from '@/components/ContentBlock'
import { PageShell } from '@/components/PageShell'
import { legalNav } from '@/lib/pageNav'
import { siteImages } from '@/lib/siteImages'

export function PrivacyPage() {
  return (
    <PageShell
      section="Legal"
      title="Privacy and data protection"
      description="MoonSofts engineers trust the same way we engineer systems. This page summarizes our principles—replace with counsel-approved policies when formalizing the business."
      breadcrumbs={[{ label: 'Legal', to: '/privacy' }, { label: 'Privacy notice' }]}
      heroCta={{ label: 'Contact us', to: '/contact' }}
      heroImage={siteImages.hero.privacy}
      sidebarTitle="In this section"
      sidebarItems={legalNav}
    >
      <div className="space-y-[40px]">
        <ContentBlock label="Privacy & security" title="We engineer trust as a first-class discipline">
          <p>
            We minimize data, enforce least privilege, and prefer approved communication channels per engagement. The
            principles below apply to candidates, engineers, and client programs unless a specific contract states otherwise.
          </p>
        </ContentBlock>

        <ContentBlock label="Data minimization" title="Collect only what we need">
          <p>
            We collect only what we need to evaluate fit, coordinate engagements, and meet client obligations. When data is
            no longer required, we delete or anonymize it on a defined schedule.
          </p>
        </ContentBlock>

        <ContentBlock label="Access control" title="Least privilege by default">
          <p>
            Role-based access, short-lived credentials, and audited administrative actions are baseline expectations.
            Engineers receive least-privilege access to client systems, with clear offboarding steps.
          </p>
        </ContentBlock>

        <ContentBlock label="Communications" title="Approved channels only">
          <p>
            Sensitive conversations belong in approved channels with retention policies that match client requirements. We
            discourage shadow IT and document acceptable tooling per engagement.
          </p>
        </ContentBlock>

        <ContentBlock label="AI-assisted workflows" title="Humans in the loop for high-risk outputs" variant="highlight">
          <p>
            Where we use AI tooling, we do so with explicit data-handling rules: no client secrets in unmanaged prompts,
            human review for high-risk outputs, and logging that supports incident response.
          </p>
        </ContentBlock>

        <ContentBlock id="terms" label="Terms of use" title="Use of this website and materials">
          <p>
            Content on this site is provided for general information about MoonSofts. It does not constitute an offer,
            contract, or legal advice. By using this site you agree not to misuse materials or attempt unauthorized access to
            our systems.
          </p>
        </ContentBlock>

        <ContentBlock
          id="help"
          label="Privacy help center"
          title="Questions about your data"
          cta={{ label: 'Contact privacy team', to: '/contact' }}
        >
          <p>
            For access requests, corrections, or questions about how we handle personal information, contact us through the
            form on our contact page and mark your inquiry as a privacy request.
          </p>
        </ContentBlock>
      </div>
    </PageShell>
  )
}
