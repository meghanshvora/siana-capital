import React from 'react'

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Standard Squarespace page section wrapper */
function PageSection({
  theme,
  sectionId,
  children,
  heightClass = 'section-height--small',
}: {
  theme: string
  sectionId: string
  children: React.ReactNode
  heightClass?: string
}) {
  return (
    <section
      data-test="page-section"
      data-section-theme={theme}
      className={`page-section layout-engine-section background-width--full-bleed ${heightClass} content-width--wide horizontal-alignment--center vertical-alignment--middle ${theme}`}
      data-section-id={sectionId}
      data-animation="none"
      data-sqsp-section="classic-editor"
    >
      <div className="section-border">
        <div className="section-background"></div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div
            className="sqs-layout sqs-grid-12 columns-12"
            data-type="page-section"
            id={`page-section-${sectionId}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Text block (mirrors .sqs-block-html) */
function TextBlock({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`sqs-block website-component-block sqs-block-website-component sqs-block-html html-block ${className}`}
      data-block-type="1337"
      data-definition-name="website.components.html"
      data-sqsp-block="text"
      id={id}
    >
      <div className="sqs-block-content">
        <div className="sqs-text-block-container">
          <div className="sqs-html-content">{children}</div>
        </div>
      </div>
    </div>
  )
}

/** Spacer block */
function SpacerBlock({ id, vsize = 1 }: { id?: string; vsize?: number }) {
  return (
    <div
      className={`sqs-block website-component-block sqs-block-website-component sqs-block-spacer spacer-block sized vsize-${vsize}`}
      data-block-type="1337"
      data-definition-name="website.components.spacer"
      id={id}
    >
      <div className="sqs-block-content">&nbsp;</div>
    </div>
  )
}

/** Button block */
function ButtonBlock({ id, url, text }: { id: string; url: string; text: string }) {
  return (
    <div
      className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block"
      data-block-type="1337"
      data-definition-name="website.components.button"
      data-sqsp-block="button"
      id={id}
    >
      <div className="sqs-block-content">
        <div
          className="sqs-block-button-container sqs-block-button-container--center"
          data-animation-role="button"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
            data-initialized="true"
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  )
}

/** Image block (Inline design) */
function ImageBlock({
  id,
  src,
  alt,
  paddingBottom,
  className = '',
  maxWidth = '2500px',
}: {
  id: string
  src: string
  alt: string
  paddingBottom: string
  className?: string
  maxWidth?: string
}) {
  return (
    <div className={`sqs-block image-block sqs-block-image ${className}`} data-block-type="5" id={id}>
      <div className="sqs-block-content">
        <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-none individual-animation-none individual-text-animation-none">
          <figure className="sqs-block-image-figure intrinsic" style={{ maxWidth }}>
            <div className="image-block-wrapper" data-animation-role="image">
              <div
                className="sqs-image-shape-container-element has-aspect-ratio"
                style={{ position: 'relative', paddingBottom, overflow: 'hidden' }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    display: 'block',
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    objectPosition: '50% 50%',
                  }}
                  loading="lazy"
                  decoding="async"
                  className="loaded"
                />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

/** Row in the portfolio grid (Fund I uses `public/images/`; Fund II uses `fund2Logo()`). */
type PortfolioCompany = {
  name: string
  description: string
  logo: string
  url: string
  aspect: string
  maxWidth?: string
  blockIds: { image: string; text: string; button: string }
}

/** Asset URL for files in `public/Fund II Logos/` (path segments are URL-safe for `<img src>`). */
function fund2Logo(filename: string) {
  return `/Fund%20II%20Logos/${encodeURIComponent(filename)}`
}

/** Siana Fund I — portfolio companies */
const fund1Portfolio: PortfolioCompany[] = [
  {
    name: 'Evolko',
    description:
      'AI-assisted remote monitoring embedded into outpatient clinical workflow.',
    logo: '/images/Evolko_Logo.webp',
    url: 'https://evolko.com/',
    aspect: '17.28%',
    blockIds: { image: 'block-6971515f644293fc70a2', text: 'block-50b7fee5d8cbfac383ea', button: 'block-5a0bbdf73d8a54191806' }
  },
  {
    name: 'eKincare',
    description:
      'Patented employee benefits platform, AI-driven health intelligence across 10,000+ provider network.',
    logo: '/images/eKincare.webp',
    url: 'https://www.ekincare.com/',
    aspect: '20%',
    blockIds: { image: 'block-8d05eb51cc7d7b9fb604', text: 'block-99e5d0f468d4618ae4d9', button: 'block-55972024ee1809e9b279' }
  },
  {
    name: 'Proklean',
    description:
      'Specialty chemicals company building probiotics-first, bio-based formulations to displace petrochemicals in industrial applications.',
    logo: '/images/Proklean_Logo.webp',
    url: 'https://proklean.in/',
    aspect: '23.4%',
    blockIds: { image: 'block-c61f0a88fdba31c08fc3', text: 'block-c5991f0479fbe43f3819', button: 'block-eb96e88d9a77f6305791' }
  },
  {
    name: 'Zumutor',
    description:
      'NK cell immuno-oncology company, first-in-class antibodies on proprietary INABLR human antibody platform.',
    logo: '/images/Zumutor_Logo.webp',
    url: 'https://zumutor.com/',
    aspect: '53.6%',
    blockIds: { image: 'block-zumutor-img', text: 'block-zumutor-txt', button: 'block-zumutor-btn' }
  },
  {
    name: 'Gramophone',
    description: 'Full-stack agritech platform and input supply chain across 2M+ farmers.',
    logo: '/images/Gramophone_Logo.webp',
    url: 'https://gramophone.in/?lang=en',
    aspect: '24.95%',
    blockIds: { image: 'block-5ad1e8994cfe8d9c9947', text: 'block-205e46f2b14190dc8e76', button: 'block-dfd3f84ef6fe0f03256a' }
  },
  {
    name: 'Gramcover',
    description:
      'Rural insurtech aggregator; crop, livestock and health covers distributed via O2O POSP agent network.',
    logo: '/images/GC_Logo.webp',
    url: 'https://gramcover.com/',
    aspect: '100%',
    maxWidth: '200px',
    blockIds: { image: 'block-gramcover-img', text: 'block-gramcover-txt', button: 'block-gramcover-btn' }
  },
  {
    name: 'Neewee',
    description:
      'Industrial AI and digital twin for manufacturing processes which helps in operationalizing dynamic production.',
    logo: '/images/SC_Neewee_Logo.webp',
    url: 'https://neewee.ai/',
    aspect: '65.1%',
    maxWidth: '200px',
    blockIds: { image: 'block-08d18d87573e99abc149', text: 'block-2eef8600973a00501269', button: 'block-58c2b328d561cd05df94' }
  },
  {
    name: '3rd Flix',
    description:
      'Immersive AR/VR edtech for K-12, cinematic spatial computing content delivered as B2B SaaS.',
    logo: '/images/3rdFlix_Logo.jpg',
    url: 'https://www.practically.com/',
    aspect: '100%',
    maxWidth: '220px',
    blockIds: { image: 'block-8e1ff9d95dd47b618d89', text: 'block-93f88e3b1a7804a9db2f', button: 'block-fdd9264964cd06b23320' }
  }
]

/** Siana Fund II — recent portfolio companies (`public/Fund II Logos/`) */
const fund2Recent: PortfolioCompany[] = [
  {
    name: 'Atomgrid',
    description:
      'R&D-first, asset-light speciality chemical company with proprietary formulation IP.',
    logo: fund2Logo('atomgrid_logo.png'),
    url: 'https://www.atomgrid.in/',
    aspect: '28%',
    blockIds: { image: 'block-f2r-atomgrid-img', text: 'block-f2r-atomgrid-txt', button: 'block-f2r-atomgrid-btn' }
  },
  {
    name: 'PierSight',
    description: 'SAR-Satellite based earth observation and intelligence company.',
    logo: fund2Logo('PierSight-Space-.png'),
    url: 'https://piersight.space/',
    aspect: '28%',
    blockIds: { image: 'block-f2r-piersight-img', text: 'block-f2r-piersight-txt', button: 'block-f2r-piersight-btn' }
  },
  {
    name: 'Produktiv.ai',
    description:
      'Governs how enterprise AI tools handle company data, deeply embedded into core data stacks.',
    logo: fund2Logo('Produktiv_Logo.png'),
    url: 'https://www.produktiv.ai/',
    aspect: '28%',
    blockIds: { image: 'block-f2r-produktiv-img', text: 'block-f2r-produktiv-txt', button: 'block-f2r-produktiv-btn' }
  },
  {
    name: 'CoreOps',
    description:
      'Deploys AI agents to modernise legacy enterprise systems using pre-built ERP and CRM connectors.',
    logo: fund2Logo('coreops_ai_logo.png'),
    url: 'https://www.coreops.ai/',
    aspect: '28%',
    blockIds: { image: 'block-f2r-coreops-img', text: 'block-f2r-coreops-txt', button: 'block-f2r-coreops-btn' }
  }
]

/** Siana Fund II — existing portfolio companies (`public/Fund II Logos/`) */
const fund2Existing: PortfolioCompany[] = [
  {
    name: 'The Energy Company',
    description:
      'Builds energy storage solutions with a cell-agnostic AI-powered Battery Management System.',
    logo: fund2Logo('TEC-logo.png'),
    url: 'https://www.energycompany.in/',
    aspect: '28%',
    blockIds: { image: 'block-f2e-tec-img', text: 'block-f2e-tec-txt', button: 'block-f2e-tec-btn' }
  },
  {
    name: 'Ykrita',
    description:
      'Treats liver failure without a transplant using a patented bioengineered artificial liver device.',
    logo: fund2Logo('Ykrita_Logo.png'),
    url: 'https://ykrita.com/',
    aspect: '100%',
    maxWidth: '220px',
    blockIds: { image: 'block-f2e-ykrita-img', text: 'block-f2e-ykrita-txt', button: 'block-f2e-ykrita-btn' }
  },
  {
    name: 'SmartTerra',
    description:
      'Helps city water utilities find leaks and illegal connections using proprietary AI dashboard.',
    logo: fund2Logo('SmartTerra Logo.png'),
    url: 'https://www.smartterra.io/',
    aspect: '28%',
    blockIds: { image: 'block-f2e-smartterra-img', text: 'block-f2e-smartterra-txt', button: 'block-f2e-smartterra-btn' }
  },
  {
    name: 'Ayekart',
    description:
      'Connects farmers to retailers through supply chain tech and embedded financing across a network of FPOs.',
    logo: fund2Logo('Ayekart_logo.png'),
    url: 'https://ayekart.com/',
    aspect: '28%',
    blockIds: { image: 'block-f2e-ayekart-img', text: 'block-f2e-ayekart-txt', button: 'block-f2e-ayekart-btn' }
  },
  {
    name: 'Metadome',
    description:
      'Lets brands sell through 3D, AR, and VR experiences powered by 100,000+ photorealistic assets on any device.',
    logo: fund2Logo('Metadome_Logo.png'),
    url: 'https://www.metadome.ai/',
    aspect: '28%',
    blockIds: { image: 'block-f2e-metadome-img', text: 'block-f2e-metadome-txt', button: 'block-f2e-metadome-btn' }
  }
]

function PortfolioCompanyRows({ companies, idPrefix }: { companies: PortfolioCompany[]; idPrefix: string }) {
  return (
    <>
      {companies.map((company, index) => (
        <React.Fragment key={company.blockIds.image}>
          <div className="row sqs-row">
            <div className="col sqs-col-6 span-6">
              <ImageBlock
                id={company.blockIds.image}
                src={company.logo}
                alt={`${company.name} Logo`}
                paddingBottom={company.aspect}
                maxWidth={company.maxWidth}
              />
            </div>
            <div className="col sqs-col-6 span-6">
              <TextBlock id={company.blockIds.text}>
                <p style={{ whiteSpace: 'pre-wrap' }}>{company.description}</p>
              </TextBlock>
            </div>
          </div>

          <SpacerBlock id={`spacer-before-btn-${idPrefix}-${index}`} />

          <ButtonBlock
            id={company.blockIds.button}
            url={company.url}
            text={`Visit ${company.name}`}
          />

          <SpacerBlock id={`spacer-after-item-${idPrefix}-${index}`} />
        </React.Fragment>
      ))}
    </>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <article className="sections" id="sections">
      <h1 style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        Portfolio
      </h1>
      <PageSection theme="white-bold" sectionId="69b7be8713c91a6817dcf51a">
        <SpacerBlock id="block-ad01058a8559341ecc6a" />
        
        <TextBlock id="block-764997688790dd4adfb6">
          <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap', fontWeight: 'bold', color: '#022255', fontSize: '1.6rem' }}>
            Our Portfolio Pushes the Boundaries of Innovation in Business Using the Bedrocks of Science & Technology. Companies are grouped by Siana Fund I and Fund II below, with links to each.
          </p>
        </TextBlock>

        <SpacerBlock id="block-a4f3b9d52310cab04f33" />

        <TextBlock id="block-portfolio-fund1-heading">
          <h2 style={{ textAlign: 'center', color: '#022255', fontSize: '1.45rem', fontWeight: 'bold', margin: '0 0 0.25rem' }}>
            Siana Fund I
          </h2>
          <p style={{ textAlign: 'center', color: '#022255', fontSize: '1.05rem', margin: 0 }}>Portfolio companies</p>
        </TextBlock>

        <SpacerBlock id="block-spacer-after-f1-title" />

        <PortfolioCompanyRows companies={fund1Portfolio} idPrefix="f1" />

        <SpacerBlock id="block-spacer-between-funds" vsize={2} />

        <TextBlock id="block-portfolio-fund2-heading">
          <h2 style={{ textAlign: 'center', color: '#022255', fontSize: '1.45rem', fontWeight: 'bold', margin: '0 0 0.25rem' }}>
            Siana Fund II
          </h2>
        </TextBlock>

        <SpacerBlock id="block-spacer-after-f2-main-title" />

        <TextBlock id="block-portfolio-f2-recent-sub">
          <h3 style={{ textAlign: 'center', color: '#022255', fontSize: '1.15rem', fontWeight: 'bold', margin: '0 0 0.15rem' }}>
            Recent portfolio companies
          </h3>
        </TextBlock>

        <SpacerBlock id="block-spacer-before-f2-recent" />

        <PortfolioCompanyRows companies={fund2Recent} idPrefix="f2r" />

        <SpacerBlock id="block-spacer-between-f2-subsections" vsize={2} />

        <TextBlock id="block-portfolio-f2-existing-sub">
          <h3 style={{ textAlign: 'center', color: '#022255', fontSize: '1.15rem', fontWeight: 'bold', margin: '0 0 0.15rem' }}>
            Existing portfolio companies
          </h3>
        </TextBlock>

        <SpacerBlock id="block-spacer-before-f2-existing" />

        <PortfolioCompanyRows companies={fund2Existing} idPrefix="f2e" />
      </PageSection>
    </article>
  )
}
