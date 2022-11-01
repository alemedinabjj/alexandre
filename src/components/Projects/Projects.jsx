import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const posts = [
  {
    title: "Agendamento de Entrevistas",
    href: "#",
    category: { name: "Recruiter", href: "https://recruiters-tau.vercel.app/" },
    description: "Agendamento de entrevistas com candidatos para vagas de emprego e envio de e-mails automáticos.",
    imageUrl: "https://user-images.githubusercontent.com/101877712/197321799-df63da8d-03a4-40da-967f-e67268682c7e.png",
    links: {
      github: { name: "Github", href: "https://github.com/alemedinabjj/recruiters", icon: <FaGithub /> },
      live: { name: "Live", href: "https://recruiters-tau.vercel.app/", icon: <FaExternalLinkAlt /> },
    },
  },
  {
    title: "Web Filmes",
    href: "#",
    category: { name: "Filmes", href: "https://github.com/alemedinabjj/wbapifilmes" },
    description:
      "Web Filmes é um projeto de estudo que consiste em uma aplicação web que consome a API do The Movie Database (TMDb) para exibir informações sobre filmes.",
    imageUrl:
      "https://camo.githubusercontent.com/a43affce4ae0ba5913ae0fe8607c4a36b986b099fb4201b8c20173edd4d5ae9d/68747470733a2f2f692e696d6775722e636f6d2f43675249424a662e706e67",
    links: {
      github: { name: "Github", href: "https://github.com/alemedinabjj/wbapifilmes", icon: <FaGithub /> },
      live: { name: "Live", href: "https://wbapifilmes.vercel.app/", icon: <FaExternalLinkAlt /> },
    },
  },

  {
    title: "Clone do Whatsapp",
    href: "#",
    category: { name: "Whatsapp", href: "https://whatsapp-gray.vercel.app" },
    description:
      "Clone do Whatsapp é um projeto de estudo que consiste em uma aplicação web que conecta um chat entre duas pessoas, para iniciarem uma conversa.",
    imageUrl: "https://raw.githubusercontent.com/alemedinabjj/whatsapp/main/src/assets/preview2.png",
    links: {
      github: { name: "Github", href: "https://github.com/alemedinabjj/whatsapp", icon: <FaGithub /> },
      live: { name: "Live", href: "https://whatsapp-gray.vercel.app", icon: <FaExternalLinkAlt /> },
    },
  },
];

export default function Projects() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Projetos</h2>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">O que eu já fiz</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Alguns dos projetos que já fiz, e que estão disponíveis no meu GitHub.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2" target="_blank" rel="noopener noreferrer">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 flex gap-3">
                    <a href={post.links?.github.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      <span className="text-2xl">{post.links?.github.icon}</span>
                    </a>
                    <a href={post.links?.live.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      <span className="text-2xl">{post.links?.live.icon}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="text-center flex items-center justify-center flex-col gap-2">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">...e muito mais!</h2>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              <a href="https://alemedinabjj.com.br" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Visite meu GitHub para ver todos os projetos que já fiz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
