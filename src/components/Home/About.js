import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Basically its just us. If you're looking to taking your stay-cation
            to the next level, a quick ride to Plano to visit how the other half
            lives.
          </p>
          <p>
            Looking for something out of this "state" ? Our booking and travel
            coordinators can help with some amazing packages to Leavenworth
            Kansas, Denver Colorado along with 4 wheel'n in Afton Wyoming.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
