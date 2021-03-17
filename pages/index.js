import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consectetur eveniet voluptas eaque maxime reprehenderit porro mollitia,
        consequatur quia quibusdam modi accusamus. Laboriosam, ratione ex odio
        quibusdam optio sed id.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut
        facilis tempore iure quia omnis eligendi quidem, reiciendis magni
        consectetur, minima necessitatibus dignissimos ratione et unde soluta
        doloremque. Voluptatibus, recusandae
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
