import Head from 'next/head'
// import Image from 'next/image'
import Layout ,{ siteTitle } from "../components/layout";
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { getSortedPostsData } from "../lib/posts";
// import { Instagram } from 'reactjs-social-embed'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


const FBCard  = dynamic(()=> import('@/components/FBcard'),{ssr: false})


const inter = Inter({ subsets: ['latin'] })

export default function Home({allPostsData}:{allPostsData: any[]}) {
  useEffect(()=>{

  },[])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{width:'390px',height:'100vh',display:'flex',justifyContent:"center"}}>
          <FBCard/>
      </div>
    </Layout>
  )
}

