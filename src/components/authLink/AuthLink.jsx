"use client";

import { useState } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const staus = "notLoggedIn";
  return (
    <>
      {staus === "notLoggedIn" ? (
        <div>
          <div className={styles.login}>Login</div>
        </div>
      ) : (
        <div className={styles.dashboard}>
          <div className={styles.createPost}>Create Post</div>
          <div className={styles.logout}>Logout</div>
        </div>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/" className={styles.link}>About</Link>
          <Link href="/" className={styles.link}>Contact</Link>
          {staus === "notLoggedIn" ? (
            <div>
              <div className={styles.Droplogin}>Login</div>
            </div>
          ) : (
            <div className={styles.Dropdashboard}>
              <div className={styles.DropcreatePost}>Create Post</div>
              <div className={styles.Droplogout}>Logout</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
