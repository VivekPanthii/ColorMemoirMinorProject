import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
const page = () => {
  return (
    <div className={styles.display}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Result</h2>
        </div>
        <div className={styles.photo}>
          <div className={`${styles.prevphoto} ${styles.commonphoto}`}>
            <h3>Input Photo</h3>
            <img
              src={"http://192.168.1.67:8000/media/input_images/22.jpg"}
              styles={styles.image}
            />
          </div>
          <div className={`${styles.nextphoto} ${styles.commonphoto}`}>
            <h3>Colored Photo</h3>
            <img
              src={"http://192.168.1.67:8000/media/input_images/22.jpg"}
              styles={styles.image}
              width={256 * 2}
            />
            <Button text={"Download"} url={"#"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
