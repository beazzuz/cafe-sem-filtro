// src/components/Workshop.tsx

import * as React from "react"
import * as styles from "./Workshop.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Workshop: React.FC = () => {
  return (
    <section id="workshop" className={styles.section}>
      <StaticImage
  src="../images/graos_sel.png"
  alt="Grãos decorativos"
  className={styles.decorativeBeans}
  placeholder="tracedSVG"
  formats={["auto", "webp"]}
  layout="fixed"
  width={605}
  height={775}
  
/>

      <div className={styles.content}>
        <h2>Workshop de Barista</h2>
        <p>
          Aprenda os segredos por trás de um café perfeito com quem entende do assunto.
          <br />
          Nossos workshops são experiências práticas e imersivas, onde você desenvolve técnicas de barista, descobre métodos de preparo e entende o verdadeiro valor de cada grão.
          <br />
          Ideal para amantes do café, curiosos ou aspirantes a profissionais.
          <br />
          <strong>Transforme sua paixão por café em habilidade!</strong>
        </p>
        <a
          href="https://wa.me/5511991407988"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Saiba Mais</button>
        </a>
      </div>

      <div className={styles.imageGrid}>
        <StaticImage
          src="../images/workshop_pg12.jpg"
          alt="Workshop - imagem principal"
          className={styles.imageLarge}
          layout="constrained"
          formats={["auto", "webp"]}
          
          width={725}   
          height={300}  
        
        />
        <div className={styles.smallImages}>
          <StaticImage
            src="../images/workshop_pg11.jpg"
            alt="Workshop - imagem adicional 1"
              layout="constrained"
            formats={["auto", "webp"]}
            width={350}   
            height={350}  
          />
          <StaticImage
            src="../images/workshop_11.png"
            alt="Workshop - imagem adicional 2"
              layout="constrained"
            formats={["auto", "webp"]}
            width={300}   
            height={350}  
          />
        </div>
      </div>
    </section>
  )
}

export default Workshop
