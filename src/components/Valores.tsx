// src/components/Valores.tsx

import * as React from "react"
import * as styles from "./Valores.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Valores: React.FC = () => {
  return (
    <section className={styles.valores}>
      <div className={styles.item}>
        <StaticImage
          src="../images/preparo.png"
          alt="Preparo Artesanal"
          formats={["auto", "webp", "avif"]}
          width={100}  
          height={100} 
        />
        <h2>Preparo Artesanal</h2>
        <p>
          Explore métodos como prensa francesa e coador Hario. Cada técnica
          revela um novo sabor.
        </p>
      </div>

      <div className={styles.item}>
        <StaticImage
          src="../images/graos.png"
          alt="Grãos Sustentáveis"
          formats={["auto", "webp", "avif"]}
          width={100}   
          height={100}  
        />
        <h2>Grãos Sustentáveis</h2>
        <p>
          Selecionamos cafés de pequenos produtores que cultivam com cuidado e
          respeito à natureza.
        </p>
      </div>

      <div className={styles.item}>
        <StaticImage
          src="../images/vivencia.png"
          alt="Vivência com o Café"
          formats={["auto", "webp", "avif"]}
          width={100}   
          height={100}  
        />
        <h2>Vivência com o Café</h2>
        <p>
          Participe de workshops e degustações. Conheça a jornada do grão à
          sua xícara.
        </p>
      </div>
    </section>
  )
}

export default Valores
