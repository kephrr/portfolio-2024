import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import Hero from "@/app/components/hero/hero";
import Slider from "@/app/components/slider/slider";
import Stepper from "@/app/components/stepper/stepper";


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
      </div>
  );
}
