import React from "react";
import Link from "next/link";
import { CartIcon } from "./CartIcon";

const styles = {
  background: "bg-white shadow-sm",
  container: "max-w-7xl mx-auto px-8",
  menuSection: "flex justify-between w-full py-6",
  menuLink:
    "font-bold text-gray-700 hover:text-blue-400 z-10 flex items-center text-sm",
};

export const Navbar = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.menuSection}>
          <Link href="/" legacyBehavior>
            <a className={styles.menuLink} aria-expanded="false">
              All Products
            </a>
          </Link>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};