import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Valores from "../components/Valores"
import Menu from "../components/Menu"
import Workshop from "../components/Workshop"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Valores />
  <section id="menu">
    <Menu />
  </section>
  <section id="workshop">
    <Workshop />
  </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Café Sem Filtro</title>
