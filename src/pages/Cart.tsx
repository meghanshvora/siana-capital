import { Link } from 'react-router-dom'

/**
 * Cart page — Squarespace cart system page structure.
 * Siana Capital has no store; this renders an empty-cart message
 * using the same Squarespace system-page markup.
 */
export default function Cart() {
  return (
    <div className="system-page">
      <div
        className="sqs-layout sqs-grid-12 columns-12"
        data-type="system-page"
        id="sqs-cart-root"
      >
        <div
          className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block"
          data-block-type="1337"
          data-definition-name="website.components.html"
          data-sqsp-block="text"
        >
          <div className="sqs-block-content">
            <div className="sqs-text-block-container">
              <div className="sqs-html-content">
                <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                  <span className="sqsrte-text-color--black">YOUR CART</span>
                </h2>
                <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                  Siana Capital Management does not operate an online store.
                  If you are looking for information on our investment activities
                  or wish to get in touch, please visit our home page or pitch
                  your start-up to us.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block"
          data-block-type="1337"
          data-definition-name="website.components.button"
          data-sqsp-block="button"
          style={{ '--sqs-block-content-flex': '0' } as React.CSSProperties}
        >
          <div className="sqs-block-content">
            <div
              className="sqs-block-button-container sqs-block-button-container--center"
              data-animation-role="button"
              data-button-size="medium"
              data-button-type="primary"
            >
              <Link
                to="/"
                className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div
          className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block"
          data-block-type="1337"
          data-definition-name="website.components.button"
          data-sqsp-block="button"
          style={{ '--sqs-block-content-flex': '0' } as React.CSSProperties}
        >
          <div className="sqs-block-content">
            <div
              className="sqs-block-button-container sqs-block-button-container--center"
              data-animation-role="button"
              data-button-size="medium"
              data-button-type="primary"
            >
              <Link
                to="/pitch-to-us"
                className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
              >
                Pitch to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
