import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Lakes @ Carrollton"
        info=" Travel to some exotic and magical venues within the cities borders. Experience the best in stay-cations serving up delicious cuisines, fine dining and family from from faraway locations like 'Farmers Branch' and 'Plano'.
        Your fantasy destination awaits."
      >
        <Link to="/tours" className="btn-white">
          discover
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
