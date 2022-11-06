import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "./Input";

export const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cors: "no-cors",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) throw Error(json.message);

    Toastify({
      text: "Mensagem enviada com sucesso!",
      duration: 3000,
    }).showToast();

    setLoading(false);
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  console.log(loading);

  return (
    <div className="mt-6">
      <form
        action="#"
        method="POST"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <Input
          label="Nome completo"
          type="text"
          id="name"
          placeholder="Nome completo"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <div>
          <label htmlFor="message" className="sr-only">
            Sua mensagem
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            autoComplete="message"
            placeholder="Sua mensagem"
            required
            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </div>

        <div>
          {loading ? (
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                data.name.length === 0 ||
                data.email.length === 0 ||
                data.message.length === 0
              }
            >
              Enviando{" "}
              <AiOutlineLoading3Quarters className="animate-spin ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
               disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                data.name.length === 0 ||
                data.email.length === 0 ||
                data.message.length === 0
              }
            >
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
