"use client";
import React from "react";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import styles from "./page.module.css";

function Login() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  return (
    <div className={styles["login-container"]}>
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles["login-form"]}>
          <div className={styles["input-container"]}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div className={styles.input}>
              <CiUser />
              <input
                type="email"
                id="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                placeholder="username@example.com"
              />
            </div>
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.input}>
              <CiLock />
              <input
                type="password"
                id="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </div>
            <Link href="/forgot-password" className={styles["forgot-password"]}>
              Forgot Password?
            </Link>
          </div>
          <button className={`${styles.button} ${styles["login-button"]}`}>
            Login
          </button>
        </form>
        <div className={styles["social-login"]}>
          <hr />
          <p>or login with</p>
          <div className={styles["social-icons"]}>
            <Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt="Google Icon"
                width={20}
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              />
              Sign in with Google
            </Link>
          </div>
        </div>
        <div className={styles["create-account"]}>
          <p>
            Don't have an account? <Link href="/account/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
