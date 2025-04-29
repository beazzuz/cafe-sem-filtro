import * as React from "react"
import * as styles from "./Sobre.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Sobre: React.FC = () => {
  return (
    <section className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossa história</h2>

        <div className={styles.textContent}>
          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              <p>
                Inspirado pela paixão por cafés especiais, o Café Sem Filtro
                nasceu com a missão de oferecer mais do que uma bebida — uma
                verdadeira experiência artesanal. Nosso propósito vai além de
                servir um bom café: queremos criar conexões, despertar sentidos e
                transformar momentos simples em memórias inesquecíveis.
              </p>
              <p>
                Desde o início, buscamos construir um espaço onde cada detalhe
                importa. Do atendimento caloroso ao ambiente cuidadosamente
                pensado, tudo foi idealizado para proporcionar aconchego e
                autenticidade.
              </p>
            </p>

            <p className={styles.paragraph}>
              <p>
                Valorizamos os detalhes: da escolha de grãos sustentáveis,
                cultivados por pequenos produtores comprometidos com a qualidade
                e o meio ambiente, até o preparo cuidadoso de cada xícara.
                Acreditamos que o café é um ritual — de pausa, de encontro, de
                presença.
              </p>
              <p>
                Aqui, cada gole conta uma história. Cada aroma evoca uma
                lembrança. E cada visita é um convite para viver o café de forma
                mais humana, sensível e especial.
              </p>
            </p>
          </div>
        </div>

        <div className={styles.block}>
          <StaticImage
            src="../images/preparo_sobre.png"
            alt="Preparo"
            className={styles.image}
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            width={400}  
            height={500} 
          />
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>Métodos de Preparo Exclusivos</h3>
            <p className={styles.paragraph}>
              <p>
                No Café Sem Filtro, o preparo do café é tratado como uma arte.
                Cada bebida é feita com dedicação e cuidado, utilizando métodos
                que respeitam e valorizam a essência do grão — como prensa
                francesa, aeropress, V60 e o tradicional coado.
              </p>
              <br />
              <p>
                Acreditamos que o preparo é tão importante quanto a origem do
                café. Nossa equipe de baristas é treinada constantemente para
                garantir precisão em cada detalhe: da temperatura da água à
                granulometria ideal, da infusão ao tempo de extração.
              </p>
              <br />
              <p>
                Cada método proporciona uma experiência sensorial diferente,
                despertando nuances de aroma, textura e sabor que encantam até
                os paladares mais exigentes. Aqui, cada xícara conta uma
                história.
              </p>
            </p>
          </div>
        </div>

        <div className={`${styles.block} ${styles.blockReverse}`}>
          <StaticImage
            src="../images/graos_sobre.png"
            alt="Grãos"
            className={styles.image}
            layout="constrained"
            width={400}  
            height={500} 
          />
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>Grãos Selecionados e Sustentáveis</h3>
            <p className={styles.paragraph}>
              <p>
                Nosso compromisso com a qualidade começa na origem. Trabalhamos
                com pequenos produtores locais que compartilham dos nossos valores
                de ética, sustentabilidade e excelência.
              </p>
              <br />
              <p>
                Os grãos são cultivados em regiões de terroir especial, onde o
                clima, o solo e o manejo fazem toda a diferença no resultado
                final. A colheita é manual, respeitando o tempo natural de
                maturação de cada fruto.
              </p>
              <br />
              <p>
                Após a seleção, os grãos passam por processos de torra
                artesanal que respeitam suas características naturais. Isso
                resulta em cafés com sabores complexos, notas únicas e aroma
                inconfundível.
              </p>
              <br />
              <p>
                Mais do que uma bebida, oferecemos uma conexão com a terra, com
                as pessoas e com a cultura do café. Um café fresco, ético e
                inesquecível — do campo à sua xícara.
              </p>
            </p>
          </div>
        </div>

        <div className={styles.gallerySection}>
          <h3 className={styles.subtitle}>Momentos Café Sem Filtro</h3>
          <div className={styles.gallery}>
            <StaticImage
              src="../images/galeria1.jpg"
              alt="Ambiente do café"
                layout="constrained"
              formats={["auto", "webp", "avif"]}              
              width={250}  
              height={170} 
            />
            <StaticImage
              src="../images/galeria2.jpg"
              alt="Barista preparando café"
                layout="constrained"
              formats={["auto", "webp", "avif"]}              
              width={250}  
              height={170} 
            />
            <StaticImage
              src="../images/galeria3.jpg"
              alt="Clientes felizes"
                layout="constrained"
              formats={["auto", "webp", "avif"]}              
              width={250}  
              height={170} 
              />
            <StaticImage
              src="../images/galeria4.jpeg"
              alt="Café latte e bolo"
                layout="constrained"
              formats={["auto", "webp", "avif"]}             
               width={250}  
              height={170} 
            />
            <StaticImage
              src="../images/galeria5.jpg"
              alt="Croissant de chocolate"
                layout="constrained"
              formats={["auto", "webp", "avif"]}              
              width={250}  
              height={170} 
            />
            <StaticImage
              src="../images/galeria6.jpg"
              alt="Clientes felizes"
                layout="constrained"
              formats={["auto", "webp", "avif"]}              
              width={250}  
              height={170} 
            />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/#menu" className={styles.ctaButton}>
            Ver menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Sobre
