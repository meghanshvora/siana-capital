import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

/**
 * Rebuilds the original Squarespace header markup exactly.
 * Mobile menu toggle: Squarespace's JS normally adds/removes `header--menu-open`
 * on the <header> element. We replicate that with React state.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const toggleMenu = () => setMenuOpen((v) => !v)
  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    { label: 'About', to: '/', isHome: true },
    { label: 'Portfolio', to: '/portfolio', isHome: false },
    { label: 'Legal', to: '/legal', isHome: false },
  ]

  return (
    <header
      ref={headerRef}
      data-test="header"
      id="header"
      className={`header theme-col--primary${menuOpen ? ' header--menu-open' : ''}`}
      data-section-theme=""
      data-header-style="solid"
      style={{ '--solidHeaderNavigationColor': 'hsla(var(--black-hsl), 1)' } as React.CSSProperties}
    >
      {/* Announcement bar placeholder (empty) */}
      <div className="sqs-announcement-bar-dropzone"></div>

      <div className="header-announcement-bar-wrapper">
        <a href="#page" className="header-skip-link sqs-button-element--primary">
          Skip to Content
        </a>

        <div
          className="header-border"
          data-header-style="solid"
          data-header-border="false"
          data-test="header-border"
        ></div>
        <div
          className="header-dropshadow"
          data-header-style="solid"
          data-header-dropshadow="false"
          data-test="header-dropshadow"
        ></div>

        <div>
          <div
            className="header-background-solid"
            data-header-style="solid"
            data-test="header-background-solid"
            style={{ opacity: 'calc(100 * .01)' }}
          ></div>
        </div>

        {/* ── Inner header ────────────────────────────────────────── */}
        <div
          className="header-inner container--fluid header-mobile-layout-logo-left-nav-right header-layout-nav-right"
          data-test="header-inner"
        >
          <div className="header-background theme-bg--primary"></div>

          {/* Desktop */}
          <div className="header-display-desktop" data-content-field="site-title">
            <div className="header-title-nav-wrapper">
              <div className="header-title" data-animation-role="header-element">
                <div className="header-title-logo">
                  <Link
                    to="/"
                    data-animation-role="header-element"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <img
                      src="/images/Siana_logo.webp"
                      alt="Siana Capital Management"
                      style={{ display: 'block' }}
                      fetchPriority="high"
                      loading="eager"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-nav">
                <div className="header-nav-wrapper">
                  <nav className="header-nav-list" aria-label="Primary">
                    <ul>
                      {navItems.map(({ label, to, isHome }) => (
                        <li
                          key={to}
                          className={`header-nav-item header-nav-item--collection ${
                            isHome ? 'header-nav-item--homepage' : ''
                          }`}
                        >
                          <NavLink
                            to={to}
                            end
                            data-animation-role="header-element"
                            className={({ isActive }) =>
                              isActive ? 'header-nav-item--active' : ''
                            }
                          >
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="header-actions header-actions--right"></div>

            {/* Burger button */}
            <div
              className="header-burger menu-overlay-has-visible-non-navigation-items no-actions"
              data-animation-role="header-element"
            >
              <button
                className="header-burger-btn burger"
                data-test="header-burger"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              >
                <div className="burger-box">
                  <div className="burger-inner"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="header-display-mobile" data-content-field="site-title">
            <div className="header-title-nav-wrapper">
              <div className="header-title" data-animation-role="header-element">
                <div className="header-title-logo">
                  <Link
                    to="/"
                    data-animation-role="header-element"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <img
                      src="/images/Siana_logo.webp"
                      alt="Siana Capital Management"
                      style={{ display: 'block' }}
                      fetchPriority="high"
                      loading="eager"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-nav">
                <div className="header-nav-wrapper">
                  <nav className="header-nav-list" aria-label="Primary">
                    <ul>
                      {navItems.map(({ label, to, isHome }) => (
                        <li
                          key={`m-${to}`}
                          className={`header-nav-item header-nav-item--collection ${
                            isHome ? 'header-nav-item--homepage' : ''
                          }`}
                        >
                          <NavLink
                            to={to}
                            end
                            data-animation-role="header-element"
                            className={({ isActive }) =>
                              isActive ? 'header-nav-item--active' : ''
                            }
                          >
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="header-actions header-actions--right"></div>

            {/* Burger (mobile) */}
            <div
              className="header-burger menu-overlay-has-visible-non-navigation-items no-actions"
              data-animation-role="header-element"
            >
              <button
                className="header-burger-btn burger"
                data-test="header-burger"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              >
                <div className="burger-box">
                  <div className="burger-inner"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile overlay menu ───────────────────────────────────── */}
      <div
        className="header-menu header-menu--folder-list"
        data-section-theme=""
        data-section-id="overlay-nav"
        data-show-account-login="true"
        data-test="header-menu"
      >
        <div className="header-menu-bg theme-bg--primary"></div>
        <div className="header-menu-nav">
          <nav className="header-menu-nav-list" aria-label="Primary">
            <div data-folder="root" className="header-menu-nav-folder">
              <div className="header-menu-nav-folder-content">
                <div className="header-menu-nav-wrapper">
                  <ul>
                    {navItems.map(({ label, to, isHome }) => (
                      <li
                        key={`overlay-${to}`}
                        className={`header-menu-nav-item header-menu-nav-item--collection ${
                          isHome ? 'header-menu-nav-item--homepage' : ''
                        }`}
                      >
                        <NavLink
                          to={to}
                          end
                          className={({ isActive }) =>
                            isActive ? 'header-menu-nav-item--active' : ''
                          }
                          onClick={closeMenu}
                        >
                          <div className="header-menu-nav-item-content">{label}</div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      {/* </div> */}
      </div>

      <style>{`
        .header-nav-item {
          cursor: pointer !important;
          pointer-events: auto !important;
          transition: border-bottom 0.2s ease;
          display: inline-block !important;
          overflow: visible !important;
        }
        .header-nav-item--active {
          border-bottom: 2px solid #000 !important;
          padding-bottom: 2px !important;
        }
        /* Mobile menu items */
        .header-menu-nav-item, 
        .header-menu-nav-item * {
          cursor: pointer !important;
          pointer-events: auto !important;
        }
        .header-menu-nav-item--active .header-menu-nav-item-content {
          border-bottom: 2px solid #000 !important;
          display: inline-block !important;
        }

        /* Burger Styling - 2 lines to X */
        .header-burger-btn {
          width: 30px;
          height: 20px;
          position: relative;
          background: none !important;
          border: none !important;
          padding: 0 !important;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 10001;
        }
        .burger-box {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .burger-inner {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #000;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }
        .burger-inner::before,
        .burger-inner::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #000;
          transition: all 0.3s ease;
        }
        
        /* Two lines state: hide the middle line, show top and bottom */
        .header-burger-btn .burger-inner {
          background-color: transparent; /* middle line hidden for 2-line look */
        }
        .header-burger-btn .burger-inner::before {
          top: -8px;
        }
        .header-burger-btn .burger-inner::after {
          top: 8px;
        }

        /* Open state (X) */
        .header--menu-open .header-burger-btn .burger-inner::before {
          top: 0;
          transform: rotate(45deg);
        }
        .header--menu-open .header-burger-btn .burger-inner::after {
          top: 0;
          transform: rotate(-45deg);
        }

        /* Remove any Squarespace default box shadows or backgrounds that might cause the 'black box' */
        .header-burger-btn, .burger-box, .burger-inner {
          box-shadow: none !important;
        }
      `}</style>
    </header>
  )
}
