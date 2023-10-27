import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Abhishek here! </b><br /> Descover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.posTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          </h1>
          <p className={styles.posDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            fugit libero obcaecati accusantium voluptatem, aut facere natus
            laudantium ratione impedit unde? Nesciunt consequatur officiis quo
            ut. Quibusdam alias libero dicta.
          </p>
          <button className={styles.posBtn}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
