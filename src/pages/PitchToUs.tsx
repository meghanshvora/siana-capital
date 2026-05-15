import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormState {
  firstName: string
  lastName: string
  email: string
  subject: string
  description: string
}

const EMPTY: FormState = { firstName: '', lastName: '', email: '', subject: '', description: '' }
type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function PitchToUs() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    try {
      // TODO: replace with real endpoint (e.g. Formspree, EmailJS, serverless function)
      await new Promise<void>((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <article className="sections" id="sections" data-page-sections="69b7be8713c91a6817dcf475">

      {/* ── Pitch form section ────────────────────────────────── */}
      <section
        data-test="page-section"
        data-section-theme="white-bold"
        className="page-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--middle white-bold"
        data-section-id="69b7be8713c91a6817dcf473"
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
              id="page-section-69b7be8713c91a6817dcf473"
            >
              <div className="row sqs-row">
                <div className="col sqs-col-12 span-12">

                  {/* Heading */}
                  <div
                    className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block"
                    data-block-type="1337"
                    data-definition-name="website.components.html"
                    data-sqsp-block="text"
                    id="block-66b200bec72f137e5e5307d4"
                  >
                    <div className="sqs-block-content">
                      <div className="sqs-text-block-container">
                        <div className="sqs-html-content">
                          <h1 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                            <span className="sqsrte-text-color--black">PITCH TO SIANA CAPITAL</span>
                          </h1>
                          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#666', marginTop: '-10px', marginBottom: '20px' }}>
                            * indicates required fields
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form block */}
                  <div
                    className="sqs-block website-component-block sqs-block-website-component sqs-block-form form-block"
                    data-block-type="1337"
                    data-definition-name="website.components.form"
                    data-sqsp-block="form"
                    id="block-yui_3_17_2_1_1722941661351_1959"
                  >
                    <div className="sqs-block-content">
                      <div className="sqs-site-style-form">

                        {status === 'success' ? (
                          <div className="form-wrapper">
                            <div className="form-submission-text">
                              <p style={{ textAlign: 'center' }}>
                                Thank you! We've received your submission and will be in touch shortly.
                              </p>
                              <div className="form-button-wrapper--align-center" style={{ marginTop: '1.5em' }}>
                                <button
                                  className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
                                  onClick={() => setStatus('idle')}
                                >
                                  Submit another pitch
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <form
                            className="form-wrapper"
                            id="form-66b20105d160d46746edfd4c"
                            onSubmit={handleSubmit}
                            noValidate
                          >
                            <div className="field-list">

                              {/* Name field */}
                              <div className="field section name">
                                <fieldset className="fields name">
                                  <div className="field first-name">
                                    <label className="title" htmlFor="firstName">
                                      First Name <span className="required">*</span>
                                    </label>
                                    <input
                                      id="firstName"
                                      name="firstName"
                                      type="text"
                                      className="field-element"
                                      required
                                      aria-required="true"
                                      autoComplete="given-name"
                                      value={form.firstName}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="field last-name">
                                    <label className="title" htmlFor="lastName">
                                      Last Name <span className="required">*</span>
                                    </label>
                                    <input
                                      id="lastName"
                                      name="lastName"
                                      type="text"
                                      className="field-element"
                                      required
                                      aria-required="true"
                                      autoComplete="family-name"
                                      value={form.lastName}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </fieldset>
                              </div>

                              {/* Email */}
                              <div className="field section email">
                                <label className="title" htmlFor="email">
                                  Email <span className="required">*</span>
                                </label>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  className="field-element"
                                  required
                                  aria-required="true"
                                  autoComplete="email"
                                  value={form.email}
                                  onChange={handleChange}
                                />
                              </div>

                              {/* Subject */}
                              <div className="field section text">
                                <label className="title" htmlFor="subject">
                                  Subject <span className="required">*</span>
                                </label>
                                <input
                                  id="subject"
                                  name="subject"
                                  type="text"
                                  className="field-element"
                                  required
                                  aria-required="true"
                                  value={form.subject}
                                  onChange={handleChange}
                                />
                              </div>

                              {/* Description textarea */}
                              <div className="field section textarea">
                                <label className="title" htmlFor="description">
                                  Describe your start-up in a few lines{' '}
                                  <span className="required">*</span>
                                </label>
                                <textarea
                                  id="description"
                                  name="description"
                                  className="field-element"
                                  required
                                  aria-required="true"
                                  rows={5}
                                  value={form.description}
                                  onChange={handleChange}
                                />
                              </div>

                              {status === 'error' && (
                                <div className="field-error">
                                  Something went wrong. Please try again or email{' '}
                                  <a href="mailto:info@sianacapital.com">info@sianacapital.com</a>.
                                </div>
                              )}

                              {/* Submit */}
                              <div className="form-button-wrapper--align-left">
                                <input
                                  type="submit"
                                  className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element form-submit-btn"
                                  value={status === 'submitting' ? 'Submitting…' : 'Submit'}
                                  disabled={status === 'submitting'}
                                />
                              </div>

                            </div>
                          </form>
                        )}

                      </div>
                    </div>
                  </div>

                  {/* Legal section */}
                  <div
                    className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block"
                    data-block-type="1337"
                    data-definition-name="website.components.html"
                    data-sqsp-block="text"
                    id="block-yui_3_17_2_1_1773553626637_2078"
                  >
                    <div className="sqs-block-content">
                      <div className="sqs-text-block-container">
                        <div className="sqs-html-content">
                            <h2 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>Legal:</em>
                              </span>
                            </h2>
                            <h3 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">Disclaimer Information:</span>
                            </h3>
                            <p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>
                                  This entire web-site presentation has been prepared by Siana Capital
                                  Management LLP (Siana) exclusively for the benefit and internal use of
                                  potential investors and is for discussion purposes only
                                </em>
                              </span>
                            </p>
                            <p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>
                                  By accepting this summary presentation, you expressly agree to accept and
                                  comply with the following terms and conditions or, if you or your institution
                                  executes a confidentiality or similar agreement with respect to the information
                                  provided herein, to comply with the terms of that agreement, which shall
                                  supersede these requirements
                                </em>
                              </span>
                            </p>
                            <p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>
                                  This summary presentation does not constitute an offer or solicitation. Any
                                  offer will only be made pursuant to a separate writing that will be distributed
                                  to potential investors
                                </em>
                              </span>
                            </p>
                            <p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>
                                  You should conduct your own investigation and analysis of the data set forth in
                                  this summary presentation. Siana does not assume any responsibility for
                                  independent verification of any of the information contained herein, including
                                  the projections and the assumptions on which the projections are based. Siana
                                  makes no representation or warranty (expressed or implied) as to the accuracy
                                  or completeness of the information contained in this summary presentation
                                </em>
                              </span>
                            </p>
                            <p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>
                                  Further, Siana expressly disclaim liability for (i) representations and
                                  warranties, expressed or implied, arising from or with respect to the
                                  statements contained in this summary presentation, (ii) omissions from this
                                  summary presentation, or (iii) any written or oral communication transmitted or
                                  made available in connection herewith. Moreover, the recipient of this summary
                                  presentation is not entitled to rely upon any oral statement or communication
                                  made to it or any of its affiliates or representatives in the course of its
                                  investigation of the proposed Investment. The information and data contained
                                  herein are provided to assist you in making your own evaluation of the proposed
                                  Investment, including as to the risks involved, and does not purport to be
                                  all-inclusive or to contain all of the information that a prospective investor
                                  may desire
                                </em>
                              </span>
                            </p>
                            <p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <em>
                                  No representations or warranties are made as the accuracy of such statements,
                                  estimates or projections. Recipients are cautioned that any such forward looking
                                  statements are not guarantees of future performance and involve risks and
                                  uncertainties, and that actual results may differ materially from those in the
                                  forward looking statements
                                </em>
                              </span>
                            </p>
                            <h3 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">
                                <br />
                                Name of the Funds:
                              </span>
                            </h3>
                            <ul data-rte-list="default">
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Deep Science India Fund</span></p></li>
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">DSIF II</span></p></li>
                            </ul>
                            <h3 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">Category of AIFs:</span>
                            </h3>
                            <ul data-rte-list="default">
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Category II</span></p></li>
                            </ul>
                            <h3 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">SEBI Registration Nos:</span>
                            </h3>
                            <ul data-rte-list="default">
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">IN/AIF2/18-19/0528 (Deep Science India Fund)</span></p></li>
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">IN/AIF2/22-23/1082 (DSIF II)</span></p></li>
                            </ul>
                            <h3 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">Name of Investment Manager:</span>
                            </h3>
                            <ul data-rte-list="default">
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">Siana Capital Management LLP</span></p></li>
                            </ul>
                            <h3 style={{ whiteSpace: 'pre-wrap' }}>
                              <span className="sqsrte-text-color--black">Scores&nbsp;IDs:</span>
                            </h3>
                            <ul data-rte-list="default">
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">AIF01201 (Deep Science India Fund)</span></p></li>
                              <li><p className="sqsrte-small" style={{ whiteSpace: 'pre-wrap' }}><span className="sqsrte-text-color--black">AIF00978 (DSIF II)</span></p></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  )
}
