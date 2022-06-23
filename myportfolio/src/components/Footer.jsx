export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex justify-center bg-zinc-800 w-full py-4">
      <div className="text-xs mx-4 bg-zinc-700 rounded shadow-md p-2 ease-in-out duration-300 hover:bg-zinc-600">
        <a href="#">github</a>
      </div>
      <div className="text-xs mx-4 bg-zinc-700 rounded shadow-md p-2  ease-in-out duration-300 hover:bg-zinc-600 ">
        <a href="#">Whatsapp</a>
      </div>
      <div className="text-xs mx-4 bg-zinc-700 rounded shadow-md p-2  ease-in-out duration-300 hover:bg-zinc-600 ">
        <a href="#">E-mail</a>
      </div>
    </div>
  );
}
