import Pagination from '../pagination/Pagination'
import styles from './cardlist.module.css'

const Cardlist = () => {
  return (
    <div className={styles.container}>Category
    <Pagination />
    </div>
  )
}

export default Cardlist