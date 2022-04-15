import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Lorem Ipsum</h1>
      <p className={styles.text}>Nam interdum porta ante, at posuere lectus suscipit at. Sed quis efficitur nulla. Suspendisse orci mi, consectetur id vehicula auctor, sodales ac urna. Praesent non faucibus nibh. Quisque ullamcorper, augue a porttitor imperdiet, mauris enim sollicitudin ante, et tempor massa nunc nec augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum mi ligula, ut blandit est sollicitudin at. </p>

      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
