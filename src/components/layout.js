import styles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";


const name = 'LX';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({children,home}) {
    return <div className={styles.container}>
         <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
   
    </div>
}