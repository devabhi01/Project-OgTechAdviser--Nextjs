"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import sun from "./sun.png";
import moon from "./moon.png";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toogle } = useContext(ThemeContext);

  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toogle}
      style={
        theme === "dark"
          ? {  backgroundColor: "#fff" }
          : {  backgroundColor: "#0f172a" }
      }
    >
      <Image src={moon} alt="sun" width={20} height={20} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "#fff" }
        }
      ></div>
      <Image src={sun} alt="sun" width={20} height={20} />
    </div>
  );
};

export default ThemeToggle;
