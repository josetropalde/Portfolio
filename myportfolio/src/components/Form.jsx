import { useState } from "react";
import { sendContactMail } from "../../services/sendMail";
import toast from "react-hot-toast";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  async function handleForm(event) {
    event.preventDefault();

    if (loading) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast("Preencha todos os campos para enviar sua mensagem", {
        style: {
          background: "#f87171",
          color: "#fff",
        },
      });
      return;
    }
    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName("");
      setEmail("");
      setMessage("");
      toast("Mensagem enviada! Entrarei em contato o mais rápido possível!", {
        style: {
          background: "#4ade80",
          color: "#fff",
        },
      });
    } catch (err) {
      toast("Ocorreu um erro inesperado. Entre em contato de outra forma", {
        style: {
          background: "#f87171",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="my-20 lg:my-48 text-center px-4">
      <h1>
        Mande uma mensagem agora mesmo ou envie um email se preferir{" "}
        <a href="mailto:contatojosehenriquetr@gmail.com" className="font-bold">
          contatojosehenriquetr@gmail.com
        </a>
      </h1>
      <form className="mt-8 lg:mt-16 px-[5%]" onSubmit={handleForm}>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Nome"
          className="block m-auto w-full md:w-[500px] p-2 rounded bg-transparent border border-zinc-500 outline-none"
        />
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
          className="my-6 block m-auto w-full md:w-[500px] p-2 rounded bg-transparent border border-zinc-500 outline-none"
        />
        <textarea
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          cols="30"
          rows="5"
          placeholder="Mensagem"
          className="w-full md:w-[500px] block m-auto p-2 rounded bg-transparent border border-zinc-500 outline-none resize-none"
        ></textarea>
        <button
          disabled={loading}
          type="submit"
          className="block m-auto bg-white p-3 text-black rounded-md mt-8"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
