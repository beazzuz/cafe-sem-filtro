import * as React from "react"
import * as styles from "./Menu.module.css"
import { StaticImage } from "gatsby-plugin-image"

import espresso from "../images/espresso.png"
import cappuccino from "../images/cappuccino.png"
import latte from "../images/latte.png"
import chocolateQuente from "../images/chocolate-quente.png"
import coldBrew from "../images/cold.png"
import icedLatte from "../images/iced.png"
import smoothie from "../images/smoothie.png"
import chaGelado from "../images/cha.png"
import croissant from "../images/croissant.png"
import paoDeQueijo from "../images/pao.png"
import torrada from "../images/torrada.png"
import sanduiche from "../images/sanduiche.png"

const categories = [
  {
    title: "Bebidas Quentes",
    items: [
      { name: "Espresso", desc: "Sabor intenso e marcante", image: espresso },
      { name: "Cappuccino", desc: "Com leite vaporizado e espuma cremosa", image: cappuccino },
      { name: "Latte", desc: "Mais leite, mais suavidade", image: latte },
      { name: "Chocolate Quente", desc: "Cremoso e reconfortante", image: chocolateQuente },
    ],
  },
  {
    title: "Bebidas Geladas",
    items: [
      { name: "Cold Brew", desc: "Extraído a frio, sabor suave", image: coldBrew },
      { name: "Iced Latte", desc: "Refrescante com leite gelado", image: icedLatte },
      { name: "Smoothie de Frutas Vermelhas", desc: "Refrescante, leve e naturalmente doce", image: smoothie },
      { name: "Chá Gelado de Limão Siciliano", desc: "Levemente ácido e super refrescante", image: chaGelado },
    ],
  },
  {
    title: "Lanches",
    items: [
      { name: "Croissant", desc: "Folhado amanteigado", image: croissant },
      { name: "Pão de Queijo", desc: "Clássico mineiro quentinho", image: paoDeQueijo },
      { name: "Torrada com Manteiga & Mel", desc: "Perfeito para acompanhar o café", image: torrada },
      { name: "Sanduíche Natural de Frango", desc: "Leve, saudável e saboroso", image: sanduiche },
    ],
  },
]

const Menu: React.FC = () => {
  const gridRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.scrollLeft = 0
      }
    }, 50)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="menu" className={styles.menuSection}>
      <h2 className={styles.title}>Menu</h2>

      <div ref={gridRef} className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.column}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            {category.items.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.icon}
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <a href="https://wa.me/5511991407988" target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>Faça Seu Pedido</button>
      </a>

      <StaticImage
        src="../images/splash.png"
        alt="café e grão caindo"
        className={styles.decorativeImage}
        placeholder="blurred"
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        width={600}
        height={400}
      />
      <StaticImage
        src="../images/splash2.png"
        alt="café espirrando"
        className={styles.decorativeImage2}
        placeholder="none"
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        width={500}
      />
    </section>
  )
}

export default Menu
