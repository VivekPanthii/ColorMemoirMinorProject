"use client";
import React from "react";
import { Table, Tag } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import first from "../../../public/first.jpg";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { getFormattedDateTime  } from "@/utils";

const user = {
  "id": 2,
  "last_login": "2024-01-17T18:29:41.280049Z",
  "username": "deep",
  "first_name": "Deepshikha",
  "last_name": "Kattel",
  "email": "deep@gmail.com",
  "is_active": true,
  "date_joined": "2024-01-17T18:21:33.650070Z"
};

const photoConversions = [
  {
    name: "Pashupatinath",
    input_image: "http://192.168.1.67:8000/media/input_images/22.jpg",
    reference_id: "R8yuSRoUzC",
    output_image: null,
    created: "2024-02-25T08:29:57.404523Z",
    status: "pending",
  },
  {
    name: "A random lady",
    input_image: "http://192.168.1.67:8000/media/input_images/1.jpg",
    reference_id: "INqMEqXuvr",
    output_image: null,
    created: "2024-02-25T08:41:07.102709Z",
    status: "pending",
  },
];

const columns = [
  {
    title: "Id",
    dataIndex: "reference_id",
    key: "reference_id",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "reference_id",
    //   render: (text) => <a>{text}</a>,
  },
  {
    title: "Input Image",
    dataIndex: "input_image",
    key: "reference_id",
    render: (input_image) => (
      <img src={input_image} alt="" width="100" height="100" />
    ),
  },
  {
    title: "Output Image",
    dataIndex: "output_image",
    key: "reference_id",
    render: (output_image) =>
      output_image ? (
        <img src={output_image} alt="" width="100" height="100" />
      ) : (
        "--"
      ),
  },
  {
    title: "Created Date",
    dataIndex: "created",
    key: "reference_id",
    render: (created) => <span>{created}</span>,
  },
  {
    title: "Status",
    key: "reference_id",
    dataIndex: "status",
    render: (status) => <Tag color={status === "pending" ? "yellow" : status === "completed" ? "green" : "red"}>{status.toUpperCase()}</Tag>,
  },
];

const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.leftProfile}>
          <div className={styles.imageContainer}>
            <Image
              src={"https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg"}
              alt=""
              width={"160"}
              height={"160"}
              className={styles.image}
            />
          </div>
          <p className={styles["profile-name"]}>
            {user.first_name} {user.last_name}
          </p>
          <p className={styles["profile-username"]}>@{user.username}</p>
        </div>
        <div className={styles.rightProfile}>
          <div className={styles["last-login"]}>
              <span className={styles.icon}><IoIosLogIn /></span>
              <p className={styles.lastLogInText}>Last Login</p>
              <p className={styles.lastLogInContent}>{getFormattedDateTime(user.last_login)}</p>
            </div>
            <div className={styles["date-joined"]}>
              <span className={styles.icon}><FiUserPlus /></span>
              <p className={styles.lastLogInText}>Date Joined</p>
              <p className={styles.lastLogInContent}>{getFormattedDateTime(user.date_joined)}</p>
            </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <Table
          columns={columns}
          dataSource={photoConversions}
          bordered
          className={styles.table}
        />
      </div>
    </div>
  );
};

export default Profile;
