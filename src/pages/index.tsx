import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Carousel from "@/components/sections/Carousel";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Statistics from "@/components/sections/Statistics";
import Testimonial from "@/components/sections/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Carousel />
      <Hero />
      <Features />
      <Statistics />
      <Testimonial />
      <Footer />
    </>
  );
}
