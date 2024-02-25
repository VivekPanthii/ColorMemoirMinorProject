"use client";
import React from "react";
import styles from "./page.module.css";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const { Dragger } = Upload;
const colorize = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Dragger className={styles.upload}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className={styles.text}>
              Click or drag file to this area to upload
            </p>
            <p className={styles.warning}>
              Support for a single upload only.
            </p>
          </Dragger>
        </div>
        <button className={styles.button}>Colorize</button>
      </div>

      
    </>
  );
};

export default colorize;
