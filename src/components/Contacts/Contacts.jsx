import { ChevronRightIcon } from "@heroicons/react/solid";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Form } from "./Form";
import TypewritterEf from "../Typewritter";

export default function Contacts() {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="text-center mt-20">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
          <TypewritterEf text="Contatos" />
        </h2>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-200 sm:text-4xl">
          Entre em contato comigo
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4 z-10 relative">
          Se você tem alguma dúvida, ou quer conversar sobre algum projeto,
          entre em contato comigo.
        </p>
      </div>
      <div
        className="hidden sm:block sm:absolute sm:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width={364}
            height={384}
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      Entre em contato!
                    </span>
                    <span className="ml-4 text-sm">Solicite um orçamento.</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">
                      <span className="text-gray-300">Olá, meu nome é</span>{" "}
                      <br />
                    </span>{" "}
                    <span className="text-indigo-400 md:block">
                      <span className="text-gray-300">Alexandre</span> <br />
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Sou desenvolvedor web e mobile, e estou aqui para te ajudar
                    a criar o seu projeto. {""}
                    <span className="text-blue-500">
                      Entre em contato agora mesmo!
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Contato
                      </p>

                      <div className="mt-1 grid grid-cols-3 gap-3">
                        <div>
                          <a
                            href="https://www.linkedin.com/in/alexandre-medina-a9259a148/"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="sr-only">
                              Contato pelo Linkedin
                            </span>
                            <FaLinkedinIn size="20" />
                          </a>
                        </div>

                        <div>
                          <a
                            href="
                            https://api.whatsapp.com/send?phone=5511991207155&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">
                              Contato pelo Whatsap
                            </span>
                            <FaWhatsapp size="20" />
                          </a>
                        </div>

                        <div>
                          <a
                            href="https://alemedinabjj.com"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="sr-only">Contato pelo Github</span>
                            <FaGithub size="20" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Ou</span>
                      </div>
                    </div>

                    <Form />
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      Obrigado por entrar em contato. Em breve entrarei em
                      contato com você.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
