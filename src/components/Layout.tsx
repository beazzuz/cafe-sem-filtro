import * as React from "react"
import * as styles from "./Layout.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

type LayoutProps = {
  children: React.ReactNode
  variant?: "default" | "sobre"
}

const Layout: React.FC<LayoutProps> = ({ children, variant = "default" }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const closeMenu = () => setMenuOpen(false)
  React.useEffect(() => {
    setMenuOpen(false)
  }, [])
  
 
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])
  
 
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }
  
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  

  return (
    <div className={styles.body}>
      <header
        className={`${styles.header} ${variant === "sobre" ? styles.sobreHeader : ""}`}
      >
        {variant === "sobre" ? (
          <StaticImage
            src="../images/header_sobre.jpg"
            alt="Fundo Sobre"
            className={styles.headerBackground}
            quality={50}
            layout="fullWidth"
            formats={["avif", "webp", "auto"]}
          />
        ) : (
          <StaticImage
            src="../images/header_img.jpg"
            alt="Fundo Café"
            className={styles.headerBackground}
            quality={50}
            layout="fullWidth"
            formats={["avif", "webp", "auto"]}
          />
        )}

        <div className={styles.navbar}>
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              alt="Café Sem Filtro"
              className={styles.logo}
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              width={160}
              height={91}
            />
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir Menu"
          >
            <span />
            <span />
            <span />
          </button>

          
          
            <nav className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>{/* SOMENTE renderiza o menu após o componente montar */}
              <ul>
                <li><a href="/#menu" className={styles.navLink} onClick={closeMenu}>Menu</a></li>
                <li><a href="/#workshop" className={styles.navLink}>Workshop</a></li>
                {variant === "sobre" ? (
                  <li><a href="/sobre/#contato" className={styles.navLink} onClick={closeMenu}>Contato</a></li>
                ) : (
                  <>
                    <li><a href="#contato" className={styles.navLink} onClick={closeMenu}>Contato</a></li>
                    <li><Link to="/sobre" className={styles.navLink} onClick={closeMenu}>Sobre</Link></li>
                  </>
                )}
                <li id={styles.wpp}>
                  <a href="https://wa.me/5511991407988" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          
        </div>

        <div className={styles.herowrap}>
          <div className={styles.heroContent}>
            {variant === "sobre" ? (
              <h1>Sobre Nós</h1>
            ) : (
              <>
                <h1>
                  Mais que café,
                  <br />
                  uma experiência artesanal
                </h1>
                <button
                  type="button"
                  className={styles.ctaButton}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId("menu")
                  }}
                >
                  Ver menu
                </button>
              </>
            )}
          </div>
        </div>
       
      </header>

      <main>{children}


      </main>
      
      <footer id="contato" className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h2>Café Sem Filtro</h2>
            <a
              href="https://maps.google.com/"
              className={styles.addressLink}
            >
              <p>Rua dos Grãos de Café - CEP 12345-678</p>
            </a>
            <p>Seg a Sáb | 06:00 – 19:00</p>
          </div>

          <div className={styles.footerSection}>
            <h2>Contato</h2>
            <p>(11) 99140-7988</p>
            <p>
              <a
                href="https://wa.me/5511991407988"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                <StaticImage
                  src="../images/wpp_icon.png"
                  alt="WhatsApp"
                  className={styles.icon}
                      layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  width={20}   
                  height={20}  
                />
                <span>WhatsApp</span>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/facebook-icon.png"
                alt="Facebook"
                  layout="fixed"
                formats={["auto", "webp", "avif"]}
                width={24}   
                height={24}  
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/youtube-icon.png"
                alt="YouTube"
                  layout="fixed"
                formats={["auto", "webp", "avif"]}
                width={24}   
                height={24}  
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/instagram-icon.png"
                alt="Instagram"
                  layout="fixed"
                formats={["auto", "webp", "avif"]}
                width={24}   
                height={24}  
              />
            </a>
          </div>
          <p className={styles.copy}>&copy;2025 Café Sem Filtro</p>
        </div>
      </footer>
    </div>
  )
}
const scrollToId = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default Layout
