import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const posts = [
  {
    title: "Agendamento de Entrevistas",
    href: "#",
    category: { name: "Recruiter", href: "https://recruiters-tau.vercel.app/" },
    description:
      "Agendamento de entrevistas com candidatos para vagas de emprego e envio de e-mails automáticos.",
    imageUrl:
      "https://user-images.githubusercontent.com/101877712/197321799-df63da8d-03a4-40da-967f-e67268682c7e.png",
    links: {
      github: {
        name: "Github",
        href: "https://github.com/alemedinabjj/recruiters",
        icon: <FaGithub />,
      },
      live: {
        name: "Live",
        href: "https://recruiters-tau.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },
    },
  },
  {
    title: "Web Filmes",
    href: "#",
    category: {
      name: "Filmes",
      href: "https://github.com/alemedinabjj/wbapifilmes",
    },
    description:
      "Web Filmes é um projeto de estudo que consiste em uma aplicação web que consome a API do The Movie Database (TMDb) para exibir informações sobre filmes.",
    imageUrl:
      "https://camo.githubusercontent.com/a43affce4ae0ba5913ae0fe8607c4a36b986b099fb4201b8c20173edd4d5ae9d/68747470733a2f2f692e696d6775722e636f6d2f43675249424a662e706e67",
    links: {
      github: {
        name: "Github",
        href: "https://github.com/alemedinabjj/wbapifilmes",
        icon: <FaGithub />,
      },
      live: {
        name: "Live",
        href: "https://wbapifilmes.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },
    },
  },

  {
    title: "Clone do Whatsapp",
    href: "#",
    category: { name: "Whatsapp", href: "https://whatsapp-gray.vercel.app" },
    description:
      "Clone do Whatsapp é um projeto de estudo que consiste em uma aplicação web que conecta um chat entre duas pessoas, para iniciarem uma conversa.",
    imageUrl:
      "https://raw.githubusercontent.com/alemedinabjj/whatsapp/main/src/assets/preview2.png",
    links: {
      github: {
        name: "Github",
        href: "https://github.com/alemedinabjj/whatsapp",
        icon: <FaGithub />,
      },
      live: {
        name: "Live",
        href: "https://whatsapp-gray.vercel.app",
        icon: <FaExternalLinkAlt />,
      },
    },
  },
];