import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import Hero from "@/app/components/hero/hero";

export default function Home() {
  return (
      <div>
          <Header> </Header>
          <Hero></Hero>
      </div>
  );
}
