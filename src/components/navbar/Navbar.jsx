"use client";
import Link from "next/link";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import Modal from "../signin modal/Modal";
const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/learn", title: "Learn" },
    { path: "/leaderboard", title: "Leaderboard" },
    { path: "/about", title: "About" },
  ];
  let pathname = usePathname();
  return (
    <>
      <Modal />
      <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <ul>
          {links.map((e) => {
            return (
              <Link
                href={e.path}
                className={`${pathname == e.path && styles.active} ${
                  styles.links
                }`}
              >
                {e.title}
              </Link>
            );
          })}
          <button className={styles.signInbtn}>SignIn</button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
