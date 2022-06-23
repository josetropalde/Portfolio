export default function Form() {
  return (
    <div className="mt-20 lg:mt-48 text-center px-4">
      <h1>
        Mande uma mensagem agora mesmo ou envie um email se preferir{" "}
        <a href="mailto:josehenrique.tropalde@gmail.com" className="font-bold">
          josehenrique.tropalde@gmail.com
        </a>
      </h1>
      <form className="mt-8 lg:mt-16 px-[5%] ">
        <input
          type="text"
          placeholder="Nome"
          className="block m-auto w-full md:w-[500px] p-2 rounded bg-transparent border border-zinc-500 outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="my-6 block m-auto w-full md:w-[500px] p-2 rounded bg-transparent border border-zinc-500 outline-none"
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Mensagem"
          className="w-full md:w-[500px] block m-auto p-2 rounded bg-transparent border border-zinc-500 outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          className="block m-auto bg-white p-3 text-black rounded-md mt-8"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
