import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";

const Cardlist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default Cardlist;
