import Featured from "@/components/featured/Featured";
import styles from "./home.module.css"
import Category from "@/components/category/Category";
import Cardlist from "@/components/cardlist/Cardlist";
import Menu from "@/components/menu/Cardlist";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
      
    </div>
  );
}
