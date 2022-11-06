/* This example requires Tailwind CSS v2.0+ */
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import TypewritterEf from "../Typewritter";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center " data-aos="zoom-out-right">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            <TypewritterEf text="Quem sou?" />
          </h2>
          <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
            Meu nome é <span className="text-indigo-600">Alexandre</span>, e eu
            sou um desenvolvedor web.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Sou um desenvolvedor web apaixonado por tecnologia, e atualmente
            estou focado em desenvolvimento web com ReactJS e NextJS.
          </p>
        </div>
      </div>
    </div>
  );
}
