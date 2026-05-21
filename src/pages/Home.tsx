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
            <div className="row sqs-row">
              <div className="col sqs-col-12 span-12">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Text block (mirrors .sqs-block-html) */
function TextBlock({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div
      className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block"
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

// ─── Team data ────────────────────────────────────────────────────────────────

const team = [
  {
    blockId: 'block-yui_3_17_2_1_1722839345865_6361',
    role: 'CO-FOUNDER &amp; MANAGING PARTNER',
    name: 'Dr. Siddharth (Sid) Pai',
    photo: '/images/SidPai.webp',
    alt: '',
    bio: [
      'Past President, Member of the Board, and Chief Strategy Officer at ISG Inc.',
      'Over 35 years of Finance and Technology consulting experience. Multi-billion dollar technology contract negotiations (over $80 billion) for path-breaking technology services and M&A transactions.',
      'Significant international technology P&L leadership experience, USA, Europe &amp; Asia-Pac (over $500 mn).',
      'Managing Partner at IBM and KPMG.',
      'Respected columnist and industry expert on deep technology issues.',
      'Angel Investor; Mentor to deep science and deep tech start-ups: FinTech, FashionTech, Artificial Intelligence.',
      'Doctorate (Technology), Purdue University.',
    ],
  },
  {
    blockId: 'block-yui_3_17_2_1_1722840748732_51913',
    role: 'CO-FOUNDER &amp; MANAGING PARTNER',
    name: 'Dr. Archana Hingorani',
    photo: '/images/ArchanHingorani.webp',
    alt: '',
    bio: [
      'Past CEO &amp; ED of IL&amp;FS Investment Managers, founding member of IL&amp;FS Private Equity.',
      'Pioneering Private Equity experience in India and Asia over two decades – managed over $3.8 billion.',
      'Led 14 large and small Private Equity funds across investment strategies in over 150 transactions.',
      'Successful turnaround experience of a stressed PE fund portfolio.',
      'Significant investment experience in sunrise sectors.',
      'Doctorate (Finance), University of Pittsburgh.',
    ],
  },
  {
    blockId: 'block-yui_3_17_2_1_1722841410341_38548',
    role: 'PARTNER',
    name: 'Dinesh Goel',
    photo: '/images/DineshGoel.webp',
    alt: '',
    bio: [
      'Varied senior operational management and consulting experience of over 25 years.',
      'Angel investor; mentor to deep science and tech start-ups: IoT solutions, online fraud detection, mobile data analytics, and 3D printing of human organoids.',
      'Strategy consulting experience of over 10 years at Accenture and Infosys advising large Indian and Multinational companies on their growth strategies and change agenda.',
      'Partner &amp; India Managing Director at ISG Inc. leading both India business and operations in the immediate past corporate role.',
      'ACA, AICMA.',
    ],
  },
  {
    blockId: 'block-yui_3_17_2_1_1722841641521_38907',
    role: 'PRINCIPAL',
    name: 'Varun Kapoor',
    photo: '/images/VarunKapoor.webp',
    alt: '',
    bio: [
      'Varied investment management experience of over a dozen years.',
      'Sector specialties include health-tech, enterprise SaaS, mobility, Virtual Reality and Energy.',
      'Background in both banking and direct investment.',
      'Significant operational experience in investee company growth.',
      'Charter Holder, CFA.',
    ],
  },
  {
    blockId: 'block-yui_3_17_2_1_1763879055431_12481',
    role: 'PRINCIPAL',
    name: 'Siddharth Shah',
    photo: '/images/SiddharthShah.webp',
    alt: '',
    bio: [
      'Multiple years of buy-side investment experience, both public and private.',
      'Sector specialties include Artificial Intelligence, green chemistry, manufacturing IoT, agritech, and B2B SaaS.',
      'Background in both financial risk management and direct investment.',
      "Bachelor's and Master's degrees in Finance, Certified FRM.",
    ],
  },
]

function TeamMemberBlock({ member }: { member: (typeof team)[0] }) {
  return (
    <>
      <div
        className="sqs-block image-block sqs-block-image"
        data-block-type="5"
        id={member.blockId}
      >
        <div className="sqs-block-content">
          <figure
            className="sqs-block-image-figure image-block-outer-wrapper image-block-v2 design-layout-card combination-animation-none individual-animation-none individual-text-animation-none image-position-left"
            data-scrolled
            data-test="image-block-v2-outer-wrapper"
          >
            <div className="intrinsic">
              <div className="image-inset" data-animation-role="image" data-description="">
                <div
                  className="sqs-image-shape-container-element content-fit"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <img
                    src={member.photo}
                    alt={member.alt}
                    style={{ display: 'block', objectFit: 'contain' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="image-overlay" style={{ overflow: 'hidden' }}></div>
                </div>
              </div>
            </div>

            <figcaption className="image-card-wrapper">
              <div className="image-card sqs-dynamic-text-container">
                <div className="image-title-wrapper">
                  <div className="image-title sqs-dynamic-text">
                    <h4 style={{ whiteSpace: 'pre-wrap' }}>
                      <span dangerouslySetInnerHTML={{ __html: member.role }} />
                      <br />
                      <em>{member.name}</em>
                    </h4>
                  </div>
                </div>
                <div className="image-subtitle-wrapper">
                  <div className="image-subtitle sqs-dynamic-text">
                    {member.bio.map((line, i) => (
                      <p
                        key={i}
                        style={{ whiteSpace: 'pre-wrap' }}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Spacer between team members */}
      <div
        className="sqs-block website-component-block sqs-block-website-component sqs-block-spacer spacer-block sized vsize-1"
        data-block-type="1337"
        data-definition-name="website.components.spacer"
      >
        <div className="sqs-block-content">&nbsp;</div>
      </div>
    </>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <article className="sections" id="sections" data-page-sections="69b7be8713c91a6817dcf4b4">

      {/* Hero */}
      <PageSection theme="bright-inverse" sectionId="69b7be8713c91a6817dcf4b2">
        <TextBlock id="block-yui_3_17_2_1_1722854989964_38741">
          <h1 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">
              Siana Capital: Venture fund manager specializing in the deep tech and science domains
              of the India growth story
            </span>
          </h1>
        </TextBlock>

        {/* Spacer */}
        <div className="sqs-block website-component-block sqs-block-website-component sqs-block-spacer spacer-block sized vsize-1" data-block-type="1337">
          <div className="sqs-block-content">&nbsp;</div>
        </div>

        {/* Our Lens */}
        <TextBlock id="block-yui_3_17_2_1_1773661721197_7366">
          <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">OUR LENS</span>
          </h2>
          <h3 style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black"><em>Focus:</em></span>
          </h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">
              Investments in firms with stabilized product-market fit at the inflection point of explosive market growth
            </span>
          </p>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">
              Maintain close engagement with investee firms to drive business growth and efficiency through to profitable exit
            </span>
          </p>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">
              Leverage our firm's local and global networks both pre and post investment
            </span>
          </p>
          <h3 style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black"><em>Sectors:</em></span>
          </h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">
              Artificial Intelligence, AgriTech, Biotech, BioSciences, CleanTech, FinTech, Healthcare, SaaS, Virtual Reality
            </span>
          </p>
          <h3 style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black"><em>Investment Tickets:</em></span>
          </h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">Typical investment size of $1 to $3 million</span>
          </p>
        </TextBlock>

        {/* Spacer */}
        <div className="sqs-block website-component-block sqs-block-website-component sqs-block-spacer spacer-block sized vsize-1" data-block-type="1337">
          <div className="sqs-block-content">&nbsp;</div>
        </div>

        {/* Investment Strategy heading */}
        <TextBlock id="block-yui_3_17_2_1_1773661721197_10930">
          <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">INVESTMENT STRATEGY</span>
          </h2>
        </TextBlock>

        {/* Row 1: Deep Innovation & Risk Mitigation */}
        <div className="row sqs-row">
          <div className="col sqs-col-6 span-6">
            <TextBlock id="block-yui_3_17_2_1_1722854989964_226535">
              <h3 style={{ whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black"><em>Deep Innovation:</em></span>
              </h3>
              <p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black">
                  Invest in "deep innovation" based ideas driven by science and technology that are
                  path-breaking with high profitability potential (and possibly socially relevant for
                  broader impact).
                </span>
              </p>
            </TextBlock>
          </div>
          <div className="col sqs-col-6 span-6">
            <TextBlock id="block-yui_3_17_2_1_1722854989964_202063">
              <h3 style={{ whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black"><em>Risk Mitigation:</em></span>
              </h3>
              <p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black">
                  Risk Mitigation through Technology and Intellectual Property Differentiation,
                  Competitive Advantage and Market Defensibility
                </span>
              </p>
            </TextBlock>
          </div>
        </div>

        {/* Row 2: Stages & Target Companies */}
        <div className="row sqs-row">
          <div className="col sqs-col-6 span-6">
            <TextBlock id="block-yui_3_17_2_1_1722854989964_230595">
              <h3 style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black"><em>Stages:</em></span>
              </h3>
              <p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black">
                  Enter at early to mid-stages: primarily series A and series B - prior to exit. This
                  allows our funds to play in the early value creation game and yet avoid seed stage
                  investment risk. Further, the inherent risk of venture investment is balanced across
                  the portfolio by stages, technology domains, industry sectors, and investment ticket
                  sizes.
                </span>
              </p>
            </TextBlock>
          </div>
          <div className="col sqs-col-6 span-6">
            <TextBlock id="block-yui_3_17_2_1_1722854989964_210522">
              <h3 style={{ whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black"><em>Target Companies:</em></span>
              </h3>
              <p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                <span className="sqsrte-text-color--black">Target companies with game-changing ideas:</span>
              </p>
              <ul data-rte-list="default">
                <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">New products, methods, tools</span></p></li>
                <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">New markets or customer segments</span></p></li>
                <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">New cost/value equations</span></p></li>
              </ul>
            </TextBlock>
          </div>
        </div>

        {/* Spacer */}
        <div className="sqs-block website-component-block sqs-block-website-component sqs-block-spacer spacer-block sized vsize-1" data-block-type="1337">
          <div className="sqs-block-content">&nbsp;</div>
        </div>

        {/* Investment Team heading + overview */}
        <TextBlock id="block-yui_3_17_2_1_1773661721197_8854">
          <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black">INVESTMENT TEAM</span>
          </h2>
          <h3 style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black"><em>Experience:</em></span>
          </h3>
          <ul data-rte-list="default">
            <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Partners and Principals with over 100 years of cumulative experience across technology, operations, and investments - all at scale</span></p></li>
            <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Active investors with ability to add significant value - strategic decisions, go-to-market, and global network</span></p></li>
          </ul>
          <h3 style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black"><em>Complementary Skills:</em></span>
          </h3>
          <ul data-rte-list="default">
            <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Complementary expertise across geographies, functions and sectors - leadership in financial, operational and strategic leadership roles. And Siana's Advisory Boards provide world-leading Environment, Governance, Social, Scientific and Technology Expertise</span></p></li>
          </ul>
          <h3 style={{ whiteSpace: 'pre-wrap' }}>
            <span className="sqsrte-text-color--black"><em>Cohesion:</em></span>
          </h3>
          <ul data-rte-list="default">
            <li><p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Team jointly working on investment transactions since 2018</span></p></li>
          </ul>
        </TextBlock>

        {/* Spacer */}
        <div className="sqs-block website-component-block sqs-block-website-component sqs-block-spacer spacer-block sized vsize-1" data-block-type="1337">
          <div className="sqs-block-content">&nbsp;</div>
        </div>

        {/* Team member cards */}
        {team.map((member) => (
          <TeamMemberBlock key={member.blockId} member={member} />
        ))}
      </PageSection>
    </article>
  )
}
