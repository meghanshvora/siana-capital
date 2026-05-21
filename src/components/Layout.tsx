import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

/**
 * All pages on the original Squarespace site share this long body class string.
 * It activates hundreds of CSS rules in site.css (the "tweak-*" system).
 */
const SHARED_BODY_CLASS =
  'tweak-blog-alternating-side-by-side-width-full tweak-blog-alternating-side-by-side-image-aspect-ratio-11-square tweak-blog-alternating-side-by-side-text-alignment-left tweak-blog-alternating-side-by-side-read-more-style-show tweak-blog-alternating-side-by-side-image-text-alignment-middle tweak-blog-alternating-side-by-side-delimiter-bullet tweak-blog-alternating-side-by-side-meta-position-top tweak-blog-alternating-side-by-side-primary-meta-categories tweak-blog-alternating-side-by-side-secondary-meta-date tweak-blog-alternating-side-by-side-excerpt-show image-block-poster-text-alignment-left image-block-card-content-position-center image-block-card-text-alignment-left image-block-overlap-content-position-center image-block-overlap-text-alignment-left image-block-collage-content-position-center image-block-collage-text-alignment-left image-block-stack-text-alignment-left form-use-theme-colors form-field-style-solid form-field-shape-square form-field-border-bottom form-field-checkbox-type-icon form-field-checkbox-fill-outline form-field-checkbox-color-inverted form-field-checkbox-shape-square form-field-checkbox-layout-stack form-field-radio-type-icon form-field-radio-fill-outline form-field-radio-color-inverted form-field-radio-shape-square form-field-radio-layout-stack form-field-survey-fill-outline form-field-survey-color-inverted form-field-survey-shape-square form-field-hover-focus-opacity form-submit-button-style-bar tweak-global-animations-complexity-level-detailed tweak-global-animations-animation-style-fade tweak-global-animations-animation-type-none tweak-global-animations-animation-curve-ease tweak-blog-masonry-width-full tweak-blog-masonry-text-alignment-left tweak-blog-masonry-primary-meta-categories tweak-blog-masonry-secondary-meta-date tweak-blog-masonry-meta-position-top tweak-blog-masonry-read-more-style-show tweak-blog-masonry-delimiter-space tweak-blog-masonry-image-placement-above tweak-blog-masonry-excerpt-show tweak-portfolio-grid-overlay-width-full tweak-portfolio-grid-overlay-height-large tweak-portfolio-grid-overlay-image-aspect-ratio-11-square tweak-portfolio-grid-overlay-text-placement-center tweak-portfolio-grid-overlay-show-text-after-hover tweak-blog-single-column-width-full tweak-blog-single-column-text-alignment-center tweak-blog-single-column-image-placement-above tweak-blog-single-column-delimiter-bullet tweak-blog-single-column-read-more-style-show tweak-blog-single-column-primary-meta-categories tweak-blog-single-column-secondary-meta-date tweak-blog-single-column-meta-position-top tweak-blog-single-column-content-full-post header-width-full tweak-fixed-header-style-basic tweak-blog-item-width-medium tweak-blog-item-text-alignment-center tweak-blog-item-meta-position-above-title tweak-blog-item-show-categories tweak-blog-item-show-date tweak-blog-item-delimiter-bullet tweak-blog-side-by-side-width-full tweak-blog-side-by-side-image-placement-left tweak-blog-side-by-side-image-aspect-ratio-11-square tweak-blog-side-by-side-primary-meta-categories tweak-blog-side-by-side-secondary-meta-date tweak-blog-side-by-side-meta-position-top tweak-blog-side-by-side-text-alignment-left tweak-blog-side-by-side-image-text-alignment-middle tweak-blog-side-by-side-read-more-style-show tweak-blog-side-by-side-delimiter-bullet tweak-blog-side-by-side-excerpt-show primary-button-style-solid primary-button-shape-square secondary-button-style-outline secondary-button-shape-square tertiary-button-style-outline tertiary-button-shape-underline tweak-events-stacked-width-full tweak-events-stacked-height-large tweak-events-stacked-show-thumbnails tweak-events-stacked-thumbnail-size-32-standard tweak-events-stacked-date-style-with-text tweak-events-stacked-show-time tweak-events-stacked-show-location tweak-events-stacked-show-excerpt tweak-blog-basic-grid-width-inset tweak-blog-basic-grid-image-aspect-ratio-32-standard tweak-blog-basic-grid-text-alignment-center tweak-blog-basic-grid-delimiter-bullet tweak-blog-basic-grid-image-placement-above tweak-blog-basic-grid-read-more-style-show tweak-blog-basic-grid-primary-meta-categories tweak-blog-basic-grid-secondary-meta-date tweak-blog-basic-grid-excerpt-show tweak-portfolio-grid-basic-width-full tweak-portfolio-grid-basic-height-large tweak-portfolio-grid-basic-image-aspect-ratio-11-square tweak-portfolio-grid-basic-text-alignment-left tweak-portfolio-grid-basic-hover-effect-fade header-overlay-alignment-center tweak-portfolio-index-background-link-format-stacked tweak-portfolio-index-background-width-full tweak-portfolio-index-background-height-large tweak-portfolio-index-background-vertical-alignment-middle tweak-portfolio-index-background-horizontal-alignment-center tweak-portfolio-index-background-delimiter-none tweak-portfolio-index-background-animation-type-fade tweak-portfolio-index-background-animation-duration-medium tweak-portfolio-hover-follow-layout-inline tweak-portfolio-hover-follow-delimiter-bullet tweak-portfolio-hover-follow-animation-type-fade tweak-portfolio-hover-follow-animation-duration-fast tweak-portfolio-hover-static-layout-inline tweak-portfolio-hover-static-front tweak-portfolio-hover-static-delimiter-hyphen tweak-portfolio-hover-static-animation-type-fade tweak-portfolio-hover-static-animation-duration-fast hide-opentable-icons opentable-style-dark tweak-product-quick-view-button-style-floating tweak-product-quick-view-button-position-bottom tweak-product-quick-view-lightbox-excerpt-display-truncate tweak-product-quick-view-lightbox-show-arrows tweak-product-quick-view-lightbox-show-close-button tweak-product-quick-view-lightbox-controls-weight-light native-currency-code-usd'

/** Per-page body id + extra classes that differ between routes */
const PAGE_BODY: Record<string, { id: string; extra: string }> = {
  '/': {
    id: 'homepage',
    extra: 'homepage collection-type-page collection-layout-default collection-69b7be8713c91a6817dcf4b4 mobile-style-available sqs-seven-one',
  },
  '/legal': {
    id: 'legal',
    extra: 'collection-type-page collection-layout-default collection-66b200bec72f137e5e5307d3 mobile-style-available sqs-seven-one',
  },
  '/portfolio': {
    id: 'collection-66b08ad3f3b6d50bb6eff850',
    extra: 'collection-type-page collection-layout-default mobile-style-available sqs-seven-one',
  },
  '/cart': {
    id: 'cart',
    extra: 'cart mobile-style-available sqs-seven-one',
  },
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const pageData = PAGE_BODY[pathname] ?? PAGE_BODY['/']
    document.body.id = pageData.id
    document.body.className = `${SHARED_BODY_CLASS} ${pageData.extra}`
    window.scrollTo({ top: 0, behavior: 'instant' })

    return () => {
      document.body.id = ''
      document.body.className = ''
    }
  }, [pathname])

  return (
    <div id="siteWrapper" className="clearfix site-wrapper">
      <Navbar />
      <main id="page" className="container" role="main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
