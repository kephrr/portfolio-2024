import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import Hero from "@/app/components/hero/hero";
import Slider from "@/app/components/slider/slider";
import Stepper from "@/app/components/stepper/stepper";
import PresentCard from "@/app/components/present-card/present-card";


export default function Home() {
  return (
      <div>
          <Header> </Header>
          <Hero></Hero>
          <div className={styles.center}>
              <h1>My technical competencies</h1>
          </div>
          <Slider></Slider>
          <div className={styles.center}>
              <Stepper></Stepper>
          </div>
          <div className={styles.center}>
              <h1>Curricum Vitae</h1>
          </div>
          <div className={styles.center}>
              <PresentCard></PresentCard>
          </div>
      </div>
  );
}
