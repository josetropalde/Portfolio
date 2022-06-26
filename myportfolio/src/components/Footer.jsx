export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex justify-center bg-zinc-800 w-full py-4 z-10">
      <div className="text-xs mx-4 bg-zinc-700 rounded shadow-md p-2 ease-in-out duration-300 hover:bg-zinc-600">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/josetropalde"
        >
          <img src="/github-brands.png" alt="Github" className="w-4 lg:w-6" />
        </a>
      </div>
      <div className="text-xs mx-4 bg-zinc-700 rounded shadow-md p-2  ease-in-out duration-300 hover:bg-zinc-600 ">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=551999053826&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre"
        >
          <img
            src="/whatsapp-brands.png"
            alt="Whatsapp"
            className="w-4 lg:w-6"
          />
        </a>
      </div>
      <div className="text-xs mx-4 bg-zinc-700 rounded shadow-md p-2  ease-in-out duration-300 hover:bg-zinc-600 ">
        <a href="mailto:contatojosehenriquetr@gmail.com">
          <img src="/envelope-solid.png" alt="E-mail" className="w-4 lg:w-6" />
        </a>
      </div>
    </div>
  );
}
