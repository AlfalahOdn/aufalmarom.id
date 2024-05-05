import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import React from "react";
import Service from "@/components/Service";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment >
      
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>aufalmarrom.id</title>
      </Head>
    <main className="w-full">
      <Layout >
        
        <Hero />
        <Service />
     
       </Layout>
    </main>
    </React.Fragment>
  );
}
