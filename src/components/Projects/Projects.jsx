import { FaGithub } from "react-icons/fa";
import TypewritterEf from "../Typewritter";
import { posts } from "./data";
import Image from "next/image";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            <TypewritterEf text="Projetos" />
          </h2>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            O que eu já fiz
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Alguns dos projetos que já fiz, e que estão disponíveis no meu
            GitHub.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a
                      href={post.category.href}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.category.name}
                    </a>
                  </p>
                  <a
                    href={post.href}
                    className="block mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 flex gap-3">
                    <a
                      href={post.links?.github.href}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-2xl">
                        {post.links?.github.icon}
                      </span>
                    </a>
                    <a
                      href={post.links?.live.href}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              <TypewritterEf text="...e muito mais!" />
            </h2>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              <a
                href="https://github.com/alemedinabjj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Visite meu GitHub para ver todos os projetos que já fiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
