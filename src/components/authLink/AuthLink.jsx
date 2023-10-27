import styles from './authLink.module.css'

const AuthLink = () => {

  const staus = "notLoggedIn"
  return (
    <>
    {
      staus === "notLoggedIn" ? (
        <div >
          <div className={styles.login}>Login</div>
          
        </div>
      ) : (
        <div className={styles.dashboard}>
          <div className={styles.createPost}>Create Post</div>
          <div className={styles.logout}>Logout</div>
        </div>
      )
    }
    </>
  )
}

export default AuthLink