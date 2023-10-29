import Link from "next/link";
import styles from "./category.module.css";
import Image from "next/image";

const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=technology"
          className={`${styles.category} ${styles.technology}`}
        >
          <Image
            src="/technology.jpg"
            width={32}
            height={32}
            className={styles.images}
          />
          technology
        </Link>

        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.jpg"
            width={32}
            height={32}
            className={styles.images}
          />
          coding
        </Link>

        <Link
          href="/blog?cat=robotics"
          className={`${styles.category} ${styles.robotics}`}
        >
          <Image
            src="/robots.jpg"
            width={32}
            height={32}
            className={styles.images}
          />
          robotics
        </Link>

        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.jpg"
            width={32}
            height={32}
            className={styles.images}
          />
          travel
        </Link>

        <Link
          href="/blog?cat=aiml"
          className={`${styles.category} ${styles.aiml}`}
        >
          <Image
            src="/aiml.jpg"
            width={32}
            height={32}
            className={styles.images}
          />
          Ai/Ml
        </Link>

        <Link
          href="/blog?cat=sports"
          className={`${styles.category} ${styles.sports}`}
        >
          <Image
            src="/sports.jpg"
            width={32}
            height={32}
            className={styles.images}
          />
        sports
        </Link>
      </div>
    </div>
  );
};

export default Category;
