import Head from "next/head";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}