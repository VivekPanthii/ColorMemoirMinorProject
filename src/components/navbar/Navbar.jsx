"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import logo from "../../../public/logo/horizontal-logo-no-bg.svg"

import { Dropdown, Space } from "antd";

const items = [
  {
    label: <a href="/profile/">Profile</a>,
    key: "0",
  },
  {
    label: <a href="/settings/">Settings</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Log out",
    key: "3",
    danger: true,
  },
];

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },
  // {
  //   id: 3,
  //   title: "Contact",
  //   url: "contact",
  // },
];

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
        src={logo}
        alt="logo"
        width={"200"}
        height={"100"}
        />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {userLoggedIn ? (
          <button
            className={styles.logout}
            onClick={() => {
              console.log("Logged Out");
            }}
          >
            Log Out
          </button>
        ) : (
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div className={styles["profile-container"]}>
              <img
                src="https://i.pravatar.cc/300"
                alt="profile"
                className={styles.profile}
              />
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Navbar;
