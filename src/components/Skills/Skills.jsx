/* This example requires Tailwind CSS v2.0+ */
//import javascript icon react-icons
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiBootstrap, DiSass, DiGit, DiTypescript, DiStylus } from "react-icons/di";

import { SiTypescript, SiStyledcomponents, SiTailwindcss } from "react-icons/si";

const features = [
  {
    name: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma.",
    icon: DiJavascript1,
  },
  {
    name: "React",
    description: "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    icon: DiReact,
  },
  {
    name: "Typescript",
    description: "TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem.",
    icon: SiTypescript,
  },
  {
    name: "Styled Components",
    description:
      "Styled Components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente em sua aplicação.",
    icon: SiStyledcomponents,
  },
  {
    name: "HTML",
    description: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
    icon: DiHtml5,
  },
  {
    name: "Tailwind CSS",
    description: "Tailwind CSS é um framework CSS utilitário que pode ser usado para construir rapidamente interfaces de usuário.",
    icon: SiTailwindcss,
  },
];

export default function Skills() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">Minhas Skills</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Tecnologias que utilizo</p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">Aqui estão algumas das tecnologias que utilizo no meu dia a dia.</p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
