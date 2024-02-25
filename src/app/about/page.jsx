import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import darpan from "../../../public/developer/20240218_123506.jpg";
import bishnu from "../../../public/developer/420576288_965497768418555_8451520561355716310_n.jpg";
import vivek from "../../../public/developer/376552566_1494094581358479_2711768330671493501_n.jpg";
const about = () => {
  return (
    <div className={styles.display}>
      <div className={styles.container}>
        <div>
          <div className={styles.desc}>
            <h5 className={styles.note}>How it Started</h5>
            <h1 className={styles.title}>
              Our Dreams Is Your Colorize Your Past And History
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              molestias modi non aliquid beatae, nisi fugit numquam veritatis,
              harum consequatur sunt placeat, iure ratione dolor temporibus!
              Nemo rerum eius excepturi!
            </p>
          </div>
        </div>
        <div className={styles.productbox}>
          <div className={styles.product}>
            <div className={styles.imgcontainer}>
              <div className={styles.devdetail}>
                <Image
                  src={darpan}
                  alt="darpan"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <label htmlFor="name" className={styles.label}>
                  Darpan Katel
                </label>
              </div>
              <div className={styles.devdetail}>
                <Image
                  src={bishnu}
                  alt="Bishnu"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <label htmlFor="name" className={styles.label}>
                  Bishnu Dat Badu
                </label>
              </div>
              <div className={styles.devdetail}>
                <Image
                  src={vivek}
                  alt="Vivek"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <label htmlFor="name" className={styles.label}>
                  Bibek Sunar
                </label>
              </div>
            </div>
          </div>

          <div className={styles.ratings}>
            <div className={styles.ratingbox}>
              <span className={styles.rating}>3.5</span>
              <p className={styles.subdesc}>Year Experince</p>
            </div>
            <div className={styles.ratingbox}>
              <span className={styles.rating}>23</span>
              <p className={styles.subdesc}>Project Challenge</p>
            </div>
            <div className={styles.ratingbox}>
              <span className={styles.rating}>830+</span>
              <p className={styles.subdesc}>Happy Clients</p>
            </div>
            <div className={styles.ratingbox}> <span className={styles.rating}>100K</span>
              <p className={styles.subdesc}>Loved</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
