import Head from "next/head";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio | Ale</title>
      </Head>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
